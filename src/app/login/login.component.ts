import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  formModel = {
    Username : '',
    PasswordHash : ''
  }
  myModel = false; 
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('accessToken') != null){
      if(this.myModel == true) {
        this.router.navigateByUrl('doctor/account');
      } else {
        this.router.navigateByUrl('patient/account');
      }
    }
  }
onChange(e) {
  this.myModel = e.checked;
}
  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any) => {
        localStorage.setItem('accessToken', res.accessToken);
        if(this.myModel == true) {
          this.router.navigateByUrl('doctor/account');
        } else {
          this.router.navigateByUrl('patient/account');
        }
      },
      err => {
        console.log(err);
      }
    )
  }
  

}
