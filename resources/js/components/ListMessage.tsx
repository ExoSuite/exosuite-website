import * as React from 'react';
import {findDOMNode} from 'react-dom';
import {observer} from "mobx-react";
import MessageController from "../Controllers/MessageController";

interface messages {
    id: string,
    user_id: string,
    created_at: string,
    contents: string
}

@observer
export default class ListMessage extends React.Component {
    private readonly userId: string;
    private messagesEnd: any;

    constructor(props) {
        super(props);
        this.userId = props.userId;
    }

    async componentWillMount() {
        // @ts-ignore
        await this.props.messages.callAPIForSetMessages();
    }

    render() {
        // @ts-ignore
        const messages = this.props.messages.Messages;
        return (
            <ul className="notification-list chat-message chat-message-field" ref={(el) => { this.messagesEnd = el; }}>
                {
                    messages && messages.map((item: messages) => {
                        return (
                            <li key={item.id}>
                                <div
                                    className={"author-thumb " + (item.user_id === this.userId ? "chat-me-avatar" : 0)}>
                                    <img src="/img/social/avatar14-sm.jpg" alt="author" className="mCS_img_loaded"/>
                                </div>
                                <div
                                    className={"notification-event " + (item.user_id === this.userId ? "chat-me-wrapper-text" : 0)}>
                                <span
                                    className={"chat-message-item " + (item.user_id === this.userId ? "chat-me" : 0)}>{item.contents}</span>
                                    <span className="notification-date">
                                    <time className="entry-date updated"
                                          dateTime="2004-07-24T18:18">{item.created_at}</time>
                                </span>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}