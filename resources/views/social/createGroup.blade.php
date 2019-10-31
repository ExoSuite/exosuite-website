<!doctype html>
<html lang="{{ app()->getLocale() }}">
@include('social.layouts.head')
<body class="social-body">
<div id="hellopreloader">
    <div class="preloader">
        <svg width="45" height="45" stroke="#fff">
            <g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)">
                <circle cx="22" cy="22" r="6" stroke="none">
                    <animate attributeName="r" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite"
                             values="6;22"/>
                    <animate attributeName="stroke-opacity" begin="1.5s" calcMode="linear" dur="3s"
                             repeatCount="indefinite" values="1;0"/>
                    <animate attributeName="stroke-width" begin="1.5s" calcMode="linear" dur="3s"
                             repeatCount="indefinite" values="2;0"/>
                </circle>
                <circle cx="22" cy="22" r="6" stroke="none">
                    <animate attributeName="r" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite"
                             values="6;22"/>
                    <animate attributeName="stroke-opacity" begin="3s" calcMode="linear" dur="3s"
                             repeatCount="indefinite" values="1;0"/>
                    <animate attributeName="stroke-width" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite"
                             values="2;0"/>
                </circle>
                <circle cx="22" cy="22" r="8">
                    <animate attributeName="r" begin="0s" calcMode="linear" dur="1.5s" repeatCount="indefinite"
                             values="6;1;2;3;4;5;6"/>
                </circle>
            </g>
        </svg>

        <div class="text">Loading ...</div>
    </div>
</div>
@include('social.layouts.menu')
@include('social.layouts.rightChat')
<div class="header-spacer"></div>

<div class="container">
    <div class="row">
        <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">

            <!-- Friend Item -->

            <div class="friend-item friend-groups create-group" data-mh="friend-groups-item" style="height: 312px;">

                <a href="#" class="  full-block" data-toggle="modal" data-target="#create-friend-group-add-friends"></a>
                <div class="content">

                    <a href="#" class="  btn btn-control bg-blue" data-toggle="modal"
                       data-target="#create-friend-group-add-friends">
                        <svg class="olymp-plus-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-plus-icon"></use>
                        </svg>
                    </a>

                    <div class="author-content">
                        <a href="#" class="h5 author-name">Créer Groupe</a>
                    </div>

                </div>

            </div>

            <!-- ... end Friend Item -->        </div>

        @foreach($groups as $group)
            <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="ui-block" data-mh="friend-groups-item">

                    <!-- Friend Item -->

                    <div class="friend-item friend-groups">

                        <div class="friend-item-content">

                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Report Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">Block Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">Turn Off Notifications</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="friend-avatar">
                                <div class="author-thumb">
                                    <img src="/img/logo.png" alt="ExoSuite">
                                </div>
                                <div class="author-content">
                                    <a href="#" class="h5 author-name">{{ $group->name }}</a>
                                </div>
                            </div>


                            <div class="control-block-button">
                                <a href="#" class="  btn btn-control bg-blue" data-toggle="modal"
                                   data-target="#create-friend-group-add-friends">
                                    <svg class="olymp-happy-faces-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control btn-grey-lighter">
                                    <svg class="olymp-settings-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-settings-icon"></use>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach

    </div>
</div>

<!-- ... end Main Content Groups -->


<!-- Window-popup Create Friends Group -->

<div class="modal fade" id="create-friend-group-1" tabindex="-1" role="dialog" aria-labelledby="create-friend-group-1"
     aria-hidden="true">
    <div class="modal-dialog window-popup create-friend-group create-friend-group-1" role="document">
        <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon">
                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                </svg>
            </a>
            <div class="modal-header">
                <h6 class="title">Créer groupe</h6>
            </div>

            <div class="modal-body">
                <form class="form-group label-floating" method="POST" action="/groups">
                    @csrf()
                    <input class="selectpicker form-control style-2 show-tick" multiple data-max-options="2"
                           data-live-search="true" name="toFind" placeholder="Membre du groupe"/>
                    <button type="submit" class="btn btn-blue btn-lg full-width">Create Group</button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- ... end Window-popup Create Friends Group -->


<!-- Window-popup Create Friends Group Add Friends -->

<div class="modal fade" id="create-friend-group-add-friends" tabindex="-1" role="dialog"
     aria-labelledby="create-friend-group-add-friends" aria-hidden="true">
    <div class="modal-dialog window-popup create-friend-group create-friend-group-add-friends" role="document">
        <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon">
                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                </svg>
            </a>

            <div class="modal-header">
                <h6 class="title">Ajouter des membres</h6>
            </div>

            <div class="modal-body">
                <form class="form-group label-floating is-select" method="POST" action="/groups">
                    @csrf()
                    <select class="selectpicker form-control style-2 show-tick" multiple
                            data-live-search="true" name="select[]" id="selectPeople">
                    </select>
                    <button type="submit" class="btn btn-blue btn-lg full-width">Save Changes</button>
                </form>
            </div>
        </div>
    </div>
</div>

<a class="back-to-top" href="#">
    <img src="/svg-icons/back-to-top.svg" alt="arrow" class="back-icon">
</a>

@include('social.layouts.popupchat')

@include('social.layouts.footer')
</body>
</html>
