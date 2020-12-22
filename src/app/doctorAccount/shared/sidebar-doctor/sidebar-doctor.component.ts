import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sidebar-doctor',
  templateUrl: './sidebar-doctor.component.html',
  styleUrls: ['./sidebar-doctor.component.scss']
})
export class SidebarDoctorComponent implements OnInit {
  userDetails;
  url = '';

  constructor(private service: UserService, private router: Router) { }

  OnSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 

      reader.onload = (event) => { 
        this.url = <string>event.target.result;
      }
    }
  }
  ngOnInit(){
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res
      },
      err =>{
        console.log(err);
      }
    );
  };

}
