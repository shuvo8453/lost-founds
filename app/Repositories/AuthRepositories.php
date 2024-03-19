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
}
