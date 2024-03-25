<?php

namespace App\Services;

use App\Repositories\AuthRepositories;

class AuthService
{

    public function __construct(protected AuthRepositories $authRepositories)
    {
    }

    public function userRegistration(array $userData)
    {
        $userData['password'] = bcrypt($userData['password']);
        return $this->authRepositories->createUser($userData);
    }
}
