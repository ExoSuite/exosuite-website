 import Echo from "laravel-echo"
import {Api} from "./Request/Api";
 import {HttpRequest} from "./Request/HttpRequest";

(<any>window)._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

(<any>window).axios = require('axios');

(<any>window).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */
let token: Element | null;
// @ts-ignore
token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    // @ts-ignore
    (<any>window).axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

(<any>window).io = require('socket.io-client');

Api.Instance.requestWebsite(HttpRequest.GET, 'token').then((response => {
    (<any>window).Echo = new Echo({
        broadcaster: 'socket.io',
        host: process.env.MIX_API_DOMAIN + ':6001',
        // @ts-ignore
        auth: {headers: {Authorization: "Bearer " + response.data.access_token}}
    });
}));