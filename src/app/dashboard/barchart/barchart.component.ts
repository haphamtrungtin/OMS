import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
})
export class BarchartComponent implements OnInit {
  chart: any;
  ChartOptions: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    this.chart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

      datasets: [
        {
          label: 'Barchart',
          fill: false,
          backgroundColor: '#213969',
          data: [800, 750, 650, 542, 645, 758, 852],
        },
      ],
    };
    this.ChartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: {
            color: '#000000',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#000000',
            font: {
              size: 14,
            },
          },
          grid: {
            color: '#ffffff',
          },
        },
        y: {
          ticks: {
            color: '#000000',
            font: {
              size: 14,
            },
          },
          grid: {
            color: '#cbd5e1',
          },
        },
      },
    };
  }
}
