import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataServiceService } from '../data-service.service';
import { UserService } from '../user.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user-watchlist-table',
  templateUrl: './user-watchlist-table.component.html',
  styleUrls: ['./user-watchlist-table.component.css']
})
export class UserWatchlistTableComponent implements OnInit {

  @Input() watchlist
  @Input() displayedColumns
  @Output() listUpdate:EventEmitter<any>=new EventEmitter();

  dataSource = new MatTableDataSource(this.watchlist);
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private data:DataServiceService, private user: UserService) { 
  
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource(this.watchlist);
    this.dataSource.sort = this.sort;

  }

  remove(ticker){
    this.data.removeWatchlist(this.user.currentUser(),ticker).subscribe(
      data=>{},
      err=>{console.log(err)},
      ()=>{
        this.listUpdate.emit('list updated')
        
      }
    )
  }
}
