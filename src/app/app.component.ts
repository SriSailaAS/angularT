import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postArray:Array<string>=['post 1','post 2','post 3'];

  objArray!:Array<any>;
  stepForm!:string;

  isActive:boolean=true;
  constructor(){
    this.objArray=[]
    for(let i=0;i<this.postArray.length; i++){
      console.log(this.postArray[i])
    }
  }
  addnew(){

    this.objArray.push({id:6,postTitle:'post 5'})
  }
  delete(index:any){
    this.objArray.splice(index,1);
  }
  onClick(status:any){
    this.stepForm=status;

  }
}
