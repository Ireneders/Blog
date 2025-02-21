import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogFormComponent } from "./components/blog-form/blog-form.component";
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { BlogContentComponent } from "./components/blog-content/blog-content.component";
import { IBlog } from './interfaces/iblog.interfaces';

@Component({
  selector: 'app-root',
  imports: [BlogFormComponent, BlogListComponent, BlogContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  blogList: IBlog [] = [
    {tittle: 'Cádiz', img: 'url', content :'lorem', date: '21/02/2025'},
    {tittle: 'Sevilla', img: 'url', content :'lorem', date: '18/02/2025'},
  ]
} 


