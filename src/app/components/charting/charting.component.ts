import { Component, ViewChild, OnInit, Input } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.scss']
})
export class ChartingComponent {
  @ViewChild("chart", { static: false }) chart: ChartComponent;

  public chartOptions: Partial<any>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [50,70,50],
          name: "Sorter Archieve",
          type: "column"
        },
        {
          data: [90,100,50],
          name: "Sorter Failed",
          type: "column"
        },
        {
          data: [75,80,50],
          name: "Average Productivity",
          type: "line"
        }
      ],
      chart: {
        height: 400,
        redrawOnParentResize: true,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        },
        type: "line"
      },
      colors: ["red", "blue", "green"],
      dataLabels: {
        enabled: true,
        enabledOnSeries: [2]
      },
      noData: {
        align: "center",
        text: "No data available at the moment",
        verticalAlign: "middle"
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          horizontal: false
        }
      },
      stroke: {
        width: [0, 0, 4]
      },
      title: {
        text: "Productivity Sorter HUB BDG"
      },
      xaxis: {
        categories: ["Nov 20", "Dec 20", "Jan 1"],
        type: "category"
      },
      yaxis: [
        {
          title: {
            text: "Counts"
          }
        },
        {
          max: 100,
          min: 0,
          opposite: true,
          title: {
            text: "(%) Complete"
          }
        }
      ]
    };
  }
}