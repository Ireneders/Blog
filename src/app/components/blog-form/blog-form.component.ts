import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IBlog } from '../../interfaces/iblog.interfaces';
import { BlogsService } from '../../services/blogs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog-form',
  imports: [FormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {

  blogService = inject(BlogsService)
  blogs: IBlog[] = []

 getDataForm(blogForm: NgForm) {
  let newBlog: IBlog = blogForm.value

  if (!newBlog.title.trim() || !newBlog.img.trim() || !newBlog.content.trim() || !newBlog.date.trim()) {
    Swal.fire({
      title: 'Error',
      text: 'Todos los campos son obligatorios.',
      icon: 'error',
      confirmButtonText: 'Entendido'
    });
    return;
  }

  let response= this.blogService.insert(newBlog)

  if (response.status){
    blogForm.reset()
    Swal.fire({
      title: 'Felicidades!',
      text: response.msg,
      icon: 'success',
      confirmButtonText: 'Gracias'
    })
  }
 }


 ngOnInit(){
  this.blogs = this.blogService.getAll()
}
}
