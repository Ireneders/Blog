import { Injectable } from '@angular/core';
import { IBlog } from '../interfaces/iblog.interfaces';
import { blogList } from '../db/blogs.db';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private arrayBlogs: IBlog[] = blogList 

  insert(blog: IBlog): any{

    this.arrayBlogs.push(blog)
    return {status: true, msg:'Entrada publicada con exito'}
  }

  getAll() : IBlog[] {
    return this.arrayBlogs;
  }

}
