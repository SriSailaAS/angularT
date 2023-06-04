import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username!:string;
  useremail!:string;
  useraddress!:string;

  objArray!:Array<any>;
  constructor(){
    this.objArray=[];
  }
  addnew(){
    this.objArray.push({name:this.username,email:this.useremail,address:this.useraddress})
    this.username='';
    this.useremail='';
    this.useraddress=''
  }
  delete(index:any){
    this.objArray.splice(index,1);
  }
}
