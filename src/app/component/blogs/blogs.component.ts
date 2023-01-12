import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  users: any ;
  constructor(private BlogService: BlogService) { }
  getBlogs() {
    this.BlogService.getBlogs().subscribe(res => {
      this.users = res.blogs;
    })
  }
  ngOnInit(): void {
    this.getBlogs()
    
  }

}
