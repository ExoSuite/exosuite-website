<?php declare(strict_types = 1);
/**
 * Created by PhpStorm.
 * User: Yassir
 * Date: 26/03/2019
 * Time: 16:21
 */

namespace App\Models\Abstracts;

use App\Models\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;

/**
 * Class UuidModel
 *
 * @package App\Models\Abstracts
 */
abstract class UuidModel extends Model
{
    use Uuids;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    public static function getTableName(): string
    {
        return (new static)->getTable();
    }
}
