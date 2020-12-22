import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-chart',
  templateUrl: './loading-chart.component.html',
  styleUrls: ['./loading-chart.component.css']
})
export class LoadingChartComponent implements OnInit {
  isLoading = false;
  options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['High income countries', 'Low & middle income countries']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['2015', '2025', '2030', '2035', '2040', '2045', '2050']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'High income countries',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [10, 15, 25, 35, 40, 43, 45]
      },
      {
        name: 'Low & middle income countries',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [30, 50, 75, 100, 110, 125, 140]
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
