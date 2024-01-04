import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from '../components/test/test.component';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoggerInterceptor } from '../interceptors/logger-interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users:User[]=[]
  constructor(private userService:UserService) {}

  // @LoggingInterceptorOnBefore("on before")
  // @LoggingInterceptorOnSuccess("dosya döndürüldü")
  // @LoggingInterceptorOnAfter("on after")

  // OnBefore(mesaj:string)

  
  getAll() {
    return this.userService.getAll().subscribe(res=>{
      console.log(res);
      this.users=res
    })
  }

  
  uploadImage(){
    console.log("Image Yüklenmekte");
  }

  // @LoggingInterceptorOnSuccess("resim yüklendi")
  // 
}
