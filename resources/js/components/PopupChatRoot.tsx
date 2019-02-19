import * as React from 'react';
import {render} from 'react-dom';
import SendMessageForm from './SendMessageForm';
import ListMessage from './ListMessage';
import MessageController from "../Controllers/MessageController";

export default class PopupChatRoot extends React.Component {
    private readonly groupId: string;
    private readonly userId: string;
    private messagesController: MessageController;

    constructor(props) {
        super(props);
        // @ts-ignore
        this.groupId = this.props.group;
        // @ts-ignore
        this.userId = this.props.userId;
        this.messagesController = new MessageController(this.groupId);
    }

    sendMessage(msg) {
        this.messagesController.setNewMessageInListMessage(msg);
    }

    render() {
        return (
            <div className="modal-body">
                <div className="mCustomScrollbar" id="list-message">
                    <ListMessage messages={this.messagesController} userId={this.userId}/>
                </div>
                <SendMessageForm messages={this.messagesController} userId={this.userId}/>
            </div>
        );
    }
}

if (document.getElementById('popupChatComponent')) {
    let el = document.getElementById('popupChatComponent');
    const props = Object.assign({}, el!.dataset);
    render(<PopupChatRoot {...props}/>, el);
}