import { Injector } from '@angular/core';

export class ServiceLocator {
  public static injector: Injector;

  static setInjector(injector: Injector) {

    ServiceLocator.injector = injector;

  }

  static getInjector(): Injector {

    return ServiceLocator.injector;

  }

}
