<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    <link href="https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://unpkg.com/bootstrap-material-design@0.5.10/dist/css/bootstrap-material-design.css" rel="stylesheet">
    <link href="https://unpkg.com/bootstrap-material-design@0.5.10/dist/css/ripples.css" rel="stylesheet">
    <link href="/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <title>ExoSuite</title>
    <link rel="icon" href="/img/logoSquare.png">

    <style>
        body {
            background-color: #fff;

        .btn-green {
            background-color: #1ab394;
            color: #fff;
            border-radius: 3px;

        &:hover, &:focus {
                      background-color: #18a689;
                      color: #fff;
                  }
        }

        .my-rating {
            font-size: 12px;
        }

        .panel-footer {
            background-color: #fff;
            text-align: right;
        }
        }

    </style>

    <!-- Custom styles for this template -->
    <link href="/css/agency.min.css" rel="stylesheet">
</head>
<body>
<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <div class="jumbotron">
        <div id="surveyElement"></div>

        <div id="result"></div>
    </div>
</div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://unpkg.com/bootstrap-material-design@0.5.10/dist/js/material.js"></script>
<script src="https://unpkg.com/bootstrap-material-design@0.5.10/dist/js/ripples.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js"></script>
<script src="https://unpkg.com/survey-knockout@0.12.15/survey.ko.min.js"></script>


<script type="text/javascript">
    $.material.init();

    var json = {
        completedHtml: "Découvrez <a href=\"/\">ExoSuite !</a>",
        title: "Retour sur ExoSuite",
        showProgressBar: "top",
        pages: [
            {
                elements: [
                    {
                        type: "rating",
                        name: "À quelle échelle avez-vous aimé l'événement ?",
                        isRequired: true,
                        rateValues: [
                            {
                                value: "1",
                                text: "Bof..."
                            },
                            {
                                value: "2",
                                text: "Ouais"
                            },
                            {
                                value: "3",
                                text: "Excellent !"
                            }
                        ]
                    },
                    {
                        type: "matrix",
                        columns: [
                            {
                                value: "1",
                                text: "Pas du tout d'accord"
                            },
                            {
                                value: "2",
                                text: "Neutre"
                            },
                            {
                                value: "3",
                                text: "Entièrement d'accord"
                            }
                        ],
                        isAllRowRequired: true,
                        isRequired: true,
                        name: "Indiquez si vous êtes d'accord avec les phrases suivantes",
                        rows: [
                            "Je me suis amusé lors de l'événement",
                            "J'ai aimé l'aspect communautaire et compétitif de cette événement",
                            "J'en parlerai à mes proches",
                            "J'attends le prochain événement"
                        ]
                    }
                ],
                name: "page1"
            },
            {
                elements: [
                    {
                        type: "radiogroup",
                        name: "Combien d'argent vous dépenseriez par mois pour du sport",
                        isRequired: true,
                        choices: [
                            {
                                value: "1",
                                text: "0€ - 20€"
                            },
                            {
                                value: "2",
                                text: "21€ - 50€"
                            },
                            {
                                value: "3",
                                text: "51€ - 150€"
                            },
                            {
                                value: "4",
                                text: "Plus de 151€"
                            }
                        ],
                        choicesOrder: "asc"
                    },
                    {
                        type: "radiogroup",
                        name: "Utilisez-vous une application pour faire du sport ?",
                        isRequired: true,
                        choices: [
                            {
                                value: "1",
                                text: "Oui"
                            },
                            {
                                value: "2",
                                text: "Non"
                            }
                        ]
                    }
                ],
                name: "page2"
            },
            {
                elements: [
                    {
                        type: "radiogroup",
                        name: "Accepteriez-vous de courir avec des lunettes connectées ?",
                        isRequired: true,
                        choices: [
                            {
                                value: "1",
                                text: "Oui"
                            },
                            {
                                value: "2",
                                text: "Non"
                            }
                        ]
                    },
                    {
                        type: "radiogroup",
                        name: "Voulez-vous faire du sport en utilisant les nouvelles technologies ?",
                        isRequired: true,
                        choices: [
                            {
                                value: "1",
                                text: "Oui"
                            },
                            {
                                value: "2",
                                text: "Non"
                            }
                        ]
                    },
                    {
                        type: "html",
                        html: "Avec les applications pour lunettes connectées ExoSuite, vous aurez la possibilité de courir contre des entités représentant les performances d'autres utilisateurs, que vous pourrez rencontrer lors d'évènements communautaires. Enfilez vos lunettes connectées et devenez acteur d'une révolution en matière de coaching sportif prônant un aspect communautaire amplifié, et obtenez un suivi personnalisé, quand et où vous voulez, afin d'améliorer vos performances.",
                        name: "question1"
                    },
                    {
                        type: "text",
                        inputType: "number",
                        isRequired: true,
                        name: "Combien seriez-vous prêt à payer pour cette solution sportive innovante ?"
                    },
                    {
                        type: "text",
                        inputType: "email",
                        name: "Intéressé ? Laissez-nous votre mail !"
                    }
                ],
                name: "page3"
            }
        ]
    };

    Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
    Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
    Survey.Survey.cssType = "bootstrapmaterial";

    var survey = new Survey.Model(json);

    survey.onComplete.add(function(result) {
        var str_json = JSON.stringify(result.data);
        $.ajax({
            url: '/survey',
            method: 'POST',
            data: {
                json: str_json
            },
            headers: {
                'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
            },
            dataType: 'json',
            success: function (data) {
                console.info(data);
            },
            error: function (data) {
                console.info(data);
            }
        });
        //document.querySelector('#result').innerHTML = "result: " + JSON.stringify(result.data);
    });

    survey.render("surveyElement");
</script>
</html>