import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-individual-note',
  templateUrl: './individual-note.component.html',
  styleUrls: ['./individual-note.component.css']
})
export class IndividualNoteComponent implements OnInit {
  @Input() note;
  @Input() uid;

  constructor() { }
  name: string;
  time: string;
  message: string;
  direction: boolean;
  self: boolean;
  author;
  loaded = false;
  ngOnInit(): void {
    this.time = this.note['TIME']
    this.message = this.note['BODY']
    this.name = this.note['NAME']
    this.author = this.note['UID']
    if (this.uid == this.author){
      this.self = true;
    }
    else{
      this.self = false;
    }
    this.loaded = true;

  }

}
