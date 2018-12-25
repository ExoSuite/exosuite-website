import * as React from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {render} from 'react-dom'
import {__delay__} from "../lib/lib";

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default class Notification extends React.Component {
    render(props) {
        return (
            <div>
                <ToastContainer
                    // @ts-ignore
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    {...props}
                />
            </div>
        );
    };

    async componentWillMount() {
        // @ts-ignore
        while (!window.Echo) {
            await __delay__(1000);
        }
        // @ts-ignore
        window.Echo.private('users.' + this.props.userId)
            .notification((notification) => {
                toast('🦄 ' + notification.data, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            });
    }
}

if (document.getElementById('notif')) {
    let el = document.getElementById('notif');
    const props = Object.assign({}, el!.dataset);
    render(<Notification {...props}/>, el);
}
