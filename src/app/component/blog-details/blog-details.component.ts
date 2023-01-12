import { DetailsService } from './details.service';
import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  @Input() viewMode = false;
  blog= {
    "title":"",
    "content":''
  } ;
  constructor(private DetailsService:DetailsService,
    private route: ActivatedRoute) { }
   
  ngOnInit(): void {
      this.getBlog(this.route.snapshot.params["id"])
    
    
  }
  getBlog(id: string): void {
    this.DetailsService.getBlog().subscribe(res => {
      for (const d of (res.blogs  as any)) {
        if(d.uri == id){
          this.blog.title = d.title;
          this.blog.content = d.content;
        }
      }
    })
  }
}
