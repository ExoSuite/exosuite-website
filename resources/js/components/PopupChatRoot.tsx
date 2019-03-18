import * as React from 'react';
import {render} from 'react-dom';
import SendMessageForm from './SendMessageForm';
import ListMessage from './ListMessage';
import MessageController from "../Controllers/MessageController";
import {__delay__} from "../lib/lib";
import {observable, runInAction} from "mobx";
import {observer} from "mobx-react";

@observer
export default class PopupChatRoot extends React.Component<any, any> {

    @observable
    private groupId: string;
    private readonly userId: string;
    private readonly messagesController: MessageController;

    constructor(props) {
        super(props);
        this.groupId = this.props.group;
        this.userId = this.props.userId;
        this.messagesController = new MessageController(this.groupId);
        // @ts-ignore
        window.updateGroupId = (groupId) => runInAction(() => {
            this.groupId = groupId;
            this.messagesController.setId(groupId);
        })
    }

    sendMessage(msg) {
        this.messagesController.setNewMessageInListMessage(msg);
    }

    async componentWillMount() {
        // @ts-ignore
        while (!window.Echo) {
            await __delay__(100);
        }
        // @ts-ignore
        window.Echo.join(`group.${this.groupId}`).listen('.NewMessage', e => {
            this.messagesController.pushNewMessage(e);
        });
    }

    render() {
        return (
            <div className="modal-body" key={this.groupId}>
                <div className="mCustomScrollbar">
                    <ListMessage messages={this.messagesController} userId={this.userId}/>
                </div>
                <SendMessageForm messages={this.messagesController} userId={this.userId}/>
            </div>
        );
    }
}

/*if (document.getElementById('popupChatComponent')) {
    let el = document.getElementById('popupChatComponent');
    const props = Object.assign({}, el!.dataset);
    render(<PopupChatRoot {...props}/>, el);
}*/
