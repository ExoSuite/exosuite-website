<!doctype html>
<html lang="{{ app()->getLocale() }}">
@head()
<meta name="description"
      content="Profil"/>
@endhead
<body>
<div class="container emp-profile">
    <form method="post">

        <div class="row">
            <div class="col-md-4">
                <div class="profile-img">
                    <img src="https://cdn.local.epitech.eu/userprofil/profilview/pierre.piazza.jpg" alt=""/>
                    <div class="file btn btn-lg btn-primary">
                        Changer de Photo
                        <input type="file" name="file"/>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="profile-head">
                    <h5 >
                        Pierre PIAZZA
                    </h5><br/>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Résumé</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Parcours</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="friends-tab" data-toggle="tab" href="#friends" role="tab" aria-controls="friends" aria-selected="false">Amis</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <input type="submit" class="profile-edit-btn" name="btnAddMore" value=" Editer le Profil "/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">

            </div>
            <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Nom d'utilisateur</label>
                            </div>
                            <div class="col-md-6">
                                <p>Symaen</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Nom</label>
                            </div>
                            <div class="col-md-6">
                                <p>Pierre PIAZZA</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Email</label>
                            </div>
                            <div class="col-md-6">
                                <p>pierre.piazza@exosuite.fr</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Nombre de parcours</label>
                            </div>
                            <div class="col-md-6">
                                <p>0</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Vos parcours</label>
                            </div>
                            <div class="col-md-6">
                                <p> </p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="friends" role="tabpanel" aria-labelledby="friends-tab">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Nombre d'amis</label>
                            </div>
                            <div class="col-md-6">
                                <p>0</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Vos amis</label>
                            </div>
                            <div class="col-md-6">
                                <p> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
</body>
</html>
