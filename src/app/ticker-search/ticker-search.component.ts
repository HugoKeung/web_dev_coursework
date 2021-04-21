import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ticker-search',
  templateUrl: './ticker-search.component.html',
  styleUrls: ['./ticker-search.component.css']
})
export class TickerSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  ticker:string = ""
  
  search(ticker){
    ticker = ticker.toUpperCase();
    this.router.navigateByUrl('/stocks/'+ticker);
  }





}
