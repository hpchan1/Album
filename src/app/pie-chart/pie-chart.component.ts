import { Component, OnInit } from '@angular/core';
import {Label} from 'ng2-charts';
import {ChartType} from 'chart.js';
import data from '../../data1.js'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['Magenta', 'Aquamarine', 'Beige','yellow','red','green','blue','navy'],
    },
  ];

  constructor() { }

  ngOnInit() {
    const PieData = data 

    let images = {}

    for (const x of PieData) {
      for(const tagsname of x.tags){
      if (images[tagsname]) {
        
        images[tagsname] += 1
      } else {
        
        images[tagsname] = 1
      }
     }
    }

    for (const key in images) {
      this.pieChartLabels.push(key)
      const num = images[key]
      this.pieChartData.push(num)
    }
  }

}