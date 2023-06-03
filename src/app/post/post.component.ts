import { Component,OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title:string='List of Posts';
  messagePost:string='a message post';
  outputchildMsg:string='Message from child Component via output'
  childMessagePost:string='child message from post'

  @Input() fromParent!:string;

  @Output() messageEvent=new EventEmitter<string>()
constructor(){}
ngOnInit(): void {
  
}
sendmsg(){
  this.messageEvent.emit(this.outputchildMsg);
}
}
