import * as React from 'react';
import {render} from 'react-dom';
import {ListMessage} from './ListMessage';
import MessageController from "../Controllers/MessageController";
import {__delay__} from "../lib/lib";
import {observable, runInAction} from "mobx";
import {observer} from "mobx-react";
import {SendMessage} from "./SendMessage";
import {Api} from "../Request/Api";
import {HttpRequest} from "../Request/HttpRequest";

@observer
class ChatRoot extends React.Component<any, any> {
    @observable
    private groupId: string;
    private readonly userId: string;
    private readonly messagesController: MessageController;
    private groups;

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

    async componentWillMount() {
        // @ts-ignore
        while (!window.Echo) {
            await __delay__(100);
        }
        /*await Api.Instance.request(HttpRequest.GET, 'user/me/groups').then((response: any) => {
           this.groups = response.data.data;
        });*/
    }

    render() {
        return (
            <div className="modal-body" key={this.groupId}>
                <div className="mCustomScrollbar ps ps--theme_default ps--active-y"
                     data-ps-id="2171723f-82c0-a55c-dc0e-5633ede2f0a5" id="chatComponent">
                    <ListMessage messages={this.messagesController} userId={this.userId} groupId={this.groupId}/>
                </div>
                <SendMessage messages={this.messagesController} userId={this.userId}/>
            </div>
        )
    }
}

if (document.getElementById('chatRoot')) {
    let el = document.getElementById('chatRoot');
    const props = Object.assign({}, el!.dataset);
    render(<ChatRoot {...props}/>, el);
}
