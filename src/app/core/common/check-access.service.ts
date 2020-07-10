import { Injectable } from '@angular/core';
import { ApplicationConstantsService } from './application-constants.service';
import { UserDetailsService } from './user-details.service';

@Injectable({
  providedIn: 'root'
})
export class CheckAccessService {
  /**
   * Provide two functions which
   */
  constructor(private constantUtility: ApplicationConstantsService,
    private userUtility: UserDetailsService) { }


  /**
   * This will help to check access of module to the logged in user
   * @param moduleName module name
   */
  checkUserHasAccess(moduleName: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      return resolve(true);
    });
  }

  /**
   * This will help to check user has operation/action level access on module
   * @param moduleName
   * @param actionSpecified
   */
  checkActionLevelAccess(moduleName: string, actionSpecified:string):  Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      return resolve(true);
    });
  }
}
