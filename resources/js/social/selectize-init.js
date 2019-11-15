$(document).ready(function () {
    var a = $(".js-user-search");
    a.length && a.selectize({
        persist: !1,
        maxItems: 1,
        valueField: "name",
        labelField: "name",
        searchField: ["name"],
        options: [{
            image: "img/avatar30-sm.jpg",
            name: "Mathilde",
            message: "",
            icon: "olymp-happy-face-icon"
        }, {
            image: "img/avatar54-sm.jpg",
            name: "Julie",
            message: "",
            icon: "olymp-happy-face-icon"
        }, {
            image: "img/avatar49-sm.jpg",
            name: "Mathilde",
            message: "",
            icon: "olymp-happy-face-icon"
        }, {
            image: "img/avatar36-sm.jpg",
            name: "Mathilde",
            message: "",
            icon: "olymp-happy-face-icon"
        }, {
            image: "img/avatar22-sm.jpg",
            name: "Mathilde",
            message: "",
            icon: "olymp-happy-face-icon"
        }, {image: "img/avatar41-sm.jpg", name: "Mathilde", message: "", icon: "olymp-star-icon"}],
        render: {
            option: function (a, e) {
                return '<div class="inline-items">' + (a.image ? '<div class="author-thumb"><img src="' + e(a.image) + '" alt="avatar"></div>' : "") + '<div class="notification-event">' + (a.name ? '<span class="h6 notification-friend"></a>' + e(a.name) + "</span>" : "") + (a.message ? '<span class="chat-message-item">' + e(a.message) + "</span>" : "") + "</div>" + (a.icon ? '<span class="notification-icon"><svg class="' + e(a.icon) + '"><use xlink:href="icons/icons.svg#' + e(a.icon) + '"></use></svg></span>' : "") + "</div>"
            }, item: function (a, e) {
                return '<div><span class="label">' + e(a.name) + "</span></div>"
            }
        }
    })
});