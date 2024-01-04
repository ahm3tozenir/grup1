import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize, tap } from "rxjs";

@Injectable()
export class AuthInteceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let status:string;
        let token = localStorage.getItem("token");
        let newRequest:HttpRequest<any>=req.clone({
            headers:req.headers.set("Authorization","Bearer "+token)
        });
        let requestObservable= next.handle(newRequest);
        requestObservable.subscribe(result=>{
            console.log(result);
        })
        return requestObservable.pipe(
            tap({
                complete:()=>{
                    status = 'Completed';
                },
                error: (_error) => {
                    status = 'Failed ' + JSON.stringify(_error);
                }
            }),
            finalize(()=> {
                const message = `${req.method} "${req.urlWithParams}"
                    ${status}`;
                console.log(message);
            })
        );
    }

}