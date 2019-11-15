import * as React from 'react'
import {observer} from "mobx-react";

@observer
export class SendMessage extends React.Component<any, any> {
    private readonly userId: string;
    private messageInput: string;
    private form: HTMLFormElement | undefined | null;
    private jsonForSendMessage = {
        contents: ""
    };

    constructor(props) {
        super(props);
        this.userId = props.userId;
        this.messageInput = "";
        this.form = undefined;
    }

    sendMessage = e => {
        e.preventDefault();
        this.jsonForSendMessage.contents = this.messageInput;
        // @ts-ignore
        this.props.messages.setNewMessageInListMessage(this.jsonForSendMessage);
        this.messageInput = "";
        if (this.form instanceof HTMLFormElement)
            this.form.reset();
    };

    handleOnChangeMessageInput = e => {
        this.messageInput = e.currentTarget.value;
    };

    render() {
        return (
            <form className="need-validation" ref={(el) => this.form = el} onSubmit={this.sendMessage}>
                <div className="form-group label-floating is-empty">
                    <label className="control-label">Press enter to post...</label>
                    <input className="form-control" placeholder="" onChange={this.handleOnChangeMessageInput}/>
                    <div className="add-options-message">
                        <a href="#" className="options-message">
                            <svg className="olymp-computer-icon">
                                <use xlinkHref="/svg-icons/sprites/icons.svg#olymp-computer-icon"></use>
                            </svg>
                        </a>
                    </div>
                </div>
                <input type="submit" className="submit-chat"/>
            </form>
        );
    }
}
