import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPatientComponent } from './header-patient/header-patient.component';
import { FooterPatientComponent } from './footer-patient/footer-patient.component';
import { SidebarPatientComponent } from './sidebar-patient/sidebar-patient.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu'
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HeaderPatientComponent,
    FooterPatientComponent,
    SidebarPatientComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule
  ],
  exports:[
    HeaderPatientComponent,
    FooterPatientComponent,
    SidebarPatientComponent
  ]
})
export class SharedModule { }
