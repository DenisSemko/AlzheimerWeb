import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarDoctorComponent } from './sidebar-doctor/sidebar-doctor.component';
import { HeaderDoctorComponent } from 'src/app/doctoraccount/shared/header-doctor/header-doctor.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu'
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    SidebarDoctorComponent,
    HeaderDoctorComponent
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
    RouterModule,
    MatSidenavModule
  ], 
  exports: [
    SidebarDoctorComponent,
    HeaderDoctorComponent
  ]
})
export class SharedDoctorModule { }
