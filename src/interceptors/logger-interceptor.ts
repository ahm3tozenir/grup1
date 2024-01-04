import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor{

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let token = "logger";
    
    const auth = req.clone({
      setHeaders:{'Authorization': token},
    });


    return next.handle(auth);
  }
}