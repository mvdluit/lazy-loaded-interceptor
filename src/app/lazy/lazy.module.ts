import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ChildComponent } from './child/child.component';
import { TokenInterceptorService } from '../token-interceptor.service';
import { LazyRoutingModule } from './lazy-routing.module';



@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    LazyRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }
  ]
})
export class LazyModule { }
