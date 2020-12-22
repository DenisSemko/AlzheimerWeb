import { Component, OnInit } from '@angular/core';
import { graphic } from 'echarts';

@Component({
  selector: 'app-rounded',
  templateUrl: './rounded.component.html',
  styleUrls: ['./rounded.component.css']
})
export class RoundedComponent implements OnInit {
    options: any;

  constructor() { }

  ngOnInit(): void {
    const dataAxis = [
        '45-50 years',
        '51-64 years',
        '65-74 years',
        '75-84 years',
        '85 years',
      ];
      const data = [
        5,
        7,
        15,
        44,
        38,
      ];
      const yMax = 50;
      const dataShadow = [];
  
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
  
      this.options = {
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: true,
            textStyle: {
              color: '#fff',
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#999',
            },
          },
        },
        dataZoom: [
          {
            type: 'inside',
          },
        ],
        series: [
          {
            // For shadow
            type: 'bar',
            itemStyle: {
              normal: { color: 'rgba(0,0,0,0.05)' },
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false,
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: new graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.5, color: '#188df0' },
                  { offset: 1, color: '#188df0' },
                ]),
              },
              emphasis: {
                color: new graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' },
                ]),
              },
            },
            data,
          },
        ],
      };
    }
  
    onChartEvent(event: any, type: string) {
      console.log('chart event:', type, event);
    }
    

}
