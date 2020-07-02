import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppInjector } from './app/app-injector';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  defaultEncapsulation: ViewEncapsulation.ShadowDom
})
/*.then((moduleRef) => {
  debugger;
  AppInjector.setInjector(moduleRef.injector);
})*/
.catch(err => console.error(`Main:bootstrapModule: Application bootstrap error is ${err} ${JSON.stringify(err)}`));
