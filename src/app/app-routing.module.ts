import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RoundedComponent } from './rounded/rounded.component';
import{ LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {HomeComponent} from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { DefaultComponent } from './patientAccount/default/default.component';
import { DashboardComponent } from './patientAccount/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { MmseComponent } from './patientAccount/mmse/mmse.component';
import { MmseresultComponent } from './patientAccount/mmseresult/mmseresult.component';
import { NotesBodyComponent } from 'src/app/patientaccount/notes-body/notes-body.component';
import { DefaultDoctorComponent } from 'src/app/doctorAccount/default-doctor/default-doctor.component';
import { DashboardDoctorComponent } from 'src/app/doctorAccount/dashboard-doctor/dashboard-doctor.component';
import { PatientsListComponent } from 'src/app/doctorAccount/patients-list/patients-list.component';

const routes: Routes = [
  
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'patient',
    component: DefaultComponent,
    children: [{
      path: 'account',
      component: DashboardComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'account/note/new',
      component: NotesBodyComponent
    },
    {
      path: 'account/:id',
      component: NotesBodyComponent
    },
    {
      path: 'mmse',
      component: MmseComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'mmse-result',
      component: MmseresultComponent,
      canActivate: [AuthGuard]
    }]
  },
  {
    path: 'doctor',
    component: DefaultDoctorComponent,
    children: [{
      path: 'account',
      component: DashboardDoctorComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'patients-list',
      component: PatientsListComponent
    }
  ]
  },
  {
    path: '',
    component: HomeComponent, 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
