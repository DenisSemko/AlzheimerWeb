import { Component, EventEmitter, OnInit, Output, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header-doctor',
  templateUrl: './header-doctor.component.html',
  styleUrls: ['./header-doctor.component.css']
})
export class HeaderDoctorComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'uk', label: 'Українська' }
    ];

  constructor(private router: Router, private toastr: ToastrService, @Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.toggleSideBarForMe.emit();

  }
  onLogout(){
    localStorage.removeItem('accessToken');
    this.router.navigateByUrl('/login');
  }
  profileWarning() {
    this.toastr.warning('Please update your profile with the detailed information!', 'Update Profile');
  }
btnClick() {
  this.router.navigateByUrl('doctor/my-account');
}

}
