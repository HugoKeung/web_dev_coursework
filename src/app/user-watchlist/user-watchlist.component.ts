import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataServiceService } from '../data-service.service';
import { UserService } from '../user.service';





@Component({
  selector: 'app-user-watchlist',
  templateUrl: './user-watchlist.component.html',
  styleUrls: ['./user-watchlist.component.css']
})
export class UserWatchlistComponent implements OnInit {
  loaded = false
  item=0
  watchlist=[]
  match=[]
  empty=false;
displayedColumns: string[] = ['ticker', 'name', 'price', 'percent','detail'];

  constructor(private data:DataServiceService, private user:UserService) { 
  
  }


  ngOnInit(): void {
    this.watchlist=[]
    this.loaded = false;
    this.data.fullWatchlist(this.user.currentUser()).subscribe(
      data=>{
        this.match = data['rows']
      },
      err=>{console.log(err)},
      ()=>{
        console.log('list updateing')
        if (this.match.length ==0){
    
          this.empty=true
          this.loaded=true
        }

        for (let ticker of this.match){
          this.data.getCurrentPrice(ticker.COMPANY).subscribe(
            data=>{console.log(data)
              let price = data['body3']['latestPrice']
              let fullName = data['body3']['companyName']
              let percent = (data['body3']['changePercent']*100).toFixed(2)
              let change = data['body3']['change']
              let  positive = true
     
              if (change>0){
                positive=true;
              }
              else{
                positive = false;
              }
              this.watchlist.push({ticker: ticker.COMPANY,  name: fullName, price: price,percent : percent, change: change, positive : positive})
            },
            err=>{console.log(err)},
            ()=>{
              this.item+=1
              if (this.item == this.match.length){
                this.loaded = true
                this.item=0
              }
            }
          )
        }

      }
    )
  }

  watchlistUpdate(event){
    this.ngOnInit();
  }

}
