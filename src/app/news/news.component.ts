import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() fullName
  loaded = false
  articles=[]
  constructor(private data: DataServiceService) { }

  ngOnInit(): void {
    this.data.getNews(this.fullName).subscribe(
      data=>{this.articles=data['body3']['articles']},
      err=>{console.log(err)},
      ()=>{
        this.loaded = true
        console.log(this.articles)
      }
    )
  }

}
