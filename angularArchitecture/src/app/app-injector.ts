import { Injector } from '@angular/core';

export class AppInjector {

  public static injector: Injector;

  static setInjector(injector: Injector) {

    AppInjector.injector = injector;

  }

  static getInjector(): Injector {

    return AppInjector.injector;

  }

}
