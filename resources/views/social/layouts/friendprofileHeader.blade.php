<div class="container">
    <div class="row">
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="ui-block">
                <div class="top-header">
                    <div class="top-header-thumb">
                        <img src="/img/social/top-header1.jpg" alt="nature">
                    </div>
                    <div class="profile-section">
                        <div class="row">
                            <div class="col col-lg-5 col-md-5 col-sm-12 col-12">
                                <ul class="profile-menu">
                                   {{-- <li>
                                        <a>Friends : {{ //numberoffriends here }}</a>
                                    </li>
                                    <li>
                                        <a >Follows : {{//numberoffollows here}}</a>
                                    </li>--}}

                                </ul>
                            </div>
                            <div class="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                                <ul class="profile-menu">

                                    <li>
                                        <button class="btn btn-primary" id="charleshenri">
                                            ajouter en amis
                                            <script>
                                                var element = document.getElementById("charleshenri").addEventListener("click", alerter);
                                                function alerter() {
                                                   alert("demande d'amitiée envoyée");
                                                    this.style.backgroundColor  = "grey";
                                                    this.style.bordercolor  = "grey";
                                                   //faire la requete : Route::post('user/{user}/friendship/', 'friendsgeneralController@sendFriendshipRequest')
                                                   /* User Story :
                                                        - A demande B en ami(e) (création de la requête: user/${user_id}/friendship)   //user_id de la personne ciblée
                                                    - B accède à ses requetes en attentes (get des requetes : user/me/pending_requests)
                                                    - B répond à la requete via :
                                                        - Acceptation : user/me/friendship/${request_id}/accept
                                                    - Declin : user/me/friendship/${request_id}/decline*/
                                                }
                                            </script>
                                        </button>
                                    </li>

                                    <li>
                                        <a href=" {{  route("createafollow", $userId)}}" class="btn btn-primary">
                                            Suivre
                                        </a>
                                        <a href=" {{  route("deleteaFollow", $userId)}}" class="btn btn-primary">
                                           ne plus Suivre
                                        </a>
                                    </li>
                                    <li>
                                        <div class="more">
                                            <svg class="olymp-three-dots-icon">
                                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="control-block-button">
                            <script></script>
                            <a href="#" class="btn btn-control bg-purple">
                                <svg class="olymp-chat---messages-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="top-header-author">
                        <a href="/profile" class="author-thumb">
                            <img src="{{ config("api.domain") }}user/{{$userId}}/profile/picture/avatar?token={{ $pictureToken }}" alt="author" class="profilePicture">
                        </a>
                        <div class="author-content">
                            <a href="/profile"
                               class="h4 author-name">{{ $profile['first_name'] . ' ' . $profile['last_name'] }}</a>
                            <div class="country">
                                @if ($profile['profile'])
                                    {{ $profile['profile']->city }}
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
