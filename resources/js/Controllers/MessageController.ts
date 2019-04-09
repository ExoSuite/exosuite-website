import {action, observable} from "mobx";
import {Api} from "../Request/Api";
import {HttpRequest} from "../Request/HttpRequest";

export default class MessageController {
    @observable private messages;
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    setId(id: string) {
        this.id = id;
    }

    async callAPIForSetMessages() {
        if (this.id)
        // @ts-ignore
            return await Api.Instance.requestForChat(HttpRequest.GET, 'group/' + this.id.concat('/message')).then((response: any) => {
                this.messages = response.data.data;
            }).catch((e) => console.log(e));
    }

    async callAPIForSendMessage(body: Object) {
        // @ts-ignore
        return await Api.Instance.request(HttpRequest.POST, 'group/' + this.id.concat('/message'), body);
    }

    setNewMessageInListMessage(body: Object) {
        this.callAPIForSendMessage(body).then((response : any) => {
            this.pushNewMessage(response.data)
        }).catch(e => console.log(e));
    }

    @action
    pushNewMessage(newMessage) {
        this.messages.push(newMessage);
    }

    get Messages(): [] {
        return this.messages;
    }
}
