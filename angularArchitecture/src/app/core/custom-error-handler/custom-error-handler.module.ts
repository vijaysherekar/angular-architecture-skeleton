import { NgModule, ErrorHandler } from '@angular/core';
import { CustomErrorService } from './custom-error.service';



@NgModule({
  providers: [{ provide: ErrorHandler, useClass: CustomErrorService }]
})
export class CustomErrorHandlerModule { }
