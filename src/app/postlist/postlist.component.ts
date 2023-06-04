import { Component } from '@angular/core';
import { postService } from '../services/post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
})
export class PostlistComponent {


  postList!:Array<any>;

  constructor(private postlist:postService){
    this.postList=postlist.postList;

  }
}
