import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  msg: string = '';
  form = true;
  messages = false;
  // private router:Router
  constructor(private apiService: ApiServiceService,private router:Router) {
  }
  onloginclick(){
        this.router.navigate(['/','signup'])
  }
  ngOnInit(): void {
    
  }
  // gotonav(){
  //   this.router.navigate(['/','dashboard']);
  // }
  submitForm(){
    const data = {
      username: this.username,
      password: this.password,
    };
    console.log('user data for login', data);
    this.apiService.login(data).subscribe(
      (response:any) => {
        console.log(response[0]);
        if (response[0].username == this.username) {
          console.log(response[0],'this is what it s')
          this.msg = 'User login successfully!';
          this.form = false;
          this.messages = true;
          swal.fire('Logged in SUCCESSFULLYYYYY')
          this.router.navigate(['/','dashboard']);
          
          //path to dashboard
        }
      },
      (error) => {
        console.log(error);
        swal.fire('Please enter correct username and password');
      }
    );
  }

}



