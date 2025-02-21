import { Component, Input, input } from '@angular/core';
import { IBlog } from '../../interfaces/iblog.interfaces';

@Component({
  selector: 'app-blog-list',
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {

 @Input() blogs: IBlog[] = [];
 text: string= ""

 ngOnChanges (){
  console.log (this.blogs)
 }

}
