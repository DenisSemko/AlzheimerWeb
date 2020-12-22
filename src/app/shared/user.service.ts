import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = "https://localhost:44363/api";

  formModel = this.fb.group({
    Name : [''],
    Surname : [''],
    Username : ['', Validators.required],
    Email : ['', Validators.email],
    PasswordHash : ['', [Validators.required, Validators.minLength(8)]],
    UserType : ['']

  })


  register(){
    var body = {
      Name : this.formModel.value.Name,
      Surname : this.formModel.value.Surname,
      Username : this.formModel.value.Username,
      Email : this.formModel.value.Email,
      PasswordHash : this.formModel.value.PasswordHash,
      UserType : this.formModel.value.UserType
    };
    return this.http.post(this.BaseURI + '/UserAuth/registration', body);

  }

  login(formData){
    return this.http.post(this.BaseURI + '/UserAuth/login', formData);
  }
  tokenHeader = new HttpHeaders({'Authorization' : 'Bearer ' + localStorage.getItem('accessToken')});
  getUserProfile(){
    return this.http.get(this.BaseURI + '/UserProfile', {headers: this.tokenHeader});
  }
  getUserTestResult() {
    return this.http.get(this.BaseURI + '/UserProfile', {headers: this.tokenHeader});
  }

}
