import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxDoctorComponent } from 'src/app/doctorAccount/dialog-box-doctor/dialog-box-doctor.component';

export interface UsersData {
  firstName: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  diagnosis: string;
  id: number;
}
const data: UsersData[] = [
  {id: 1860608769632, firstName: 'Ivan', surname: 'Kovalenko', username: 'kov_me', email: 'kov@gmail.com', password: '12345Kk!', diagnosis: 'Alzheimer 1-st'},
  {id: 1960608796014, firstName: 'Sergiy', surname: 'Dmitrenko', username: 'dmitr', email: 'dmitr@gmail.com', password: '12345Kk!', diagnosis: 'Alzheimer 2-nd'},
  {id: 1260608787815, firstName: 'Test User 2', surname: 'Test User 2', username: 'test_user_2_patient', email: 'patient@gmail.com', password: '12345678Tt!', diagnosis: 'Alzheimer 2-nd'}
];

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'surname', 'username', 'email', 'password', 'diagnosis', 'action'];
  dataSource = data;
  
  sideBarOpen = false;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(public dialog: MatDialog) { }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxDoctorComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      firstName:row_obj.firstName, 
      surname:row_obj.surname,
      username:row_obj.username,
      email:row_obj.email,
      password:row_obj.password,
      diagnosis:row_obj.diagnosis
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.firstName = row_obj.firstName;
        value.surname = row_obj.surname;
        value.username = row_obj.username;
        value.email = row_obj.email;
        value.password = row_obj.password;
        value.diagnosis = row_obj.diagnosis;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

  ngOnInit(): void {
  }

}
