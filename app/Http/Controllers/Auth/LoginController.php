<?php

namespace App\Http\Controllers\Auth;


use App\Facades\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginUser;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->redirectTo = route("get_profile");
    }

    /**
     * Attempt to log the user into the application.
     *
     * @param LoginUser $request
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function attemptLogin(LoginUser $request)
    {
        $data = $request->only(['email', 'password']);
        $data = array_merge($data, API::getWebsiteCredentials());
        $response = API::post('/auth/login', $data);
        $this->guard()->attempt($this->credentials($request), $request->filled('remember'));

        return $this->sendLoginResponse($request, $response);
    }

    protected function loggedOut(Request $request)
    {
        return redirect(route('login'));
    }

    /**
     * Handle a login request to the application.
     *
     * @param LoginUser $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws ValidationException
     */
    public function login(LoginUser $request)
    {
        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);
            $this->sendLockoutResponse($request);
        }

        try {
            return $this->attemptLogin($request);
        } catch (ClientException $exception) {
            // dd($exception->getMessage());
            // TODO: define behavior to print the error in $this->sendFailedLoginResponse($request);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        $this->sendFailedLoginResponse($request);
    }

    /**
     * Get the failed login response instance.
     *
     * @param \Illuminate\Http\Request $request
     * @return void
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function sendFailedLoginResponse(Request $request)
    {
        throw ValidationException::withMessages([$this->username() => [trans('auth.failed')],]);
    }

    /**
     * Send the response after the user was authenticated.
     *
     * @param \Illuminate\Http\Request $request
     * @param array $apiData
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function sendLoginResponse(Request $request, array $apiData)
    {
        $request->session()->regenerate();
        session($apiData);
        $response = API::get('/oauth/scopes', [], ['Authorization' => "Bearer " . $apiData['access_token']]);
        $bodyForRequestAccessToken = ['name' => 'collection-tokens', 'scopes' => array()];
        foreach ($response as $item) {
            $bodyForRequestAccessToken['scopes'] = array($item->id);
            session([$item->id =>
                API::post('/oauth/personal-access-tokens', $bodyForRequestAccessToken,
                    ['Authorization' => "Bearer " . $apiData['access_token']])]);
        }
        $bodyForRequestAccessToken['scopes'] = array('message', 'group');
        session(['token-mix-message-group' =>
            API::post('/oauth/personal-access-tokens', $bodyForRequestAccessToken,
                ['Authorization' => "Bearer " . $apiData['access_token']])]);
        $this->clearLoginAttempts($request);

        if ($request->query('redirect_uri')) {
            $redirect_uri = $request->query('redirect_uri');
            if (!is_array($redirect_uri)) {
                return redirect($redirect_uri);
            }
            return redirect()->back();
        }
        return $this->authenticated($request, $this->guard()->user()) ?: redirect()->intended($this->redirectPath());
    }

    protected function authenticated(Request $request, $user)
    {
        return \Redirect::to($this->redirectTo);
    }

    public function loginView()
    {
        return view('auth.login')->with('action', Url::full());
    }

    public function recoverView()
    {
        return view('auth.passwords.email');
    }
}
