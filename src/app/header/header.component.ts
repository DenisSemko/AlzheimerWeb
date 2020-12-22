import { Component, OnInit, LOCALE_ID, Inject  } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  languageList = [
  { code: 'en', label: 'English' },
  { code: 'uk', label: 'Українська' }
  ];
  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {
   
  }
 changeUkr() {
   document.getElementById('statistics').innerHTML = "СТАТИСТИКА";
   document.getElementById('contact').innerHTML = "КОНТАКТИ";

 }
 change() {
   for(let language of this.languageList) {
     if(language.label == "Українська") {
        document.getElementById('statistics').innerHTML = "СТАТИСТИКА";
        document.getElementById('contact').innerHTML = "КОНТАКТИ";
     }
   }
 }
}
