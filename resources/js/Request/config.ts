/**
 * The options used to configure the API.
 */

export interface config {
    /**
     * The URL of the api.
     */
    url: string;

    /**
     * Milliseconds before we timeout the request.
     */
    timeout: number;

    websiteUrl: string;
}

let URL: string;

if (process.env.MIX_API_DOMAIN === 'api.exosuite.local')
    URL = `http://${process.env.MIX_API_DOMAIN}/`;
else
    URL = `https://${process.env.MIX_API_DOMAIN}/`;

let website : string;

if (process.env.MIX_DOMAIN === 'exosuite.local')
    website = `http://${process.env.MIX_DOMAIN}/`;
else
    website = `https://${process.env.MIX_DOMAIN}/`;

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: config = {
    url: URL,
    timeout: 10000,
    websiteUrl: website
};