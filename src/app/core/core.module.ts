import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CustomErrorHandlerModule } from './custom-error-handler/custom-error-handler.module';
import { httpInterceptorProviders } from './http-interceptors/index';
import {CheckAccessService} from './common/check-access.service';
import{UserDetailsService} from './common/user-details.service';
import{ApplicationConstantsService} from './common/application-constants.service';
import{CommonApiService} from './common/common-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomSecurityPipe } from './pipes/custom-security.pipe';
import{StandardDataService} from './state-management/standard-data.service';

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    const msg = `${moduleName} has already been loaded. Import Core modules in the AppModule only.`;
    throw new Error(msg);
  }
}

@NgModule({
  declarations: [CustomSecurityPipe],
  imports: [
    HttpClientModule,
    CustomErrorHandlerModule],
  providers: [
    CommonApiService,
    ApplicationConstantsService,
    CheckAccessService,
    UserDetailsService,
    StandardDataService,
    httpInterceptorProviders
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
