<?php
/**
 * Created by PhpStorm.
 * User: loiclopez
 * Date: 12/11/2018
 * Time: 16:43
 */

namespace Tests\Browser\Config;


/**
 * Class RedirectConfig
 * @package Tests\Browser\Config
 */
class RedirectConfig
{

    /**
     * @var string
     */
    public $source;

    /**
     * @var string
     */
    public $linkText;

    /**
     * @var string
     */
    public $expectedAfterClick;

    /**
     * @var string
     */
    public $dropdownLinkText;


    /**
     * RedirectConfig constructor.
     * @param string $source
     * @param string $linkText
     * @param string $expectedAfterClick
     * @param null $dropdownLinkText
     */
    public function __construct(string $source, string $linkText, string $expectedAfterClick, $dropdownLinkText = null)
    {
        $this->source = $source;
        $this->linkText = $linkText;
        $this->expectedAfterClick = $expectedAfterClick;
        $this->dropdownLinkText = $dropdownLinkText;
    }
}
