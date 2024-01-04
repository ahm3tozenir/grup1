import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  constructor(private userService:UserService){}

  getAll() {
    return this.userService.getAll2().subscribe(res=>{
      console.log(res);
    })
  }
  getDeneme(){
    
  }
}