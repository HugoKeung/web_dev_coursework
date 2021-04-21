import { Component, OnInit, Input } from '@angular/core';
import { Color, BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }
  @Input() ticker;
  @Input() chartdata;
  tickers:string[];
  time: string = '1m';

  loaded:boolean;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'line';
  public barChartLegend = false;  
  public barChartData = [];
  ngOnInit(): void {
    let graphpoint=[]
    console.log('chart data is')
    console.log(this.chartdata)
    this.loaded=true;
    var i;
    for (i=0; i < this.chartdata.length;i++){
      this.barChartLabels[i] = this.chartdata[i].date.substring(5,10);
      graphpoint[i] = this.chartdata[i].close;
      
      
    }
    let tempchart = {data: graphpoint, label:this.ticker}
    this.barChartData.push(tempchart)
    
  }

}
