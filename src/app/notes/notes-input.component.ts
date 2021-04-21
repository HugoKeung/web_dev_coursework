import { Component, OnInit, Input, Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { UserService } from '../user.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notes-input',
  templateUrl: './notes-input.component.html',
  styleUrls: ['./notes-input.component.css']
})
export class NotesInputComponent implements OnInit {

  constructor(private data: DataServiceService) { }
  message:string="";
  direction:boolean;
  @Input() uid;
  @Input() ticker
  @Output() postNote: EventEmitter<any>=new EventEmitter();
  ngOnInit(): void {
    
  }

  submit(){

    this.data.postNotes(this.uid,this.ticker,this.message).subscribe(
      data=>{},
      err=>{console.error(err)},
      ()=>{
        //notification posted
        this.postNote.emit('Note uploaded')
        this.message=""
      }
    )
  }

}
