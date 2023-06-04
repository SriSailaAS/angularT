import { Component } from '@angular/core';
import { postService } from '../services/post.service';
import {Post} from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {

  pl!:Array<any>;

  constructor(private postService:postService){

    this.pl=postService.postList;

  }
  onNewData(){
    let newPost : Post={
      id:7,
      postTitle:'pst 7'

    }

    this.postService.addpost(newPost)
  }

}
