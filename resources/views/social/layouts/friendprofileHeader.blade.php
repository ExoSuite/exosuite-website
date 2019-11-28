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
                                    <li>
                                        <a>Friends : {{ $getuserfriends['total'] }}</a>
                                    </li>
                                    <li>
                                        <a >Follows : {{ $getuserfollows['total'] }}</a>
                                    </li>

                                </ul>
                            </div>
                            <div class="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                                <ul class="profile-menu">

                                    <li>
                                        <a class="btn btn-primary" onclick="sendFriendshipRequest(this)" id="{{$userId}}" @if ($getMyFriendshipWith['friendship_entity'] != null) friendshipId="{{$getMyFriendshipWith['friendship_entity']->id}}" @endif()>
                                            {{
                                            (!$getMyFriendshipWith['value'] ? "Retirer des amis" : "Ajouter en ami")
                                            }}
                                        </a>
                                    </li>

                                    <li>
                                        <a href=" {{ route('createafollow', $userId)}}" id="createfollowid" class="btn btn-primary" value="{{ $checkfollowbool }}">
                                            Suivre
                                        </a>


                                        <a href=" {{route("deleteafollow", $userId)}}" class="btn btn-primary" id="deletefollowid" value="{{ $checkfollowbool }}" >
                                           ne plus Suivre
                                        </a>

                                        <script>
                                           var checkbool = document.getElementById("createfollowid").value;
                                            if(checkbool == 1){
                                                document.getElementById("createfollowid").style.visibility = "hidden";
                                                document.getElementById("deletefollowid").style.visibility = "visible";
                                            }
                                            else if (checkbool != 1){
                                                document.getElementById("deletefollowid").style.visibility = "hidden";
                                                document.getElementById("createfollowid").style.visibility = "visible";
                                            }
                                        </script>
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
