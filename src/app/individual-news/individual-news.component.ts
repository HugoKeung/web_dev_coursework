import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-individual-news',
  templateUrl: './individual-news.component.html',
  styleUrls: ['./individual-news.component.css']
})
export class IndividualNewsComponent implements OnInit {
  @Input() article
  time;
  constructor() { }

  ngOnInit(): void {
    this.time = this.article.publishedAt.substring(0,10)
  }

}
