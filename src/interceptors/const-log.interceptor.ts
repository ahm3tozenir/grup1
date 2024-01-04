import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { error } from 'console';
import { finalize, tap } from 'rxjs';

export const constLogInterceptor: HttpInterceptorFn = (req, next) => {
  let status: string;
  let authToken = localStorage.getItem("Authorization")??'';
  let defaultToken = 'sana bir token olusturdum hadi yine iyisin :)';
  let userId = 1;
  const authReq = req.clone({
    setHeaders: { Authorization: authToken, test: 'test' },
    setParams: { id: `${userId}` },
  });

  return next(authReq).pipe(
    tap({
      // next: (event) => { authReq.clo },
      complete: () => {
        status = 'succeeded';
        console.log('completed');
      },
      error: (_error) => {
        status = 'failed ' + JSON.stringify(_error);
      },
    }),

    finalize(() => {
      const message = `${req.method} "${req.urlWithParams}"
             ${status}`;
      console.log(message);
    })
  );
};
