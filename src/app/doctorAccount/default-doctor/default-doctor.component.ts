import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-doctor',
  templateUrl: './default-doctor.component.html',
  styleUrls: ['./default-doctor.component.scss']
})
export class DefaultDoctorComponent implements OnInit {

  sideBarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  sideBarToggler(event: Event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
