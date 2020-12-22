import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MmseService } from 'src/app/shared/mmse.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sidebar-patient',
  templateUrl: './sidebar-patient.component.html',
  styleUrls: ['./sidebar-patient.component.scss']
})
export class SidebarPatientComponent implements OnInit {
  userDetails;
  url = '';

  constructor(private router: Router, private service: UserService, private mservice: MmseService) { }
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
