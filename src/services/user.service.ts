import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoggerInterceptor } from '../interceptors/logger-interceptor';
// import { Interceptor } from '../typings';

@Injectable({
    providedIn:'root'
})

export class UserService {
  constructor(private httpClient: HttpClient) {}
    // @Interceptor(
    //   { onBefore: () => { console.log("Kullanıcı girişi başladı"); } }
    // )()

  public token:string="this is tokeeen"
  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getAll2():Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}

