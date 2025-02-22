import { Component, inject, Input } from '@angular/core';
import { IBlog } from '../../interfaces/iblog.interfaces';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog-content',
  imports: [],
  templateUrl: './blog-content.component.html',
  styleUrl: './blog-content.component.css'
})
export class BlogContentComponent {
  blogService = inject(BlogsService)
  blogs: IBlog[] = []


  text: string= ""
  
  ngOnInit(){
    this.blogs = this.blogService.getAll()
  }

}
