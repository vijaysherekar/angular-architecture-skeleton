import { Injectable } from '@angular/core';
import { ApplicationModule } from './enums/application-module.enum';
import { ApplicationRole } from './enums/application-role.enum';
import { UserActions } from './enums/user-actions.enum';

@Injectable({
  providedIn: 'root'
})
export class ApplicationConstantsService {

  /**
 * Add all the constants required across the application
 */
  public MODULE_ROLE_MAPPING = {
    [ApplicationModule.DASHBOARD]: [ApplicationRole.CONTROLLER, ApplicationRole.ADMIN, ApplicationRole.USER]
  };

  public ROLE_MODULE_ACTION_MAPPING = {
    [ApplicationModule.DASHBOARD]: {
      [UserActions.CREATE]: [ApplicationRole.CONTROLLER, ApplicationRole.ADMIN, ApplicationRole.USER],
      [UserActions.DELETE]: [ApplicationRole.CONTROLLER, ApplicationRole.ADMIN, ApplicationRole.USER],
      [UserActions.EDIT]: [ApplicationRole.CONTROLLER, ApplicationRole.ADMIN, ApplicationRole.USER],
      [UserActions.LIST]: [ApplicationRole.CONTROLLER, ApplicationRole.ADMIN, ApplicationRole.USER],
      [UserActions.VIEW]: [ApplicationRole.CONTROLLER, ApplicationRole.ADMIN, ApplicationRole.USER]
    }
  };
}
