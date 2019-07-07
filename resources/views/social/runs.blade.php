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

@include('social.layouts.profileHeader')

<div class="container">
    <div class="row">

        <div class="col col-12">
            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Mes runs</h6>
                </div>
                <div class="ui-block-content">
                    <div class="accordion" id="accordionExample">
                        @foreach($runs as $run)
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h5 class="mb-0">
                                        <button class="btn btn-grey btn-lg" type="button" data-toggle="collapse"
                                                data-target="{{"#" . $run->id}}" aria-expanded="false"
                                                aria-controls="{{$run->id}}">
                                            {{$run->name}}
                                        </button>
                                    </h5>
                                </div>
                                <div id="{{$run->id}}" class="collapse" aria-labelledby="headingTwo"
                                     data-parent="#accordionExample">
                                    <div class="card-body">
                                        {{$run->description}}
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="update-header-photo" tabindex="-1" role="dialog" aria-labelledby="update-header-photo"
     aria-hidden="true">
    <div class="modal-dialog window-popup update-header-photo" role="document">
        <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon">
                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                </svg>
            </a>

            <div class="modal-header">
                <h6 class="title">Update Header Photo</h6>
            </div>

            <div class="modal-body">
                <form method="post" action="/profile/avatar" class="form-upload-picture" id="upload-picture-form"
                      enctype="multipart/form-data">
                    @csrf
                    <div class="upload-photo-item" id="div-upload-avatar">
                        <input type="file" name="picture" id="input-upload-avatar" class="invisible"/>
                        <svg class="olymp-computer-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-computer-icon"></use>
                        </svg>

                        <h6>Upload Photo</h6>
                        <span>Browse your computer.</span>
                    </div>
                </form>

                <a href="#" class="upload-photo-item" data-toggle="modal" data-target="#choose-from-my-photo">

                    <svg class="olymp-photos-icon">
                        <use xlink:href="/svg-icons/sprites/icons.svg#olymp-photos-icon"></use>
                    </svg>

                    <h6>Choose from My Photos</h6>
                    <span>Choose from your uploaded photos</span>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="choose-from-my-photo" tabindex="-1" role="dialog" aria-labelledby="choose-from-my-photo"
     aria-hidden="true">
    <div class="modal-dialog window-popup choose-from-my-photo" role="document">

        <div class="modal-content">
            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon">
                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                </svg>
            </a>
            <div class="modal-header">
                <h6 class="title">Choose from My Photos</h6>

                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#home" role="tab" aria-expanded="true">
                            <svg class="olymp-photos-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-photos-icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#profile" role="tab" aria-expanded="false">
                            <svg class="olymp-albums-icon">
                                <use xlink:href="/svg-icons/sprites/icons.svg#olymp-albums-icon"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="modal-body">
                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane active" id="home" role="tabpanel" aria-expanded="true">

                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo1.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo2.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo3.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>

                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo4.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo5.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo6.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>

                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo7.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo8.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <div class="radio">
                                <label class="custom-radio">
                                    <img src="/img/social/choose-photo9.jpg" alt="photo">
                                    <input type="radio" name="optionsRadios">
                                </label>
                            </div>
                        </div>


                        <a href="#" class="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                        <a href="#" class="btn btn-primary btn-lg btn--half-width">Confirm Photo</a>

                    </div>
                    <div class="tab-pane" id="profile" role="tabpanel" aria-expanded="false">

                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo10.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">South America Vacations</a>
                                    <span>Last Added: 2 hours ago</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo11.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">Photoshoot Summer 2016</a>
                                    <span>Last Added: 5 weeks ago</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo12.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">Amazing Street Food</a>
                                    <span>Last Added: 6 mins ago</span>
                                </figcaption>
                            </figure>
                        </div>

                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo13.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">Graffity & Street Art</a>
                                    <span>Last Added: 16 hours ago</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo14.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">Amazing Landscapes</a>
                                    <span>Last Added: 13 mins ago</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="choose-photo-item" data-mh="choose-item">
                            <figure>
                                <img src="/img/social/choose-photo15.jpg" alt="photo">
                                <figcaption>
                                    <a href="#">The Majestic Canyon</a>
                                    <span>Last Added: 57 mins ago</span>
                                </figcaption>
                            </figure>
                        </div>


                        <a href="#" class="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                        <a href="#" class="btn btn-primary btn-lg disabled btn--half-width">Confirm Photo</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<div class="window-popup playlist-popup" tabindex="-1" role="dialog" aria-labelledby="playlist-popup"
     aria-hidden="true">

    <a href="" class="icon-close js-close-popup">
        <svg class="olymp-close-icon">
            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
        </svg>
    </a>

    <div class="mCustomScrollbar">
        <table class="playlist-popup-table">

            <thead>

            <tr>

                <th class="play">
                    PLAY
                </th>

                <th class="cover">
                    COVER
                </th>

                <th class="song-artist">
                    SONG AND ARTIST
                </th>

                <th class="album">
                    ALBUM
                </th>

                <th class="released">
                    RELEASED
                </th>

                <th class="duration">
                    DURATION
                </th>

                <th class="spotify">
                    GET IT ON SPOTIFY
                </th>

                <th class="remove">
                    REMOVE
                </th>
            </tr>

            </thead>

            <tbody>
            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist19.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">We Can Be Heroes</a>
                        <a href="#" class="composition-author">Jason Bowie</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition">Ziggy Firedust</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>

            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist6.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">The Past Starts Slow and Ends</a>
                        <a href="#" class="composition-author">System of a Revenge</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition">Wonderize</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>

            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist7.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">The Pretender</a>
                        <a href="#" class="composition-author">Kung Fighters</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition">Warping Lights</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>

            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist8.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">Seven Nation Army</a>
                        <a href="#" class="composition-author">The Black Stripes</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition ">Icky Strung (LIVE at Cube Garden)</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>

            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist9.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">Leap of Faith</a>
                        <a href="#" class="composition-author">Eden Artifact</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition">The Assassins’s Soundtrack</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>

            <tr>
                <td class="play">
                    <a href="#" class="play-icon">
                        <svg class="olymp-music-play-icon-big">
                            <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                        </svg>
                    </a>
                </td>
                <td class="cover">
                    <div class="playlist-thumb">
                        <img src="/img/social/playlist10.jpg" alt="thumb-composition">
                    </div>
                </td>
                <td class="song-artist">
                    <div class="composition">
                        <a href="#" class="composition-name">Killer Queen</a>
                        <a href="#" class="composition-author">Archiduke</a>
                    </div>
                </td>
                <td class="album">
                    <a href="#" class="album-composition ">News of the Universe</a>
                </td>
                <td class="released">
                    <div class="release-year">2014</div>
                </td>
                <td class="duration">
                    <div class="composition-time">
                        <time class="published" datetime="2017-03-24T18:18">6:17</time>
                    </div>
                </td>
                <td class="spotify">
                    <i class="fab fa-spotify composition-icon" aria-hidden="true"></i>
                </td>
                <td class="remove">
                    <a href="#" class="remove-icon">
                        <svg class="olymp-close-icon">
                            <use xlink:href="/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
                        </svg>
                    </a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

    <audio id="mediaplayer" data-showplaylist="true">
        <source src="mp3/Twice.mp3" title="Track 1" data-poster="track1.png" type="audio/mpeg">
        <source src="mp3/Twice.mp3" title="Track 2" data-poster="track2.png" type="audio/mpeg">
        <source src="mp3/Twice.mp3" title="Track 3" data-poster="track3.png" type="audio/mpeg">
        <source src="mp3/Twice.mp3" title="Track 4" data-poster="track4.png" type="audio/mpeg">
    </audio>

</div>

<a class="back-to-top" href="#">
    <img src="/svg-icons/back-to-top.svg" alt="arrow" class="back-icon">
</a>

@include('social.layouts.popupchat')

@include('social.layouts.footer')
</body>
</html>
