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

<header class="header header-responsive" id="site-header-responsive">

    <div class="header-content-wrapper">
        <ul class="nav nav-tabs mobile-app-tabs" role="tablist">
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#request" role="tab">
                    <div class="control-icon has-items">
                        <svg class="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                        <div class="label-avatar bg-blue">6</div>
                    </div>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#chat" role="tab">
                    <div class="control-icon has-items">
                        <svg class="olymp-chat---messages-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
                        <div class="label-avatar bg-purple">2</div>
                    </div>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#notification" role="tab">
                    <div class="control-icon has-items">
                        <svg class="olymp-thunder-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-thunder-icon"></use></svg>
                        <div class="label-avatar bg-primary">8</div>
                    </div>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#search" role="tab">
                    <svg class="olymp-magnifying-glass-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                    <svg class="olymp-close-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
                </a>
            </li>
        </ul>
    </div>

    <!-- Tab panes -->
    <div class="tab-content tab-content-responsive">

        <div class="tab-pane " id="request" role="tabpanel">

            <div class="mCustomScrollbar" data-mcs-theme="dark">
                <div class="ui-block-title ui-block-title-small">
                    <h6 class="title">FRIEND REQUESTS</h6>
                    <a href="#">Find Friends</a>
                    <a href="#">Settings</a>
                </div>
                <ul class="notification-list friend-requests">
                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/avatar55-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">Tamara Romanoff</a>
                            <span class="chat-message-item">Mutual Friend: Sarah Hetfield</span>
                        </div>
                        <span class="notification-icon">
										<a href="#" class="accept-request">
											<span class="icon-add without-text">
												<svg class="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

										<a href="#" class="accept-request request-del">
											<span class="icon-minus">
												<svg class="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

									</span>

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                    </li>
                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/avatar56-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">Tony Stevens</a>
                            <span class="chat-message-item">4 Friends in Common</span>
                        </div>
                        <span class="notification-icon">
										<a href="#" class="accept-request">
											<span class="icon-add without-text">
												<svg class="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

										<a href="#" class="accept-request request-del">
											<span class="icon-minus">
												<svg class="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

									</span>

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                    </li>
                    <li class="accepted">
                        <div class="author-thumb">
                            <img src="/img/social/avatar57-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            You and <a href="#" class="h6 notification-friend">Mary Jane Stark</a> just became friends. Write on <a href="#" class="notification-link">her wall</a>.
                        </div>
                        <span class="notification-icon">
										<svg class="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
									</span>

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <svg class="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                    </li>
                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/avatar58-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">Stagg Clothing</a>
                            <span class="chat-message-item">9 Friends in Common</span>
                        </div>
                        <span class="notification-icon">
										<a href="#" class="accept-request">
											<span class="icon-add without-text">
												<svg class="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

										<a href="#" class="accept-request request-del">
											<span class="icon-minus">
												<svg class="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

									</span>

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                    </li>
                </ul>
                <a href="#" class="view-all bg-blue">Check all your Events</a>
            </div>

        </div>

        <div class="tab-pane " id="chat" role="tabpanel">

            <div class="mCustomScrollbar" data-mcs-theme="dark">
                <div class="ui-block-title ui-block-title-small">
                    <h6 class="title">Chat / Messages</h6>
                    <a href="#">Mark all as read</a>
                    <a href="#">Settings</a>
                </div>

                <ul class="notification-list chat-message">
                    <li class="message-unread">
                        <div class="author-thumb">
                            <img src="/img/social/avatar59-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">Diana Jameson</a>
                            <span class="chat-message-item">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">4 hours ago</time></span>
                        </div>
                        <span class="notification-icon">
										<svg class="olymp-chat---messages-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
									</span>
                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                    </li>

                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/avatar60-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">Jake Parker</a>
                            <span class="chat-message-item">Great, I’ll see you tomorrow!.</span>
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">4 hours ago</time></span>
                        </div>
                        <span class="notification-icon">
										<svg class="olymp-chat---messages-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
									</span>

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                    </li>
                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/avatar61-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">Elaine Dreyfuss</a>
                            <span class="chat-message-item">We’ll have to check that at the office and see if the client is on board with...</span>
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
                        </div>
                        <span class="notification-icon">
											<svg class="olymp-chat---messages-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
										</span>
                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                    </li>

                    <li class="chat-group">
                        <div class="author-thumb">
                            <img src="/img/social/avatar11-sm.jpg" alt="author">
                            <img src="/img/social/avatar12-sm.jpg" alt="author">
                            <img src="/img/social/avatar13-sm.jpg" alt="author">
                            <img src="/img/social/avatar10-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <a href="#" class="h6 notification-friend">You, Faye, Ed &amp; Jet +3</a>
                            <span class="last-message-author">Ed:</span>
                            <span class="chat-message-item">Yeah! Seems fine by me!</span>
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">March 16th at 10:23am</time></span>
                        </div>
                        <span class="notification-icon">
											<svg class="olymp-chat---messages-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
										</span>
                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                        </div>
                    </li>
                </ul>

                <a href="#" class="view-all bg-purple">View All Messages</a>
            </div>

        </div>

        <div class="tab-pane " id="notification" role="tabpanel">

            <div class="mCustomScrollbar" data-mcs-theme="dark">
                <div class="ui-block-title ui-block-title-small">
                    <h6 class="title">Notifications</h6>
                    <a href="#">Mark all as read</a>
                    <a href="#">Settings</a>
                </div>

                <ul class="notification-list">
                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/avatar62-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <div><a href="#" class="h6 notification-friend">Mathilda Brinker</a> commented on your new <a href="#" class="notification-link">profile status</a>.</div>
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">4 hours ago</time></span>
                        </div>
                        <span class="notification-icon">
											<svg class="olymp-comments-post-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
										</span>

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <svg class="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                    </li>

                    <li class="un-read">
                        <div class="author-thumb">
                            <img src="/img/social/avatar63-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <div>You and <a href="#" class="h6 notification-friend">Nicholas Grissom</a> just became friends. Write on <a href="#" class="notification-link">his wall</a>.</div>
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">9 hours ago</time></span>
                        </div>
                        <span class="notification-icon">
											<svg class="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
										</span>

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <svg class="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                    </li>

                    <li class="with-comment-photo">
                        <div class="author-thumb">
                            <img src="/img/social/avatar64-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <div><a href="#" class="h6 notification-friend">Sarah Hetfield</a> commented on your <a href="#" class="notification-link">photo</a>.</div>
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
                        </div>
                        <span class="notification-icon">
											<svg class="olymp-comments-post-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
										</span>

                        <div class="comment-photo">
                            <img src="/img/social/comment-photo1.jpg" alt="photo">
                            <span>“She looks incredible in that outfit! We should see each...”</span>
                        </div>

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <svg class="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                    </li>

                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/avatar65-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <div><a href="#" class="h6 notification-friend">Green Goo Rock</a> invited you to attend to his event Goo in <a href="#" class="notification-link">Gotham Bar</a>.</div>
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
                        </div>
                        <span class="notification-icon">
											<svg class="olymp-happy-face-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
										</span>

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <svg class="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                    </li>

                    <li>
                        <div class="author-thumb">
                            <img src="/img/social/avatar66-sm.jpg" alt="author">
                        </div>
                        <div class="notification-event">
                            <div><a href="#" class="h6 notification-friend">James Summers</a> commented on your new <a href="#" class="notification-link">profile status</a>.</div>
                            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
                        </div>
                        <span class="notification-icon">
											<svg class="olymp-heart-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
										</span>

                        <div class="more">
                            <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <svg class="olymp-little-delete"><use xlink:href="svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
                        </div>
                    </li>
                </ul>

                <a href="#" class="view-all bg-primary">View All Notifications</a>
            </div>

        </div>

        <div class="tab-pane " id="search" role="tabpanel">


            <form class="search-bar w-search notification-list friend-requests">
                <div class="form-group with-button">
                    <input class="form-control js-user-search" placeholder="Search here people or pages..." type="text">
                </div>
            </form>


        </div>

    </div>
    <!-- ... end  Tab panes -->

</header>

<div class="main-header">
    <div class="content-bg-wrap bg-badges"></div>
    <div class="container">
        <div class="row">
            <div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div class="main-header-content">
                    <h1>Collect your Badges!</h1>
                    <p>Welcome to your badge collection! Here you’ll find all the badges you can unlock to show on your profile.
                        Learn how to achive the goal to adquire them and collect them all. Some have leveled tiers and other don’t.
                        You can challenge your friends to see who gets more and let the fun begin!</p>
                </div>
            </div>
        </div>
    </div>

    <img class="img-bottom" src="/img/social/badges-bottom.png" alt="friends">
</div>

<div class="container">
    <div class="row">
        <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge1.png" alt="author">
                        <div class="label-avatar bg-primary">2</div>
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Olympian User</a>
                        <div class="birthday-date">Congratulations! You have been in the Olympus community for 2 years.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 76%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge2.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Favourite Creator</a>
                        <div class="birthday-date">You created a favourite page.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 100%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge3.png" alt="author">
                        <div class="label-avatar bg-blue">4</div>
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Friendly User</a>
                        <div class="birthday-date">You have more than 80 friends. Next Tier: 150 Friends. </div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 52%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge4.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Professional Photographer</a>
                        <div class="birthday-date">You have uploaded more than 500 images to your profile.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 100%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge5.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Expert Filmaker</a>
                        <div class="birthday-date">You have uploaded more than 80 videos to your profile.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 70%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge6.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Mightier Than The Sword</a>
                        <div class="birthday-date">You have written more than 50 blog post entries.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 23%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge7.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Universe Explorer</a>
                        <div class="birthday-date">You have visited more than 1000 different user profiles.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 100%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge8.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Nothing to Hide</a>
                        <div class="birthday-date">You have completed all your profile fields.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 100%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge9.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Messaging Master</a>
                        <div class="birthday-date">You have messaged with at least 20 different people.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 69%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge10.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Musical Sharer</a>
                        <div class="birthday-date">You have linked your Spotify account to share your playlist.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 33%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge11.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Superliked Hero</a>
                        <div class="birthday-date">You have collected more than 100 likes in one post.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 100%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge12.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Strongly Caffeinated </a>
                        <div class="birthday-date">You have written more than 1000 posts.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 65%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge13.png" alt="author">
                        <div class="label-avatar bg-breez">2</div>
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Events Promoter</a>
                        <div class="birthday-date">You have created more than 25 public or private events. Next Tier: 50.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 100%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge14.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Friendship Cultivator</a>
                        <div class="birthday-date">You have tagged friends on 200 different posts.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 80%"></span>
                        </div>
                    </div>

                </div>

            </div>

            <div class="ui-block">


                <div class="birthday-item inline-items badges">
                    <div class="author-thumb">
                        <img src="/img/social/badge15.png" alt="author">
                    </div>
                    <div class="birthday-author-name">
                        <a href="#" class="h6 author-name">Phantom Profile</a>
                        <div class="birthday-date">You haven’t posted anything on your profile for more than 1 month.</div>
                    </div>

                    <div class="skills-item">
                        <div class="skills-item-meter">
                            <span class="skills-item-meter-active" style="width: 100%"></span>
                        </div>
                    </div>

                </div>

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
