import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  api_url = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  postNotes(uid, ticker,message){
    let body = {"UID": uid, "COMPANY":ticker,"BODY": message};
    return this.http.post (this.api_url+'notes/'+ticker+'/'+uid, body);
  }

  getNotes(uid, ticker){
    return this.http.get(this.api_url+'notes/'+ticker+'/'+uid);
  }

  getFullNotes(ticker){
    return this.http.get(this.api_url+'notes/'+ticker);

  }
//done
  addWatchlist(uid, ticker){
    //body not used, informatiaoin passed through url instead
    let body = {"UID": uid, "COMPANY": ticker};
    return this.http.post(this.api_url+'watchlist/'+uid+'/'+ticker,body);
  }
//done
  removeWatchlist(uid,ticker){

    return this.http.delete(this.api_url+'watchlist/'+uid+'/'+ticker);
  }
//done
  checkWatchlist(uid,ticker){
    return this.http.get(this.api_url+'watchlist/'+uid+'/'+ticker);
  }
//done
  fullWatchlist(uid){
    return this.http.get(this.api_url+'watchlist/'+uid);
  }

//news
  getNews(ticker){
    return this.http.get(this.api_url+ticker+'/news')
  }

  getCurrentPrice(ticker){
    return this.http.get(this.api_url+ticker+'/price')
  }

  getChart(ticker,time){
    return this.http.get(this.api_url+ticker+'/chart/'+time)
  }


}
