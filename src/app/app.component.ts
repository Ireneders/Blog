import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogFormComponent } from "./components/blog-form/blog-form.component";
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { IBlog } from './interfaces/iblog.interfaces';

@Component({
  selector: 'app-root',
  imports: [BlogFormComponent, BlogListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}


