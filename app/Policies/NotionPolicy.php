<?php

namespace App\Policies;

use App\Models\Notion;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class NotionPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Notion $notion): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Notion $notion): bool
    {
        return $notion->user()->is($user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Notion $notion): bool
    {
        return $this->update($user, $notion);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Notion $notion): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Notion $notion): bool
    {
        //
    }
}
