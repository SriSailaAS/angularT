import {Injectable} from '@angular/core'
export class postService{

    postList :Array<any>=[
        {id:1,postTitle:'post 1'},
        {id:2,postTitle:'post 2'},
        {id:3,postTitle:'post 3'},


    ]
    addpost(data:any){
        this.postList.push(data);
    }
}