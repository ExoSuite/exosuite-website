<!doctype html>
<html lang="{{ app()->getLocale() }}">
@include('social.layouts.head')

<head>

    <!-- JQuery -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="/js/social/jquery.gridster.js"></script>
    <script src="/js/app.js"></script>

    <link rel="stylesheet" type="text/css" href="/app/plugin/codemirror-5.48.2/lib/codemirror.css">
    <link rel="stylesheet" type="text/css" href="/css/social/vendor/jquery.gridster.css"/>

</head>

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

    <style type="text/css" media="screen">
        .container{
            color: #0a0a0a;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 100px 100px;
            grid-auto-columns: 300px;
            grid-auto-rows: 300px;
            grid-gap: 20px;
            max-width: 1000px;

        }

        .item {

            font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: large;
            max-height: 1000px;
            max-width: 1000px;
            text-align: center;
        }
        .title{
            align-content: center;
            font-size: x-large;
            font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        .cards{
            max-height: 1000px;
            max-width: 1000px;
        display: grid;
        grid-template-columns: repeat(auto-fit, $card-width);
        grid-gap: 1.5rem;
            justify-content: space-between;
            align-content: flex-start;
        }
        .cardCollection{
            grid-template-columns: repeat(auto-fit, 100px);
            justify-content: space-between;
            align-content: flex-start;

        }
        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        input:checked + .slider {
            background-color: #2196F3;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }

    </style>

    <p class="title" style="align-content: center">Newsfeed modules</p>

<div class="Newsfeed">
    <section class="cardCollection cardCollection-recommendedContent">
        <div class="item">
            <div class="ui-block">
                <div class="ui-block-title">

                <label class="switch" id="switchmeteo">
                    <input type="checkbox" name="switchmeteo">
                    <span class="slider round" ></span>
                </label>
                    <h6 class="title">Meteo</h6>
                </div>
                <div class="widget w-wethear">
                    <div class="wethear-now inline-items">
                        <div class="temperature-sensor">64°</div>
                        <div class="max-min-temperature">
                            <span>58°</span>
                            <span>76°</span>
                        </div>

                        <svg class="olymp-weather-partly-sunny-icon">
                            <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-partly-sunny-icon"></use>
                        </svg>
                    </div>

                    <div class="wethear-now-description">
                        <div class="climate">Partly Sunny</div>
                        <span>Real Feel: <span>67°</span></span>
                        <span>Chance of Rain: <span>49%</span></span>
                    </div>

                    <ul class="weekly-forecast">

                        <li>
                            <div class="day">sun</div>
                            <svg class="olymp-weather-sunny-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-sunny-icon"></use>
                            </svg>

                            <div class="temperature-sensor-day">60°</div>
                        </li>

                        <li>
                            <div class="day">mon</div>
                            <svg class="olymp-weather-partly-sunny-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-partly-sunny-icon"></use>
                            </svg>
                            <div class="temperature-sensor-day">58°</div>
                        </li>

                        <li>
                            <div class="day">tue</div>
                            <svg class="olymp-weather-cloudy-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-cloudy-icon"></use>
                            </svg>

                            <div class="temperature-sensor-day">67°</div>
                        </li>

                        <li>
                            <div class="day">wed</div>
                            <svg class="olymp-weather-rain-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-rain-icon"></use>
                            </svg>

                            <div class="temperature-sensor-day">70°</div>
                        </li>

                        <li>
                            <div class="day">thu</div>
                            <svg class="olymp-weather-storm-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-storm-icon"></use>
                            </svg>

                            <div class="temperature-sensor-day">58°</div>
                        </li>

                        <li>
                            <div class="day">fri</div>
                            <svg class="olymp-weather-snow-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-snow-icon"></use>
                            </svg>

                            <div class="temperature-sensor-day">68°</div>
                        </li>

                        <li>
                            <div class="day">sat</div>

                            <svg class="olymp-weather-wind-icon-header">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-wind-icon-header"></use>
                            </svg>

                            <div class="temperature-sensor-day">65°</div>
                        </li>

                    </ul>

                    <div class="date-and-place">
                        <h5 class="date">Saturday, March 26th</h5>
                        <div class="place">San Francisco, CA</div>
                    </div>

                </div>
            </div>

            </div>

        <div class="item">
            <div class="ui-block">
                <div class="ui-block-title">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>

                    <div class="w-calendar calendar-container">
                        <div class="calendar">
                            <header>
                                <h6 class="month">March 2017</h6>
                                <a class="calendar-btn-prev fas fa-angle-left" href="#"></a>
                                <a class="calendar-btn-next fas fa-angle-right" href="#"></a>
                            </header>
                            <table>
                                <thead>
                                <tr>
                                    <td>Mon</td>
                                    <td>Tue</td>
                                    <td>Wed</td>
                                    <td>Thu</td>
                                    <td>Fri</td>
                                    <td>Sat</td>
                                    <td>San</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td data-month="12" data-day="1">1</td>
                                    <td data-month="12" data-day="2" class="event-uncomplited event-complited">
                                        2
                                    </td>
                                    <td data-month="12" data-day="3">3</td>
                                    <td data-month="12" data-day="4">4</td>
                                    <td data-month="12" data-day="5">5</td>
                                    <td data-month="12" data-day="6">6</td>
                                    <td data-month="12" data-day="7">7</td>
                                </tr>
                                <tr>
                                    <td data-month="12" data-day="8">8</td>
                                    <td data-month="12" data-day="9">9</td>
                                    <td data-month="12" data-day="10" class="event-complited">10</td>
                                    <td data-month="12" data-day="11">11</td>
                                    <td data-month="12" data-day="12">12</td>
                                    <td data-month="12" data-day="13">13</td>
                                    <td data-month="12" data-day="14">14</td>
                                </tr>
                                <tr>
                                    <td data-month="12" data-day="15" class="event-complited-2">15</td>
                                    <td data-month="12" data-day="16">16</td>
                                    <td data-month="12" data-day="17">17</td>
                                    <td data-month="12" data-day="18">18</td>
                                    <td data-month="12" data-day="19">19</td>
                                    <td data-month="12" data-day="20">20</td>
                                    <td data-month="12" data-day="21">21</td>
                                </tr>
                                <tr>
                                    <td data-month="12" data-day="22">22</td>
                                    <td data-month="12" data-day="23">23</td>
                                    <td data-month="12" data-day="24">24</td>
                                    <td data-month="12" data-day="25">25</td>
                                    <td data-month="12" data-day="26">26</td>
                                    <td data-month="12" data-day="27">27</td>
                                    <td data-month="12" data-day="28" class="event-uncomplited">28</td>
                                </tr>
                                <tr>
                                    <td data-month="12" data-day="29">29</td>
                                    <td data-month="12" data-day="30">30</td>
                                    <td data-month="12" data-day="31">31</td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="list">

                                <div id="accordion-1" role="tablist" aria-multiselectable="true" class="day-event"
                                     data-month="12" data-day="2">
                                    <div class="ui-block-title ui-block-title-small">
                                        <h6 class="title">TODAY’S EVENTS</h6>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingOne-1">
                                            <div class="event-time">
                                                <span class="circle"></span>
                                                <time datetime="2004-07-24T18:18">9:00am</time>
                                                <a href="#" class="more">
                                                    <svg class="olymp-three-dots-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                            <h5 class="mb-0">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-1"
                                                   aria-expanded="true" aria-controls="collapseOne-1">
                                                    Breakfast at the Agency
                                                    <svg class="olymp-dropdown-arrow-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
                                                    </svg>
                                                </a>
                                            </h5>
                                        </div>

                                        <div id="collapseOne-1" class="collapse" role="tabpanel">
                                            <div class="card-body">
                                                Hi Guys! I propose to go a litle earlier at the agency to have breakfast and
                                                talk a little more about the new design project we have been working on.
                                                Cheers!
                                            </div>
                                            <div class="place inline-items">
                                                <svg class="olymp-add-a-place-icon">
                                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use>
                                                </svg>
                                                <span>Daydreamz Agency</span>
                                            </div>

                                            <ul class="friends-harmonic inline-items">
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic5.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic10.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic7.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic8.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic2.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li class="with-text">
                                                    Will Assist
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingTwo-1">
                                            <div class="event-time">
                                                <span class="circle"></span>
                                                <time datetime="2004-07-24T18:18">9:00am</time>
                                                <a href="#" class="more">
                                                    <svg class="olymp-three-dots-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                            <h5 class="mb-0">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo-1"
                                                   aria-expanded="true" aria-controls="collapseTwo-1">
                                                    Send the new “Olympus” project files to the Agency
                                                    <svg class="olymp-dropdown-arrow-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
                                                    </svg>
                                                </a>
                                            </h5>
                                        </div>

                                        <div id="collapseTwo-1" class="collapse" role="tabpanel">
                                            <div class="card-body">
                                                Hi Guys! I propose to go a litle earlier at the agency to have breakfast and
                                                talk a little more about the new design project we have been working on.
                                                Cheers!
                                            </div>
                                        </div>

                                    </div>

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingThree-1">
                                            <div class="event-time">
                                                <span class="circle"></span>
                                                <time datetime="2004-07-24T18:18">6:30am</time>
                                                <a href="#" class="more">
                                                    <svg class="olymp-three-dots-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                            <h5 class="mb-0">
                                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion"
                                                   href="#" aria-expanded="false">
                                                    Take Querty to the Veterinarian
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="place inline-items">
                                            <svg class="olymp-add-a-place-icon">
                                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use>
                                            </svg>
                                            <span>Daydreamz Agency</span>
                                        </div>
                                    </div>

                                    <a href="#" class="check-all">Check all your Events</a>
                                </div>

                                <div id="accordion-2" role="tablist" aria-multiselectable="true" class="day-event"
                                     data-month="12" data-day="10">
                                    <div class="ui-block-title ui-block-title-small">
                                        <h6 class="title">TODAY’S EVENTS</h6>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingOne-2">
                                            <div class="event-time">
                                                <span class="circle"></span>
                                                <time datetime="2004-07-24T18:18">9:00am</time>
                                                <a href="#" class="more">
                                                    <svg class="olymp-three-dots-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                            <h5 class="mb-0">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-2"
                                                   aria-expanded="true" aria-controls="collapseOne-2">
                                                    Breakfast at the Agency
                                                    <svg class="olymp-dropdown-arrow-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
                                                    </svg>
                                                </a>
                                            </h5>
                                        </div>

                                        <div id="collapseOne-2" class="collapse" role="tabpanel">
                                            <div class="card-body">
                                                Hi Guys! I propose to go a litle earlier at the agency to have breakfast and
                                                talk a little more about the new design project we have been working on.
                                                Cheers!
                                            </div>
                                            <div class="place inline-items">
                                                <svg class="olymp-add-a-place-icon">
                                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use>
                                                </svg>
                                                <span>Daydreamz Agency</span>
                                            </div>

                                            <ul class="friends-harmonic inline-items">
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic5.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic10.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic7.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic8.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic2.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li class="with-text">
                                                    Will Assist
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <a href="#" class="check-all">Check all your Events</a>
                                </div>

                                <div id="accordion-3" role="tablist" aria-multiselectable="true" class="day-event"
                                     data-month="12" data-day="15">
                                    <div class="ui-block-title ui-block-title-small">
                                        <h6 class="title">TODAY’S EVENTS</h6>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingOne-3">
                                            <div class="event-time">
                                                <span class="circle"></span>
                                                <time datetime="2004-07-24T18:18">9:00am</time>
                                                <a href="#" class="more">
                                                    <svg class="olymp-three-dots-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                            <h5 class="mb-0">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-3"
                                                   aria-expanded="true" aria-controls="collapseOne-3">
                                                    Breakfast at the Agency
                                                    <svg class="olymp-dropdown-arrow-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
                                                    </svg>
                                                </a>
                                            </h5>
                                        </div>

                                        <div id="collapseOne-3" class="collapse" role="tabpanel">
                                            <div class="card-body">
                                                Hi Guys! I propose to go a litle earlier at the agency to have breakfast and
                                                talk a little more about the new design project we have been working on.
                                                Cheers!
                                            </div>

                                            <div class="place inline-items">
                                                <svg class="olymp-add-a-place-icon">
                                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use>
                                                </svg>
                                                <span>Daydreamz Agency</span>
                                            </div>

                                            <ul class="friends-harmonic inline-items">
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic5.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic10.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic7.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic8.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic2.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li class="with-text">
                                                    Will Assist
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingTwo-3">
                                            <div class="event-time">
                                                <span class="circle"></span>
                                                <time datetime="2004-07-24T18:18">12:00pm</time>
                                                <a href="#" class="more">
                                                    <svg class="olymp-three-dots-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                            <h5 class="mb-0">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo-3"
                                                   aria-expanded="true" aria-controls="collapseTwo-3">
                                                    Send the new “Olympus” project files to the Agency
                                                    <svg class="olymp-dropdown-arrow-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
                                                    </svg>
                                                </a>
                                            </h5>
                                        </div>

                                        <div id="collapseTwo-3" class="collapse" role="tabpanel">
                                            <div class="card-body">
                                                Hi Guys! I propose to go a litle earlier at the agency to have breakfast and
                                                talk a little more about the new design project we have been working on.
                                                Cheers!
                                            </div>
                                        </div>

                                    </div>

                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingThree-3">
                                            <div class="event-time">
                                                <span class="circle"></span>
                                                <time datetime="2004-07-24T18:18">6:30pm</time>
                                                <a href="#" class="more">
                                                    <svg class="olymp-three-dots-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                            <h5 class="mb-0">
                                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion"
                                                   href="#" aria-expanded="false">
                                                    Take Querty to the Veterinarian
                                                </a>
                                            </h5>
                                        </div>
                                        <div class="place inline-items">
                                            <svg class="olymp-add-a-place-icon">
                                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use>
                                            </svg>
                                            <span>Daydreamz Agency</span>
                                        </div>
                                    </div>

                                    <a href="#" class="check-all">Check all your Events</a>
                                </div>

                                <div id="accordion-4" role="tablist" aria-multiselectable="true" class="day-event"
                                     data-month="12" data-day="28">
                                    <div class="ui-block-title ui-block-title-small">
                                        <h6 class="title">TODAY’S EVENTS</h6>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" role="tab" id="headingOne-4">
                                            <div class="event-time">
                                                <span class="circle"></span>
                                                <time datetime="2004-07-24T18:18">9:00am</time>
                                                <a href="#" class="more">
                                                    <svg class="olymp-three-dots-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                            <h5 class="mb-0">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-4"
                                                   aria-expanded="true" aria-controls="collapseOne-4">
                                                    Breakfast at the Agency
                                                    <svg class="olymp-dropdown-arrow-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>
                                                    </svg>
                                                </a>
                                            </h5>
                                        </div>

                                        <div id="collapseOne-4" class="collapse" role="tabpanel"
                                             aria-labelledby="headingOne-4">
                                            <div class="card-body">
                                                Hi Guys! I propose to go a litle earlier at the agency to have breakfast and
                                                talk a little more about the new design project we have been working on.
                                                Cheers!
                                            </div>
                                            <div class="place inline-items">
                                                <svg class="olymp-add-a-place-icon">
                                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use>
                                                </svg>
                                                <span>Daydreamz Agency</span>
                                            </div>

                                            <ul class="friends-harmonic inline-items">
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic5.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic10.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic7.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic8.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="/img/social/friend-harmonic2.jpg" alt="friend">
                                                    </a>
                                                </li>
                                                <li class="with-text">
                                                    Will Assist
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <a href="#" class="check-all">Check all your Events</a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div></div>

<div class="item">
    <div class="ui-block">
        <div class="ui-block-title">
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>

            <h6 class="title">Pages You May Like</h6>
            <a href="#" class="more">
                <svg class="olymp-three-dots-icon">
                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                </svg>
            </a>
        </div>

        <!-- W-Friend-Pages-Added -->

        <ul class="widget w-friend-pages-added notification-list friend-requests">
            <li class="inline-items">
                <div class="author-thumb">
                    <img src="/img/social/avatar41-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">The Marina Bar</a>
                    <span class="chat-message-item">Restaurant / Bar</span>
                </div>
                <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                      data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>

            </li>

            <li class="inline-items">
                <div class="author-thumb">
                    <img src="/img/social/avatar42-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Tapronus Rock</a>
                    <span class="chat-message-item">Rock Band</span>
                </div>
                <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                      data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>

            </li>

            <li class="inline-items">
                <div class="author-thumb">
                    <img src="/img/social/avatar43-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Pixel Digital Design</a>
                    <span class="chat-message-item">Company</span>
                </div>
                <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                      data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
            </li>

            <li class="inline-items">
                <div class="author-thumb">
                    <img src="/img/social/avatar44-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Thompson’s Custom Clothing Boutique</a>
                    <span class="chat-message-item">Clothing Store</span>
                </div>
                <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                      data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>

            </li>

            <li class="inline-items">
                <div class="author-thumb">
                    <img src="/img/social/avatar45-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Crimson Agency</a>
                    <span class="chat-message-item">Company</span>
                </div>
                <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                      data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
            </li>

            <li class="inline-items">
                <div class="author-thumb">
                    <img src="/img/social/avatar46-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Mannequin Angel</a>
                    <span class="chat-message-item">Clothing Store</span>
                </div>
                <span class="notification-icon" data-toggle="tooltip" data-placement="top"
                      data-original-title="ADD TO YOUR FAVS">
							<a href="#">
								<svg class="olymp-star-icon"><use
                                            xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
							</a>
						</span>
            </li>
        </ul>

        <!-- .. end W-Friend-Pages-Added -->
    </div>
</div>
<div class="item">
    <div class="ui-block">

        <!-- W-Birthsday-Alert -->
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>

        <div class="widget w-birthday-alert">
            <div class="icons-block">
                <svg class="olymp-cupcake-icon">
                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use>
                </svg>
                <a href="#" class="more">
                    <svg class="olymp-three-dots-icon">
                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                    </svg>
                </a>
            </div>

            <div class="content">
                <div class="author-thumb">
                    <img src="/img/social/avatar48-sm.jpg" alt="author">
                </div>
                <span>Today is</span>
                <a href="#" class="h4 title">Marina Valentine’s Birthday!</a>
                <p>Leave her a message with your best wishes on her profile page!</p>
            </div>
        </div>

        <!-- ... end W-Birthsday-Alert -->            </div>
</div>
<div class="item">
    <div class="ui-block">


        <div class="ui-block-title">
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
            <h6 class="title">Friend Suggestions</h6>
            <a href="#" class="more">
                <svg class="olymp-three-dots-icon">
                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                </svg>
            </a>
        </div>


        <!-- W-Action -->

        <ul class="widget w-friend-pages-added notification-list friend-requests">
            <li class="inline-items">
                <div class="author-thumb">
                    <img src="/img/social/avatar38-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Francine Smith</a>
                    <span class="chat-message-item">8 Friends in Common</span>
                </div>
                <span class="notification-icon">
							<a href="#" class="accept-request">
								<span class="icon-add without-text">
									<svg class="olymp-happy-face-icon"><use
                                                xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
								</span>
							</a>
						</span>
            </li>

            <li class="inline-items">
                <div class="author-thumb">
                    <img src="/img/social/avatar39-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Hugh Wilson</a>
                    <span class="chat-message-item">6 Friends in Common</span>
                </div>
                <span class="notification-icon">
							<a href="#" class="accept-request">
								<span class="icon-add without-text">
									<svg class="olymp-happy-face-icon"><use
                                                xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
								</span>
							</a>
						</span>
            </li>

            <li class="inline-items">
                <div class="author-thumb">
                    <img src="/img/social/avatar40-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Karen Masters</a>
                    <span class="chat-message-item">6 Friends in Common</span>
                </div>
                <span class="notification-icon">
							<a href="#" class="accept-request">
								<span class="icon-add without-text">
									<svg class="olymp-happy-face-icon"><use
                                                xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
								</span>
							</a>
						</span>
            </li>

        </ul>

        <!-- ... end W-Action -->
    </div>
</div>
<div class="item">
    <div class="ui-block">

        <div class="ui-block-title">
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>

            <h6 class="title">Activity Feed</h6>
            <a href="#" class="more">
                <svg class="olymp-three-dots-icon">
                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                </svg>
            </a>
        </div>


        <!-- W-Activity-Feed -->

        <ul class="widget w-activity-feed notification-list">
            <li>
                <div class="author-thumb">
                    <img src="/img/social/avatar49-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Marina Polson</a> commented on Jason Mark’s <a
                            href="#" class="notification-link">photo.</a>.
                    <span class="notification-date"><time class="entry-date updated"
                                                          datetime="2004-07-24T18:18">2 mins ago</time></span>
                </div>
            </li>

            <li>
                <div class="author-thumb">
                    <img src="/img/social/avatar9-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Jake Parker </a> liked Nicholas Grissom’s <a
                            href="#" class="notification-link">status update.</a>.
                    <span class="notification-date"><time class="entry-date updated"
                                                          datetime="2004-07-24T18:18">5 mins ago</time></span>
                </div>
            </li>

            <li>
                <div class="author-thumb">
                    <img src="/img/social/avatar50-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Mary Jane Stark </a> added 20 new photos to her
                    <a href="#" class="notification-link">gallery album.</a>.
                    <span class="notification-date"><time class="entry-date updated"
                                                          datetime="2004-07-24T18:18">12 mins ago</time></span>
                </div>
            </li>

            <li>
                <div class="author-thumb">
                    <img src="/img/social/avatar51-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Nicholas Grissom </a> updated his profile <a
                            href="#" class="notification-link">photo</a>.
                    <span class="notification-date"><time class="entry-date updated"
                                                          datetime="2004-07-24T18:18">1 hour ago</time></span>
                </div>
            </li>
            <li>
                <div class="author-thumb">
                    <img src="/img/social/avatar48-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Marina Valentine </a> commented on Chris
                    Greyson’s <a href="#" class="notification-link">status update</a>.
                    <span class="notification-date"><time class="entry-date updated"
                                                          datetime="2004-07-24T18:18">1 hour ago</time></span>
                </div>
            </li>

            <li>
                <div class="author-thumb">
                    <img src="/img/social/avatar52-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Green Goo Rock </a> posted a <a href="#"
                                                                                               class="notification-link">status
                        update</a>.
                    <span class="notification-date"><time class="entry-date updated"
                                                          datetime="2004-07-24T18:18">1 hour ago</time></span>
                </div>
            </li>
            <li>
                <div class="author-thumb">
                    <img src="/img/social/avatar10-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Elaine Dreyfuss </a> liked your <a href="#"
                                                                                                  class="notification-link">blog
                        post</a>.
                    <span class="notification-date"><time class="entry-date updated"
                                                          datetime="2004-07-24T18:18">2 hours ago</time></span>
                </div>
            </li>

            <li>
                <div class="author-thumb">
                    <img src="/img/social/avatar10-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Elaine Dreyfuss </a> commented on your <a
                            href="#" class="notification-link">blog post</a>.
                    <span class="notification-date"><time class="entry-date updated"
                                                          datetime="2004-07-24T18:18">2 hours ago</time></span>
                </div>
            </li>

            <li>
                <div class="author-thumb">
                    <img src="/img/social/avatar53-sm.jpg" alt="author">
                </div>
                <div class="notification-event">
                    <a href="#" class="h6 notification-friend">Bruce Peterson </a> changed his <a href="#"
                                                                                                  class="notification-link">profile
                        picture</a>.
                    <span class="notification-date"><time class="entry-date updated"
                                                          datetime="2004-07-24T18:18">15 hours ago</time></span>
                </div>
            </li>

        </ul>
    </div>
</div>

</section></div>

{{--
    <section class="grid">
        <div class="item">
            <div class="ui-block">

                <!-- W-Weather -->

                <div class="widget w-wethear">
                    <a href="#" class="more">
                        <svg class="olymp-three-dots-icon">
                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                        </svg>
                    </a>

                    <div class="wethear-now inline-items">
                        <div class="temperature-sensor">64°</div>
                        <div class="max-min-temperature">
                            <span>58°</span>
                            <span>76°</span>
                        </div>

                        <svg class="olymp-weather-partly-sunny-icon">
                            <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-partly-sunny-icon"></use>
                        </svg>
                    </div>

                    <div class="wethear-now-description">
                        <div class="climate">Partly Sunny</div>
                        <span>Real Feel: <span>67°</span></span>
                        <span>Chance of Rain: <span>49%</span></span>
                    </div>

                    <ul class="weekly-forecast">

                        <li>
                            <div class="day">sun</div>
                            <svg class="olymp-weather-sunny-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-sunny-icon"></use>
                            </svg>

                            <div class="temperature-sensor-day">60°</div>
                        </li>

                        <li>
                            <div class="day">mon</div>
                            <svg class="olymp-weather-partly-sunny-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-partly-sunny-icon"></use>
                            </svg>
                            <div class="temperature-sensor-day">58°</div>
                        </li>

                        <li>
                            <div class="day">tue</div>
                            <svg class="olymp-weather-cloudy-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-cloudy-icon"></use>
                            </svg>

                            <div class="temperature-sensor-day">67°</div>
                        </li>

                        <li>
                            <div class="day">wed</div>
                            <svg class="olymp-weather-rain-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-rain-icon"></use>
                            </svg>

                            <div class="temperature-sensor-day">70°</div>
                        </li>

                        <li>
                            <div class="day">thu</div>
                            <svg class="olymp-weather-storm-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-storm-icon"></use>
                            </svg>

                            <div class="temperature-sensor-day">58°</div>
                        </li>

                        <li>
                            <div class="day">fri</div>
                            <svg class="olymp-weather-snow-icon">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-snow-icon"></use>
                            </svg>

                            <div class="temperature-sensor-day">68°</div>
                        </li>

                        <li>
                            <div class="day">sat</div>

                            <svg class="olymp-weather-wind-icon-header">
                                <use xlink:href="svg-icons/sprites/icons-weather.svg#olymp-weather-wind-icon-header"></use>
                            </svg>

                            <div class="temperature-sensor-day">65°</div>
                        </li>

                    </ul>

                    <div class="date-and-place">
                        <h5 class="date">Saturday, March 26th</h5>
                        <div class="place">San Francisco, CA</div>
                    </div>

                </div>
            </div>
            <!-- W-Weather -->            </div>




    </section>
--}}

    <p class="title" style="align-content: center"> Profile modules</p>


    <section class="cardCollection">
        <div class="item">
            <div class="ui-block">
                <div class="ui-block-title">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>

                    <h6 class="title">James’s Badges</h6>
                </div>
                <div class="ui-block-content">

                    <!-- W-Badges -->

                    <ul class="widget w-badges">
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge1.png" alt="author">
                                <div class="label-avatar bg-primary">2</div>
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge4.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge3.png" alt="author">
                                <div class="label-avatar bg-blue">4</div>
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge6.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge11.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge8.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge10.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge13.png" alt="author">
                                <div class="label-avatar bg-breez">2</div>
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge7.png" alt="author">
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <img src="/img/social/badge12.png" alt="author">
                            </a>
                        </li>
                    </ul>

                    <!--.. end W-Badges -->
                </div>
            </div>
        </div>
        <div class="item">
            <div class="ui-block">
                <div class="ui-block-title">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>

                    <h6 class="title">My Spotify Playlist</h6>
                </div>

                <!-- W-Playlist -->

                <ol class="widget w-playlist">
                    <li class="js-open-popup" data-popup-target=".playlist-popup">
                        <div class="playlist-thumb">
                            <img src="/img/social/playlist6.jpg" alt="thumb-composition">
                            <div class="overlay"></div>
                            <a href="#" class="play-icon">
                                <svg class="olymp-music-play-icon-big">
                                    <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="composition">
                            <a href="#" class="composition-name">The Past Starts Slow...</a>
                            <a href="#" class="composition-author">System of a Revenge</a>
                        </div>

                        <div class="composition-time">
                            <time class="published" datetime="2017-03-24T18:18">3:22</time>
                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Add Song to Player</a>
                                    </li>
                                    <li>
                                        <a href="#">Add Playlist to Player</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>

                    <li class="js-open-popup" data-popup-target=".playlist-popup">
                        <div class="playlist-thumb">
                            <img src="/img/social/playlist7.jpg" alt="thumb-composition">
                            <div class="overlay"></div>
                            <a href="#" class="play-icon">
                                <svg class="olymp-music-play-icon-big">
                                    <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="composition">
                            <a href="#" class="composition-name">The Pretender</a>
                            <a href="#" class="composition-author">Kung Fighters</a>
                        </div>

                        <div class="composition-time">
                            <time class="published" datetime="2017-03-24T18:18">5:48</time>
                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Add Song to Player</a>
                                    </li>
                                    <li>
                                        <a href="#">Add Playlist to Player</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li class="js-open-popup" data-popup-target=".playlist-popup">
                        <div class="playlist-thumb">
                            <img src="/img/social/playlist8.jpg" alt="thumb-composition">
                            <div class="overlay"></div>
                            <a href="#" class="play-icon">
                                <svg class="olymp-music-play-icon-big">
                                    <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="composition">
                            <a href="#" class="composition-name">Blood Brothers</a>
                            <a href="#" class="composition-author">Iron Maid</a>
                        </div>

                        <div class="composition-time">
                            <time class="published" datetime="2017-03-24T18:18">3:06</time>
                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Add Song to Player</a>
                                    </li>
                                    <li>
                                        <a href="#">Add Playlist to Player</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li class="js-open-popup" data-popup-target=".playlist-popup">
                        <div class="playlist-thumb">
                            <img src="/img/social/playlist9.jpg" alt="thumb-composition">
                            <div class="overlay"></div>
                            <a href="#" class="play-icon">
                                <svg class="olymp-music-play-icon-big">
                                    <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="composition">
                            <a href="#" class="composition-name">Seven Nation Army</a>
                            <a href="#" class="composition-author">The Black Stripes</a>
                        </div>

                        <div class="composition-time">
                            <time class="published" datetime="2017-03-24T18:18">6:17</time>
                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Add Song to Player</a>
                                    </li>
                                    <li>
                                        <a href="#">Add Playlist to Player</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li class="js-open-popup" data-popup-target=".playlist-popup">
                        <div class="playlist-thumb">
                            <img src="/img/social/playlist10.jpg" alt="thumb-composition">
                            <div class="overlay"></div>
                            <a href="#" class="play-icon">
                                <svg class="olymp-music-play-icon-big">
                                    <use xlink:href="/svg-icons/sprites/icons-music.svg#olymp-music-play-icon-big"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="composition">
                            <a href="#" class="composition-name">Killer Queen</a>
                            <a href="#" class="composition-author">Archiduke</a>
                        </div>

                        <div class="composition-time">
                            <time class="published" datetime="2017-03-24T18:18">5:40</time>
                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Add Song to Player</a>
                                    </li>
                                    <li>
                                        <a href="#">Add Playlist to Player</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </li>
                </ol>

                <!-- .. end W-Playlist -->
            </div>
        </div>
        <div class="item">
            <div class="ui-block">
                <div class="ui-block-title">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>

                    <h6 class="title">Twitter Feed</h6>
                </div>

                <!-- W-Twitter -->

                <ul class="widget w-twitter">
                    <li class="twitter-item">
                        <div class="author-folder">
                            <img src="/img/social/twitter-avatar1.png" alt="avatar">
                            <div class="author">
                                <a href="#" class="author-name">Space Cowboy</a>
                                <a href="#" class="group">@james_spiegelOK</a>
                            </div>
                        </div>
                        <p>Tomorrow with the agency we will run 5 km for charity. Come and give us your support!
                            <a href="#" class="link-post">#Daydream5K</a></p>
                        <span class="post__date">
                            <time class="published" datetime="2017-03-24T18:18">
                                2 hours ago
                            </time>
                        </span>
                    </li>
                    <li class="twitter-item">
                        <div class="author-folder">
                            <img src="/img/social/twitter-avatar1.png" alt="avatar">
                            <div class="author">
                                <a href="#" class="author-name">Space Cowboy</a>
                                <a href="#" class="group">@james_spiegelOK</a>
                            </div>
                        </div>
                        <p>Check out the new website of “The Bebop Bar”! <a href="#" class="link-post">bytle/thbp53f</a>
                        </p>
                        <span class="post__date">
                            <time class="published" datetime="2017-03-24T18:18">
                                16 hours ago
                            </time>
                        </span>
                    </li>
                    <li class="twitter-item">
                        <div class="author-folder">
                            <img src="/img/social/twitter-avatar1.png" alt="avatar">
                            <div class="author">
                                <a href="#" class="author-name">Space Cowboy</a>
                                <a href="#" class="group">@james_spiegelOK</a>
                            </div>
                        </div>
                        <p>The Sunday is the annual agency camping trip and I still haven’t got a tent
                            <a href="#" class="link-post">#TheWild #Indoors</a></p>
                        <span class="post__date">
                            <time class="published" datetime="2017-03-24T18:18">
                                Yesterday
                            </time>
                        </span>
                    </li>
                </ul>


                <!-- .. end W-Twitter -->
            </div>
        </div>
        <div class="item">
            <div class="ui-block">
                <div class="ui-block-title">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>

                    <h6 class="title">Last Videos</h6>
                </div>
                <div class="ui-block-content">

                    <!-- W-Latest-Video -->

                    <ul class="widget w-last-video">
                        <li>
                            <a href="https://vimeo.com/ondemand/viewfromabluemoon4k/147865858"
                               class="play-video play-video--small">
                                <svg class="olymp-play-icon">
                                    <use xlink:href="/svg-icons/sprites/icons.svg#olymp-play-icon"></use>
                                </svg>
                            </a>
                            <img src="/img/social/video8.jpg" alt="video">
                            <div class="video-content">
                                <div class="title">System of a Revenge - Hypnotize...</div>
                                <time class="published" datetime="2017-03-24T18:18">3:25</time>
                            </div>
                            <div class="overlay"></div>
                        </li>
                        <li>
                            <a href="https://youtube.com/watch?v=excVFQ2TWig" class="play-video play-video--small">
                                <svg class="olymp-play-icon">
                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-play-icon"></use>
                                </svg>
                            </a>
                            <img src="/img/social/video7.jpg" alt="video">
                            <div class="video-content">
                                <div class="title">Green Goo - Live at Dan’s Arena</div>
                                <time class="published" datetime="2017-03-24T18:18">5:48</time>
                            </div>
                            <div class="overlay"></div>
                        </li>
                    </ul>

                    <!-- .. end W-Latest-Video -->
                </div>
            </div>
        </div>
        <div  class="item">
            <div class="ui-block">
                <button data-toggle="modal" data-target="#formulaire" class="btn btn-primary">ajouter un module personnalisé</button>
            </div>
        </div>

    </section>

    <textarea class="codemirror-textarea">hello</textarea>


    <div class="modal fade" id="formulaire">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <table border="2" width="100%" height="100%">
                        <tr>
                            <th>
                                <table width="100%" height="100%" border="0" cellspacing="5" cellpadding="5">
                                    <tr>
                                        <td width="50%" scope="col"></td>
                                        <td width="50%" scope="col" align="left">
                                            <center><input onclick="runCode();" type="button" value="Run">
                                            </center>
                                        </td>
                                    </tr>
                                    <td>
                                        <form>
                                            <center><b>ecrit ton code ici</b></center>
                                            <textarea name="sourceCode" id="sourceCode">
                                                <html>
                                                    <head> <title>code</title> </head>
                                                    <body>
                                                        <h1> output</h1>
                                                        <p> Write HTML, Javascript or CSS here & click run</p>
                                                     </body>
                                                </html>
                                            </textarea>
                                        </form>
                                    </td>

                                    <td><b>
                                            <center>Output
                                        </b></center>
                                        <iframe name="targetCode" id="targetCode"></iframe>
                                    </td>
                                </table>
                                <script>
                                    function runCode() {
                                        var content = document.getElementById('sourceCode').value;
                                        var iframe = document.getElementById('targetCode');
                                        iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument) ? iframe.contentDocument.document :
                                            iframe.contentDocument;

                                        iframe.document.open();
                                        iframe.document.write(content);
                                        iframe.document.close();
                                        return false;
                                    }

                                    runCode();
                                </script>
                        </tr>
                        </th>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- .. end W-Activity-Feed -->
<!-- .. JAVASCRIPT CODEMIRROR -->
<script type="text/javascript" src="/resources/js/website/jquery.min.js"></script>
<script type="text/javascript" src="/app/plugin/codemirror-5.48.2/lib/codemirror.js"></script>
<script src="/resources/js/social/default.js"></script>

@include('social.layouts.footer')
</body>

</html>