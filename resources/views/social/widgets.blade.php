<!doctype html>
<html lang="{{ app()->getLocale() }}">
@include('social.layouts.head')
<head>

    <!-- JQuery -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="/js/social/jquery.gridster.js"></script>
    <script src="/js/app.js"></script>

    <link rel="stylesheet" type="text/css" href="/css/social/vendor/jquery.gridster.css" />

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
    <div class="row">

        <style type="text/css" media="screen">


            #grille1{
                border: 1px solid red;
                float: left;
            }
            #grille2{
                border: 1px solid blue;
                float: left;
            }

            .elem{
                background-color: #f6f6ae;
            }

            .grille{
                float:left;
                margin-right:5px;
            }

            .close-w {
                cursor: pointer;
                position: absolute;
                top: 50%;
                right: 0%;
                padding: 12px 16px;
                transform: translate(0%, -50%);
            }

        </style>

        <div class="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <button onclick="add_grid1()" style="margin-left: 50px">Ajouter un widget dans la grille 1</button>
            <button onclick="add_grid2()" style="margin-left: 68px">Ajouter un widget dans la grille 2</button>
        <br/>
            <button onclick="del_grid1()" style="margin-left: 50px">Supprimer un widget dans la grille 1</button>
            <button onclick="del_grid2()" style="margin-left: 50px">Supprimer un widget dans la grille 2</button>

        </div>

        <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">


                    <div id="grille1" class="gridster">
                        <ul>
                        </ul>
                    </div>
        </div>
        <div class="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">

                <div id="grille2" class="gridster">
                        <ul>
                        </ul>
                    </div>

        </div>


            <script type="text/javascript">
                var gridster = [];
                var nb1 = 0;
                var nb2 = 0;

                $(function() {
                    gridster[0] = $("#grille1  ul").gridster({
                        widget_margins: [10, 10],
                        widget_base_dimensions: [150, 150],
                        min_cols: 2,
                        max_cols: 3,
                        namespace: '#grille1',
                        resize: { enabled: true }
                    }).data('gridster');
                    gridster[1] = $("#grille2  ul").gridster({
                        widget_margins: [10, 10],
                        widget_base_dimensions: [150, 150],
                        min_cols: 2,
                        max_cols: 3,
                        namespace: '#grille2',
                        resize: { enabled: true }
                    }).data('gridster');
                });


                function add_grid1() {
                    var msg = prompt("Entrez un texte:", "");
                    gridster[0].add_widget('<li class="elem" data-id="' + nb1 + '">' + nb1 + '. ' + msg + '<span class="close-w" data-close="' + nb1 + '">X</span></li>', 2, 1);
                    nb1++;
                }

                function del_grid1() {
                    var nbRemove1;
                    while (isNaN(nbRemove1)){
                        nbRemove1 = prompt("Supprimer le widget no:", "");
                    }
                    gridster[0].remove_widget( $('#grille1 li').eq(nbRemove1) );
                }

                $(".close-w").click(function(){
                    var id=$(this).attr("data-close");
                    console.log(id);
                    //$("ul").find("[data-id='" + id + "']").remove();
                    gridster[0].remove_widget($('#grille1 ul').find("[data-id='" + id + "']"));
                });

                function add_grid2() {
                    var msg2 = prompt("Entrez un texte:", "");
                    gridster[1].add_widget('<li class="elem" id="rWidget' + nb2 + '">' + nb2 + '. ' + msg2 + '</li>', 2, 1);
                    nb2++;
                }

                function del_grid2() {
                    var nbRemove2 = prompt("Supprimer le widget no:", "");
                    gridster[1].remove_widget( $('#grille2 li').eq(nbRemove2) );
                }

            </script>
        </div>
    </div>
</div>

        <!-- ... end Main Content -->


        <!-- Left Sidebar -->



    </div>
</div>
s
<a class="back-to-top" href="#">
    <img src="/svg-icons/back-to-top.svg" alt="arrow" class="back-icon">
</a>

@include('social.layouts.footer')
</body>
</html>