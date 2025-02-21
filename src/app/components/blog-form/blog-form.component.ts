import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IBlog } from '../../interfaces/iblog.interfaces';

@Component({
  selector: 'app-blog-form',
  imports: [FormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {
 newBlog : IBlog = {tittle: '', img: '', content :'', date: ''}
}
