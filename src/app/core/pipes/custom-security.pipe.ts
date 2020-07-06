import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'customSecurity'
})
export class CustomSecurityPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(value: string, args: SecurityContext): string | null {
    return this.domSanitizer.sanitize(args, value);
  }

}
