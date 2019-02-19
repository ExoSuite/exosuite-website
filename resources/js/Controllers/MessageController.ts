import {action, observable, runInAction} from "mobx";
import {Api} from "../Request/Api";
import {HttpRequest} from "../Request/HttpRequest";

interface messagesResponse {
    data: []
}

export default class MessageController {
    @observable private messages;
    private messageSend;
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    async callAPIForSetMessages() {
        // @ts-ignore
        return await Api.Instance.request(HttpRequest.GET, 'group/' + this.id.concat('/message')).then((response: messagesResponse) => {
            this.messages = response.data.reverse();
        }).catch((e) => console.log(e));
    }

    async callAPIForSendMessage(body: Object) {
        // @ts-ignore
        return await Api.Instance.request(HttpRequest.POST, 'group/' + this.id.concat('/message'), body);
    }

    setNewMessageInListMessage(body: Object) {
        this.callAPIForSendMessage(body).then((response) => {
            this.pushNewMessage(response.data)
        }).catch(e => console.log(e));
    }

    @action
    pushNewMessage(newMessage) {
        this.messages.unshift(newMessage);
    }

    get Messages(): [] {
        return this.messages;
    }
}