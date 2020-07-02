import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CustomErrorHandlerModule } from './custom-error-handler/custom-error-handler.module';

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    const msg = `${moduleName} has already been loaded. Import Core modules in the AppModule only.`;
    throw new Error(msg);
  }
}

@NgModule({
  declarations: [],
  imports: [
CustomErrorHandlerModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
