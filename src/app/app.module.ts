import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RoundedComponent } from './rounded/rounded.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { LoadingChartComponent } from './loading-chart/loading-chart.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatCardModule } from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { UserService } from './shared/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { DefaultModule } from './patientAccount/default/default.module';
import { DefaultDoctorModule } from './doctorAccount/default-doctor/default-doctor.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoundedComponent,
    LoadingChartComponent,
    FooterComponent,
    ContactUsComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ChartsComponent
    ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    ChartModule,
    MatFormFieldModule,
    DefaultModule,
    MatMenuModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right'
    }),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
