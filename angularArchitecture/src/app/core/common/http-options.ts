import { HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: '',
    timeout: environment.defaultTimeout
  })
};
