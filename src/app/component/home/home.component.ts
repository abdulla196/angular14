import { Component, OnInit } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isValid = true;
  constructor(private metaTagService: Meta,private title: Title,private translate: TranslateService) {}
 
  ngOnInit(): void { 
      this.translate.get('meta').subscribe((data:any)=> {
        this.title.setTitle(data.title_page);
        this.metaTagService.updateTag({ name: 'description', content: data.description_page });  
        this.metaTagService.updateTag({ name: 'title', content: data.title_page });   
      });
    this.metaTagService.updateTag({ name: 'writer', content: 'Harry Potter' });  
    if(localStorage.getItem('language') == 'ar'){
      this.isValid = true
    }
    else{
      this.isValid = false
    }
  }

}
