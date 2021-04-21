import { Component, OnInit,Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { JsonPipe } from '@angular/common';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ResourceLoader } from '@angular/compiler';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() ticker;
  uid;
  showNotes=true
  notes:any=[];
  constructor(private data: DataServiceService, private router:Router, private user: UserService) { }

  ngOnInit(): void {
    this.data.getFullNotes(this.ticker).subscribe(
      data =>{this.notes=data['rows']},
      err=>{console.error(err)},
      ()=>{

      }
      

    )
    this.uid = this.user.currentUser()
    console.log('current uid' + this.uid)
  }
  noteUpdate(event){
    this.ngOnInit();
  }

}
