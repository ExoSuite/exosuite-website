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

<div class="profile-settings-responsive">

    <a href="#" class="js-profile-settings-open profile-settings-open">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
        <i class="fa fa-angle-left" aria-hidden="true"></i>
    </a>
    <div class="mCustomScrollbar" data-mcs-theme="dark">
        <div class="ui-block">
            <div class="your-profile">
                <div class="ui-block-title ui-block-title-small">
                    <h6 class="title">Your PROFILE</h6>
                </div>

                <div id="accordion1" role="tablist" aria-multiselectable="true">
                    <div class="card">
                        <div class="card-header" role="tab" id="headingOne-1">
                            <h6 class="mb-0">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-1"
                                   aria-expanded="true" aria-controls="collapseOne">
                                    Profile Settings
                                    <svg class="olymp-dropdown-arrow-icon">
                                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
                                    </svg>
                                </a>
                            </h6>
                        </div>

                        <div id="collapseOne-1" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                            <ul class="your-profile-menu">
                                <li>
                                    <a href="/profile/edit">Personal Information</a>
                                </li>
                                <li>
                                    <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                                </li>
                                <li>
                                    <a href="30-YourAccount-ChangePassword.html">Change Password</a>
                                </li>
                                <li>
                                    <a href="31-YourAccount-HobbiesAndInterests.html">Hobbies and Interests</a>
                                </li>
                                <li>
                                    <a href="32-YourAccount-EducationAndEmployement.html">Education and Employement</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div class="ui-block-title">
                    <a href="33-YourAccount-Notifications.html" class="h6 title">Notifications</a>
                    <a href="#" class="items-round-little bg-primary">8</a>
                </div>
                <div class="ui-block-title">
                    <a href="34-YourAccount-ChatMessages.html" class="h6 title">Chat / Messages</a>
                </div>
                <div class="ui-block-title">
                    <a href="35-YourAccount-FriendsRequests.html" class="h6 title">Friend Requests</a>
                    <a href="#" class="items-round-little bg-blue">4</a>
                </div>
                <div class="ui-block-title ui-block-title-small">
                    <h6 class="title">FAVOURITE PAGE</h6>
                </div>
                <div class="ui-block-title">
                    <a href="36-FavPage-SettingsAndCreatePopup.html" class="h6 title">Create Fav Page</a>
                </div>
                <div class="ui-block-title">
                    <a href="36-FavPage-SettingsAndCreatePopup.html" class="h6 title">Fav Page Settings</a>
                </div>
            </div>
        </div>
    </div>
</div>

@include('social.layouts.menu')
@include('social.layouts.rightChat')
<div class="header-spacer header-spacer-small"></div>

<div class="main-header">
    <div class="content-bg-wrap bg-account"></div>
    <div class="container">
        <div class="row">
            <div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div class="main-header-content">
                    <h1>Your Account Dashboard</h1>
                    <p>Welcome to your account dashboard! Here you’ll find everything you need to change your profile
                        information, settings, read notifications and requests, view your latest messages, change your
                        pasword and much
                        more! Also you can create or manage your own favourite page, have fun!</p>
                </div>
            </div>
        </div>
    </div>
    <img class="img-bottom" src="/img/social/account-bottom.png" alt="friends">
</div>

<div class="container">
    <div class="row">
        <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Personal Information</h6>
                </div>
                <div class="ui-block-content">


                    <!-- Personal Information Form  -->

                    <form method="post" action="/profile/edit">
                        @csrf
                        <div class="row">

                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="form-group label-floating">
                                    <label class="control-label">First Name</label>
                                    <input class="form-control" placeholder="" type="text" name="first_name"
                                           value="{{ $profile['first_name'] }}">
                                </div>

                                <div class="form-group label-floating">
                                    <label class="control-label">Your Email</label>
                                    <input class="form-control" placeholder="" type="email"
                                           value="{{ $profile['email'] }}" disabled>
                                </div>

                                <div class="form-group date-time-picker label-floating">
                                    <label class="control-label">Your Birthday</label>
                                    <input name="datetimepicker" value="{{ $profile['profile']->birthday }}"/>
                                    <span class="input-group-addon">
															<svg class="olymp-month-calendar-icon icon"><use
                                                                        xlink:href="/svg-icons/sprites/icons.svg#olymp-month-calendar-icon"></use></svg>
														</span>
                                </div>
                            </div>

                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="form-group label-floating">
                                    <label class="control-label">Last Name</label>
                                    <input class="form-control" placeholder="" type="text" name="last_name"
                                           value="{{ $profile['last_name'] }}">
                                </div>

                                <div class="form-group label-floating">
                                    <label class="control-label">Your City</label>
                                    <input class="form-control" placeholder="" type="text" name="city"
                                           value="{{ $profile['profile']->city }}">
                                </div>

                                <div class="form-group label-floating">
                                    <label class="control-label">Your Nickname</label>
                                    <input class="form-control" placeholder="" type="text" name="nick_name"
                                           value="{{ $profile['nick_name'] }}">
                                </div>
                            </div>

                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="form-group label-floating">
                                    <label class="control-label">Write a little description about you</label>
                                    <textarea class="form-control"
                                              placeholder="" name="description">{{ $profile['profile']->description }}</textarea>
                                </div>

                                <div class="form-group label-floating is-select">
                                    <label class="control-label">Your Gender</label>
                                    <select class="selectpicker form-control">
                                        <option value="MA">Male</option>
                                        <option value="FE">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="form-group with-icon label-floating">
                                    <label class="control-label">Your Facebook Account</label>
                                    <input class="form-control" type="text" value="www.facebook.com/james-spiegel95321">
                                    <i class="fab fa-facebook-f c-facebook" aria-hidden="true"></i>
                                </div>
                                <div class="form-group with-icon label-floating">
                                    <label class="control-label">Your Twitter Account</label>
                                    <input class="form-control" type="text" value="www.twitter.com/james_spiegelOK">
                                    <i class="fab fa-twitter c-twitter" aria-hidden="true"></i>
                                </div>
                                <div class="form-group with-icon label-floating is-empty">
                                    <label class="control-label">Your RSS Feed Account</label>
                                    <input class="form-control" type="text">
                                    <i class="fa fa-rss c-rss" aria-hidden="true"></i>
                                </div>
                                <div class="form-group with-icon label-floating">
                                    <label class="control-label">Your Dribbble Account</label>
                                    <input class="form-control" type="text" value="www.dribbble.com/thecowboydesigner">
                                    <i class="fab fa-dribbble c-dribbble" aria-hidden="true"></i>
                                </div>
                                <div class="form-group with-icon label-floating is-empty">
                                    <label class="control-label">Your Spotify Account</label>
                                    <input class="form-control" type="text">
                                    <i class="fab fa-spotify c-spotify" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <button class="btn btn-secondary btn-lg full-width">Restore all Attributes</button>
                            </div>
                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <button class="btn btn-primary btn-lg full-width">Save all Changes</button>
                            </div>

                        </div>
                    </form>

                    <!-- ... end Personal Information Form  -->
                </div>
            </div>
        </div>

        <div class="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 responsive-display-none">
            <div class="ui-block">


                <!-- Your Profile  -->

                <div class="your-profile">
                    <div class="ui-block-title ui-block-title-small">
                        <h6 class="title">Your PROFILE</h6>
                    </div>

                    <div id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="card">
                            <div class="card-header" role="tab" id="headingOne">
                                <h6 class="mb-0">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                       aria-expanded="true" aria-controls="collapseOne">
                                        Profile Settings
                                        <svg class="olymp-dropdown-arrow-icon">
                                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
                                        </svg>
                                    </a>
                                </h6>
                            </div>

                            <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                <ul class="your-profile-menu">
                                    <li>
                                        <a href="/profile/edit">Personal Information</a>
                                    </li>
                                    <li>
                                        <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                                    </li>
                                    <li>
                                        <a href="30-YourAccount-ChangePassword.html">Change Password</a>
                                    </li>
                                    <li>
                                        <a href="31-YourAccount-HobbiesAndInterests.html">Hobbies and Interests</a>
                                    </li>
                                    <li>
                                        <a href="32-YourAccount-EducationAndEmployement.html">Education and
                                            Employement</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="ui-block-title">
                        <a href="33-YourAccount-Notifications.html" class="h6 title">Notifications</a>
                        <a href="#" class="items-round-little bg-primary">8</a>
                    </div>
                    <div class="ui-block-title">
                        <a href="34-YourAccount-ChatMessages.html" class="h6 title">Chat / Messages</a>
                    </div>
                    <div class="ui-block-title">
                        <a href="35-YourAccount-FriendsRequests.html" class="h6 title">Friend Requests</a>
                        <a href="#" class="items-round-little bg-blue">4</a>
                    </div>
                    <div class="ui-block-title ui-block-title-small">
                        <h6 class="title">FAVOURITE PAGE</h6>
                    </div>
                    <div class="ui-block-title">
                        <a href="36-FavPage-SettingsAndCreatePopup.html" class="h6 title">Create Fav Page</a>
                    </div>
                    <div class="ui-block-title">
                        <a href="36-FavPage-SettingsAndCreatePopup.html" class="h6 title">Fav Page Settings</a>
                    </div>
                </div>

                <!-- ... end Your Profile  -->


            </div>
        </div>
    </div>
</div>

@include('social.layouts.popupchat')

@include('social.layouts.footer')
</body>
</html>