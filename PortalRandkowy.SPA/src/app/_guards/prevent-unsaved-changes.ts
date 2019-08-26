import { Component } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserEditComponent } from '../users/user-edit/user-edit.component';

export class PreventUnsevedChanges implements CanDeactivate<UserEditComponent>
{
  canDeactivate(Component: UserEditComponent) {
    if(Component.editform.dirty) {
      return confirm('sssssssssssssssssssssss');
    }
    return true;
  }
}
