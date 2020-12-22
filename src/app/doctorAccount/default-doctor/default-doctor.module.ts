import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDoctorComponent } from 'src/app/doctoraccount/default-doctor/default-doctor.component';
import { DashboardDoctorComponent } from 'src/app/doctoraccount/dashboard-doctor/dashboard-doctor.component';
import { PatientsListComponent } from 'src/app/doctoraccount/patients-list/patients-list.component';
import { SharedDoctorModule } from 'src/app/doctorAccount/shared/shared-doctor.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { DialogBoxDoctorComponent } from 'src/app/doctoraccount/dialog-box-doctor/dialog-box-doctor.component';



@NgModule({
  declarations: [
    DefaultDoctorComponent,
    DashboardDoctorComponent,
    PatientsListComponent,
    DialogBoxDoctorComponent
  ],
  imports: [
    CommonModule,
    SharedDoctorModule,
    RouterModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    FormsModule,
    MatTableModule
  ]
})

export class DefaultDoctorModule { }
