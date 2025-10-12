import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartOptions, ChartType, registerables } from 'chart.js';

// register Chart.js components (required for Chart.js v3+/v4+)
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgClass, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {

  stats = [
    { title: 'Total Posts', value: 120, icon: 'bi bi-file-earmark-text', bgClass: 'bg-blue' },
    { title: 'Comments', value: 350, icon: 'bi bi-chat-left-text', bgClass: 'bg-green' },
    { title: 'Views', value: 4200, icon: 'bi bi-eye', bgClass: 'bg-orange' },
    { title: 'Likes', value: 1050, icon: 'bi bi-hand-thumbs-up', bgClass: 'bg-purple' },
  ];

  recentPosts = ['Post 1 - 12 Oct 2025', 'Post 2 - 10 Oct 2025', 'Post 3 - 09 Oct 2025'];
  topPosts = ['Post A - 1200 views', 'Post B - 900 views', 'Post C - 750 views'];
  trafficData: any;
  trafficOptions: any;


  // Pie chart labels
  pieChartLabels: string[] = ['Comments', 'Likes', 'Views'];

  // Pie chart data
  pieChartData: number[] = [ 350, 1050, 4200];

  pieChartType: ChartType = 'pie';

  // Datasets (include backgroundColor for pie slices)
  pieChartDatasets: any[] = [
    {
      data: this.pieChartData,
      backgroundColor: [ '#11998e', '#8e2de2', '#ff7e5f']
    }
  ];

  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

}
