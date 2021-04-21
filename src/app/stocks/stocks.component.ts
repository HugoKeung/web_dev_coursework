import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private data:DataServiceService, private user: UserService) { }
  ticker: string;
  loaded:boolean;
  price:string;
  fullName:string;
  added:boolean;
  uid;
  percent;
  change;
  positive:boolean;
  valid:boolean = false;
  time='1m'
  chartdata=[]

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.ticker = params['id'];
      this.price = "$100.00"
      this.fullName="Apple (US)"
      this.loaded=false
      
      //change to match user profile
      this.uid = this.user.currentUser();
      this.data.checkWatchlist(this.uid,this.ticker).subscribe(
        (data:boolean)=>{this.added=data
     
      },
        err=>{console.log(err)},
        ()=>{
        this.data.getCurrentPrice(this.ticker).subscribe(
        data=>{
       
          this.price = data['body3']['latestPrice']
          this.fullName = data['body3']['companyName']
          this.percent = (data['body3']['changePercent']*100).toFixed(2)
          this.change = data['body3']['change']
          if (this.change>0){
            this.positive=true;
          }
          else{
            this.positive = false;
          }
          this.valid=true;
          if (isNaN(Number(this.price))){
       
            this.valid=false;
            this.router.navigateByUrl('/invalid')
            //change look of page
          }
        },
        err=>{console.log(err)},
        ()=>{
          this.data.getChart(this.ticker, this.time).subscribe(
            data=>{
              this.chartdata = data['body3']
            
              this.loaded = true
            },

          )
          
        }
      )
        }

      )

    }
      )
  }

  addToWatchList(){
    //talk to backend to add watchlist
    this.added=!this.added

    if (this.added){
      this.data.addWatchlist(this.uid, this.ticker).subscribe(
        data=>{},
        err=>{console.log(err)},
        ()=>{
      
        }
      )
    }
    else{
      this.data.removeWatchlist(this.uid,this.ticker).subscribe(
        data=>{this.chartdata = data['body3']},
        err=>{console.log(err)},
        ()=>{
          this.loaded=true;
        }
      )
    }
    
  }



}
