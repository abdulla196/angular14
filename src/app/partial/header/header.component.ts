import { Component, OnInit } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isValid = true; 
  defulte:string | null;
  constructor(public translate: TranslateService)  {
    
    this.defulte= localStorage.getItem('language')
    translate.addLangs(['en','ar']);
    translate.setDefaultLang(this.defulte? this.defulte : 'ar');
   }
   switchLang(lang:string){
    this.translate.use(lang);
    if(lang == 'ar'){
      localStorage.setItem('language','ar')
      this.isValid = true
    }
    else{
      localStorage.setItem('language','en')
      this.isValid = false
    }
   }
  ngOnInit(): void {
    if(!localStorage.getItem('language')){
      localStorage.setItem('language','ar')
    }
    if(localStorage.getItem('language') == 'ar'){
      this.isValid = true
    }
    else{
      this.isValid = false
    }
  }

}
