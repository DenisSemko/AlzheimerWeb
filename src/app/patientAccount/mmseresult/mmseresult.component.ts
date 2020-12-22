import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MmseService } from 'src/app/shared/mmse.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-mmseresult',
  templateUrl: './mmseresult.component.html',
  styleUrls: ['./mmseresult.component.css']
})
export class MmseresultComponent implements OnInit {
  userTestDetails;

  constructor(private router: Router, private userService: UserService) { }
  ngOnInit(){
    this.userService.getUserProfile().subscribe(
      res => {
        this.userTestDetails = res
      },
      err =>{
        console.log(err);
      }
    );
  };

}
