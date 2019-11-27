<meta name="io-token" content="{{ session('connect-io')['accessToken'] }}" id="io-token">
<div id="notif" data-user-id="{{Auth::id()}}"></div>
<script src="/js/social/app.js?v=12"></script>
<script defer src="/fonts/social/fontawesome-all.js"></script>
<script src="/js/app.js"></script>
<script>
    async function callAPIForSendFriendShip(userId) {
        let accessToken = "";
        await getAccessToken()
            .then(res => accessToken = res);
        return await fetch(`/user/${userId}/friendship`, initCallAPI(accessToken, 'GET'))
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }

    async function callAPIForDeleteFriendShip(userId) {
        let accessToken = "";
        await getAccessToken()
            .then(res => accessToken = res);
        return await fetch(`/user/${userId}/friendship/delete`, initCallAPI(accessToken, 'GET'))
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }

    async function sendFriendshipRequest(e) {
        if (e.innerText === "Ajouter en ami") {
            await callAPIForSendFriendShip(e.id).then(() => {
                document.getElementById(e.id).innerText = "En attente d'ajout";
            });
        } else {
            await callAPIForDeleteFriendShip(e.id).then(() => {
                document.getElementById(e.id).innerText = "Ajouter en ami";
            });
        }
    }

    async function like(e) {
        const nbLikes = document.getElementById('nbLikes');
        let accessToken = "";
        await getAccessToken()
            .then(res => accessToken = res);
        if (!e.classList.contains("liked"))
            return await fetch(`/like/${nbLikes.getAttribute('postId')}`, initCallAPI(accessToken, 'GET'))
                .then(response => response.json())
                .then(data => {
                    e.classList.add("liked");
                    nbLikes.innerText = parseInt(nbLikes.innerText) + 1;
                    return data;
                });
        else
            return await fetch(`/unlike/${nbLikes.getAttribute('postId')}`, initCallAPI(accessToken, 'GET'))
                .then(response => response.json())
                .then(data => {
                    e.classList.remove("liked");
                    nbLikes.innerText = parseInt(nbLikes.innerText) - 1;
                    return data;
                });
    }
</script>
