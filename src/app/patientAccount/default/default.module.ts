import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/patientAccount/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MmseComponent } from 'src/app/patientAccount/mmse/mmse.component';
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
import { MmseresultComponent } from 'src/app/patientAccount/mmseresult/mmseresult.component';
import { PatientPageComponent } from 'src/app/patientaccount/patient-page/patient-page.component';
import { FormsModule } from '@angular/forms';
import { NotesListComponent } from 'src/app/patientaccount/notes-list/notes-list.component';
import { NotesBodyComponent } from 'src/app/patientaccount/notes-body/notes-body.component';





@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    MmseComponent,
    MmseresultComponent,
    PatientPageComponent,
    NotesListComponent,
    NotesBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatRadioModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxEchartsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatNativeDateModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ]
})
export class DefaultModule { }
