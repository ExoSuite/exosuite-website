import { ApisauceInstance, create, ApiResponse } from "apisauce";
import * as https from "https";
import jwtDecode from "jwt-decode";
import { getGeneralApiProblem } from "./api-problem";
import { config, DEFAULT_API_CONFIG } from "./config";
import { HttpRequest } from "./HttpRequest";
import { IClient, IGrantRequest, ITokenResponse } from "./ApiTypes";
import { global } from './global';


/**
 * Manages all requests to the API.
 */
export class Api {
    /**
     * The underlying apisauce instance which performs the requests.
     */
    apisauce: ApisauceInstance;

    website: ApisauceInstance;

    /**
     * Configurable options.
     */
    config: config;

    private static _Instance: Api|null = null;


    private readonly client: IClient;

    private readonly grantRequest: IGrantRequest;

    static get Instance(): Api {
        if (Api._Instance === null)
            Api._Instance = new Api();
        return Api._Instance;
    }

    /**
     * Creates the api.
     *
     * @param config The configuration to use.
     */
    constructor(config: config = DEFAULT_API_CONFIG) {
        this.config = config;
        this.client = {
            client_id: 131,
            client_secret: "pxAbi1S7lwQpnYZxIbXiccXb7F8BHP55E7nut4Zs"
        };

        this.grantRequest = {
            ...this.client,
            grant_type: "refresh_token",
            refresh_token: "",
            scope: ""
        };

        this.apisauce = create({
            baseURL: this.config.url,
            timeout: this.config.timeout,
            headers: {
                Accept: "application/json"
            },
            httpsAgent: new https.Agent({ keepAlive: true }), // see HTTP keep alive
            adapter: require("axios/lib/adapters/http") // define real http adapter
        });

        this.website = create({
            baseURL: this.config.websiteUrl,
            timeout: this.config.timeout,
            headers: {
                Accept: "application/json"
            },
            httpsAgent: new https.Agent({ keepAlive: true }), // see HTTP keep alive
            adapter: require("axios/lib/adapters/http") // define real http adapter
        });
    }

    /**
     * Sets up the API.  This will be called during the bootup
     * sequence and will happen before the first React component
     * is mounted.
     *
     * Be as quick as possible in here.
     */

    private static isITokenResponse(arg: any): arg is ITokenResponse {
        return typeof (arg) !== "boolean";
    }

    async checkToken(): Promise<ITokenResponse | boolean> {
        // get tokens from secure storage
        const credentials: ITokenResponse | boolean = global.token;
        // check if credentials match with type ITokenResponse
        if (Api.isITokenResponse(credentials)) {
            // decode token
            const decoded = jwtDecode(credentials.access_token);
            // check if token is expired
            if (decoded.expires_in <= 0) {
                // assign refresh token to grantRequest
                this.grantRequest.refresh_token = credentials.refresh_token;
                // call api for new tokens
                const response = await this.apisauce.post("oauth/token", this.grantRequest);
                // @ts-ignore
                const newTokens: ITokenResponse = response.data;
                // save new tokens
                global.token = newTokens;
                this.website.patch("token", newTokens);
                // return new tokens
                return newTokens;
            }

            // return non modified tokens
            return credentials;
        } else {
            // if tokens was not provided throw an error
            throw new Error("Can't load token!");
        }
    }

    async request(
        httpMethod: HttpRequest,
        url: string,
        data: Object = {},
        headers: Object = {},
        requireAuth: boolean = true
    ): Promise<ApiResponse<any>> {

        if (requireAuth) {
            const token: ITokenResponse | boolean = await this.checkToken();
            if (Api.isITokenResponse(token) && token.access_token) {
                headers["Authorization"] = "Bearer " + token.access_token;
            } else {
                throw new Error("Required API authentication but access_token was undefined!");
            }
        }

        // set additional headers
        // @ts-ignore
        this.apisauce.setHeaders(headers);

        let apiCall: ApisauceInstance["delete"] | ApisauceInstance["post"]
            | ApisauceInstance["put"] | ApisauceInstance["patch"]
            | ApisauceInstance["get"];

        // choose method to use GET/POST/PUT/PATCH/DELETE
        if (httpMethod === HttpRequest.DELETE) apiCall = this.apisauce.delete;
        else if (httpMethod === HttpRequest.POST) apiCall = this.apisauce.post;
        else if (httpMethod === HttpRequest.PATCH) apiCall = this.apisauce.patch;
        else if (httpMethod === HttpRequest.GET) apiCall = this.apisauce.get;
        else if (httpMethod === HttpRequest.PUT) apiCall = this.apisauce.put;

        // launch api request
        // @ts-ignore
        const response: ApiResponse<any> = await apiCall(url, data);

        // the typical ways to die when calling an api fails
        if (!response.ok) {
            const problem = getGeneralApiProblem(response);
            throw new Error(problem ? problem.kind : "Request was canceled");
        }

        // return response from api
        return response;
    }
}