<?php

namespace App\Repositories;

use App\Models\User;

class AuthRepositories
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function findByUserName($username)
    {
        return $this->user->where('username', $username)->first();
    }

    public function createUser($userData)
    {
        return $this->user->create($userData);
    }
}
