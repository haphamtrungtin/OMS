import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: any;
};
@Component({
  selector: 'app-sales-by-location',
  templateUrl: './sales-by-location.component.html',
  styleUrls: ['./sales-by-location.component.css']
})
export class SalesByLocationComponent {
  titles: string[] | undefined;
  isSubmenuOn : boolean | undefined;
  salesData: any;
  countryData: any;
  leadData: any;
  leadOptions:any;
  countryOptions: any;
  chartOptions: Partial<ChartOptions> | any;

  barchart: any;
  constructor(private data : ShareService, private route:ActivatedRoute) {
  }
  generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
  ngOnInit() {
    this.chartOptions = {
      plotOptions: {
        heatmap: {
          radius: 10
        }
      },
      series: [
        {
          name: "Vietnam",
          data: this.generateData(9, {
            min: 1000,
            max: 20000
          })
        },
        {
          name: "Thailand",
          data: this.generateData(9, {
            min: 1000,
            max: 20000
          })
        },
        {
          name: "Malaysia",
          data: this.generateData(9, {
            min: 1000,
            max: 20000
          })
        },
        {
          name: "Singapore",
          data: this.generateData(9, {
            min: 1000,
            max: 20000
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#27447C"],
      
    };
    this.barchart = document.getElementById("barchart");

    this.data.currentSubMenuState.subscribe(state => this.isSubmenuOn = state);
    this.titles = this.route.snapshot.data['title'];
    this.salesData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Sales',
              data: [1000, 200, 500, 1000, 5000, 4500, 2000],
              fill: false,
              borderColor: '#27447C',
              tension: .4
          }
      ]
    };
  //must return data by order (from largest)
    this.countryData = {
    responsive:false,
    maintainAspectRatio: false,
    datasets: [
        {
            data: [300, 120, 100, 50],
            backgroundColor: [
                "#27447C",
                "#FCA310",
                '#ED7D2D',
                "#F3F4F6"
            ]
        },
      ],
    };
    this.countryOptions= {
      plugins:{
        legend:{
          display:false,
        }
    },

    };
    this.leadOptions= {
      responsive: true,
      maintainAspectRatio: false,
      plugins:{
        legend:{
          display:false,
        }
      }
    };
    this.leadData = {
      labels: ['Singapore', 'Thailand', 'Vietnam', 'Malaysia'],
      datasets: [
          {
              backgroundColor: '#27447C',
              data: [65, 59, 80, 81]
          },
          {
              backgroundColor: '#FCA310',
              data: [28, 48, 40, 19]
          }
      ]
    };
  }
  
  triggerSubmenu(){
    this.data.changeSubMenuState(true);
  }
 
  ngAfterViewInit(){
  this.barchart.firstChild.style.height = "100%";
  }
  
}
