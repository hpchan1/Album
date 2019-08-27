import { Component, OnInit } from '@angular/core';
import data from '../../data1.js';
import {Label} from 'ng2-charts';
import { ChartType, ChartDataSets} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];


  constructor() { }

  ngOnInit() {
    let LikesData = data

    let tempDataStore = {}

    for(let album of LikesData){
      const like = album.likes
      const tag = album.tags

      if(tempDataStore[like]){
        if(tempDataStore[like][tag]){
          
          tempDataStore[like][tag] += 1
        } else {
          
          tempDataStore[like][tag] = 1
        }
      } else {
        
        tempDataStore[like] = {}
        tempDataStore[like][tag] = 1
      }
      let LikesCount = {}

      for (const like in tempDataStore){
        this.barChartLabels.push(like)
        for(let model in tempDataStore[like]){
        if(LikesCount[model]){
          LikesCount[model].push(tempDataStore[like][model])
        } else {
          LikesCount[model] = [tempDataStore[like][model]]
        }
      }
      for(let model in LikesCount){
        this.barChartData.push(
          {data: LikesCount[model], label: model}
        )
      }
    }
  }   
 }
}