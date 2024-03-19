<?php

namespace App\Http\Controllers;

use App\Rep\AuthRepositories;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(){
        AuthRepositories::test();
    }
}
