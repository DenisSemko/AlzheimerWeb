import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  firstName: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  diagnosis: string;
  id: number;
}


@Component({
  selector: 'app-dialog-box-doctor',
  templateUrl: './dialog-box-doctor.component.html',
  styleUrls: ['./dialog-box-doctor.component.css']
})
export class DialogBoxDoctorComponent implements OnInit {

  action:string;
  local_data:any;
  constructor(public dialogRef: MatDialogRef<DialogBoxDoctorComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) { 
      console.log(data);
      this.local_data = {...data};
      this.action = this.local_data.action;
    }

    doAction(){
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
  
    closeDialog(){
      this.dialogRef.close({event:'Cancel'});
    }

  ngOnInit(): void {
  }

}
