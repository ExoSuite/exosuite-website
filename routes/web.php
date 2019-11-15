<?php

use App\Services\Parser;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::domain(Parser::getDomain())->group(function () {
    Route::get('/', 'SimpleViewController@home')->name('get_home');

    Route::get('/language/{locale}', 'LanguageController@language');

    Route::group(['prefix' => 'contact'], function () {
        Route::get('/', 'ContactController@index')->name('get_contact');
        Route::post('/', 'ContactController@contact');
    });

    Route::get('exosuite', 'SimpleViewController@exosuite')->name('get_exosuite');

    Route::get('exorun', 'SimpleViewController@exorun')->name('get_exorun');

    Route::get('exofun', 'SimpleViewController@exofun')->name('get_exofun');

    Route::get('pricing', 'SimpleViewController@pricing')->name('get_pricing');

    Route::get('team', 'SimpleViewController@team')->name('get_team');

    Route::get('blog', 'SimpleViewController@comingsoon')->name('get_blog');

    Route::get('social', 'SimpleViewController@social')->name('get_social');

    Route::post('register', 'Auth\RegisterController@register')->name('registerAPI');

    Route::group(["prefix" => "login"], function () {
        //  don't modify to get_login or laravel will not understand!
        Route::get('/', 'Auth\LoginController@loginView')->name('login');
        Route::post('/', 'Auth\LoginController@login')->name('loginAPI')->middleware("init_api_client");
        Route::get('/recover', 'Auth\LoginController@recoverView')->name('recover');
    });
});

Route::domain(config('social_app.domain'))->group(function () {
    Route::group(['middleware' => 'auth'], function () {
        Route::get('/groups', 'SocialController@groupView')->name('get_group_view');
        Route::post('/groups', 'SocialController@createGroup')->name('post_group');
        Route::post('/addpost', 'ProfileController@addpostView');
        Route::post('/addpost2', 'ProfileController@addpostViewProfile');
        Route::post('/getAllPost', 'ProfileController@getpostfromdashboard');
        Route::get('/', 'SocialController@home')->name('get_newsfeed');

        //PROFILE
        Route::delete('/deletepost/{id}', 'ProfileController@deletepostView');
        route::post('/createCommentary', 'ProfileController@createCommentary');
        route::delete('/deleteComm/{commentId}/{postId}', 'ProfileController@deleteCommentary');
        route::post('/updateCommentary', 'ProfileController@updateCommentary');
        Route::get('/like/{postId}', 'SocialController@likePost');
        Route::post('/editpost', 'ProfileController@updatepostView');

        //FRIENDS
        Route::get('user/{user}/friendship/', 'friendsgeneralController@getFriendships'); //get friends from someone
        Route::delete('user/{user}/friendship/', 'friendsgeneralController@deleteFriendships')->name('deletefriend');
        Route::get('/me/friendship/', 'friendsgeneralController@getMyFriendships');
        Route::post('user/{user}/friendship/', 'friendsgeneralController@sendFriendshipRequest')->name('sendfriendrequest');
        Route::post('/me/friendship/{request}/accept/', 'friendsgeneralController@acceptRequest')->name('acceptrequest');
        Route::post('/me/friendship/{request}/decline', 'friendsgeneralController@declineRequest')->name('declinerequest');

        //FOLLOWS
        Route::get('user/{user}/follows/', 'followController@checkIfIamFollowing')->name('getifiamfollowing'); //get if i am following
        Route::delete('user/{user}/follows/', 'followController@deleteaFollow')->name('deleteaFollow'); //delete follow
        Route::get('user/{user}/follows/followers/', 'followController@getFollowers')->name('getfollowers'); //get followers
        Route::get('user/me/follows/followers/', 'followController@getMyFollowers')->name('getmyfollowers'); //get my followers
        Route::get('user/{user}/follows/followers/count/', 'followController@getFollowersCount')->name('getusersfollowerscount'); //get user's followers count
        Route::get('user/me/follows/followers/count/', 'followController@getFollows')->name('getmyfollowerscount'); //get my followers count
        Route::get('user/{user}/follows/following/', 'followController@getFollowsUsersCount')->name("getusersfollows"); //get user's follows
        Route::get('user/me/follows/following/', 'followController@getMyFollows')->name('getmyfollows'); //get my follows
        Route::get('user/{user}/follows/following/count/', 'followController@getFollowsUsersCount')->name('getusersfollowscount'); //get users follows count
        Route::get('user/me/follows/following/count/', 'followController@getMyFollowsCount')->name('getMyFollowsCount'); //get my follows count
        Route::post('user/{user}/follows/', 'followController@createaFollow')->name('createafollow');//create a follow

        //PENDING REQUESTS
        Route::get('/user/me', 'friendsgeneralController@getUser')->name('get_user'); //get User
        Route::get('/user/search', 'friendsgeneralController@SearchUser')->name('search_user'); //SearchUser
        Route::get('/user/me/groups', 'friendsgeneralController@getMyGroups')->name('getmy_groups'); //getMyGroups

        //USER PROFILE
        Route::get('/user/{user}/profile', 'friendsgeneralController@getUserProfile')->name('get_user_profile'); //get User


        Route::post('/editpost', 'ProfileController@updatepostView');
        Route::post('/getAllPost', 'ProfileController@getpostfromdashboard');
        Route::get('/', 'SocialController@home')->name('get_newsfeed');
        Route::get('/deletepost/{id}', 'ProfileController@deletepostView');

        Route::group(["prefix" => "profile"], function () {
            Route::get('/', 'SocialController@profile')->name('get_profile');
            Route::get('/edit', 'ProfileController@editMyProfileView');
            Route::post('/edit', 'ProfileController@editMyProfile');
            Route::post('/avatar', 'ProfileController@uploadAvatar')->name('post_avatar');
            Route::get('/runs', 'ProfileController@getRuns')->name('get_runs');
            //Route::get('friends', 'ProfileController@friendsView');
            Route::group(["prefix" => "widgets"], function () {
               Route::get('/', 'ProfileController@editWidgetsView');
            });
            Route::group(["prefix" => "widgetslib"], function () {
                Route::get('/', 'widgetlibraryController@home')->name('get_library');
            });
            Route::group(["prefix" => "myfriends"], function () {
                Route::get('/', 'friendsgeneralController@getmyfriendshome')->name('get_myfriends_page');
            });
            Route::group(["prefix" => "friendsrequests"], function () {
                Route::get('/', 'friendsgeneralController@getmyfriendshome')->name('get_friendsrequests_page');
            });
            Route::group(["prefix" => "follow"], function () {
                Route::get('/', 'friendsgeneralController@getmyfriendshome')->name('get_follow_page');
            });
        });
        Route::group(["prefix" => "user"], function () {
            Route::get('/{id}', 'ProfileController@profileView');
        });

        Route::prefix("token")->group(function () {
            Route::get('/', 'UserSessionController@getUserToken');
            Route::patch('/', 'UserSessionController@setUserToken');
            Route::get('/chat', 'UserSessionController@getChatToken');
        });
        Route::get('logout', 'Auth\LoginController@logout')->name('logout');
        Route::prefix('achievments')->group(function () {
            Route::get('/', 'SocialController@achievmentsHome');
        });
    });
});

Route::domain(config('admin.domain'))->group(function () {
    Route::group(['middleware' => 'admin'], function () {
        Route::get('/', 'Admin\AdminController@home')->name("get_admin");
        Route::prefix('users')->group(function () {
            Route::get('/', 'Admin\AdminController@allUserView')->name("get_users");
            Route::post('/', 'Admin\AdminController@createUser')->name("post_users");
            Route::prefix('{user}')->group(function () {
                Route::get('/', 'Admin\AdminController@userProfile')->name('get_userprofile');
            });
        });
    });
});


Route::prefix('monitoring')->group(function () {
    Route::get('/alive', "Controller@alive");
});
