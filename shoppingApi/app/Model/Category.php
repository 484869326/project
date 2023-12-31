<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model {
	protected $table = 'category';
	protected $primaryKey = 'Cid';
	public $timestamps = true;
	protected $fillable = ['Cname', 'parentID', 'level', 'Cimg'];
}
