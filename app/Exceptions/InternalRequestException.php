<?php
/**
 * Created by PhpStorm.
 * User: loiclopez
 * Date: 12/09/2018
 * Time: 11:33
 */

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


/**
 * Class FailedInternalRequestException
 */
class InternalRequestException extends Exception
{

    /**
     * Request instance
     */
    private $_request;

    /**
     * Response instance
     */
    private $_response;


    /**
     * Constructor
     *
     * @param Request $request The request object.
     * @param Response $response The response object.
     *
     * @return void
     */
    public function __construct(Request $request, $response)
    {
        parent::__construct();
        $this->_request = $request;
        $this->_response = $response;
    }


    /**
     * Get request object
     *
     * @return Request
     */
    public function getRequest()
    {
        return $this->_request;
    }


    /**
     * Get response object
     *
     * @return Response
     */
    public function getResponse()
    {
        return $this->_response;
    }
}
