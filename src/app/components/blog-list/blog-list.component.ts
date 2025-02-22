import { Component, inject, Input, input } from '@angular/core';
import { IBlog } from '../../interfaces/iblog.interfaces';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog-list',
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {

  blogService = inject(BlogsService)
  blogs: IBlog[] = []
  text: string= ""

  clickBlog (event: any){
    console.log ('Hola' + event.target.value)
  }
  
  truncateText(text: string, maxCharacters: number): string {
    return text.length > maxCharacters ? text.slice(0, maxCharacters) + "..." : text;
  }

  ngOnInit(){
    this.blogs = this.blogService.getAll()
  }


}

