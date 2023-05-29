import { Component, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  title = "Data Viewer";
  currentWindowWidth = window.innerWidth;

  mainGraphData={
    title: "Graph Main",
    data: [
      [new Date("2008/05/07"), 75],
      [new Date("2008/05/08"), 70],
      [new Date("2008/05/09"), 80]
    ],
    options: {
      labels: ['Date','Temperature'],
      animatedZooms: true,
      pointSize: 4,
      width: this.currentWindowWidth,
      height: 300,
    }
  }

  numberOfGraphs = 2;
  graphsInRow2 = [
    {
      title: "Graph 1",
      data: [
        [new Date("2008/05/07"), 75],
        [new Date("2008/05/08"), 70],
        [new Date("2008/05/09"), 80]
      ],
      options: {
        labels: ['Date','Temperature'],
        animatedZooms: true,
        pointSize: 4,
        width: this.currentWindowWidth / this.numberOfGraphs,
        height: 300,
      }
    },
    {
      title: "Graph 2",
      data: [
        [new Date("2008/05/07"), 75],
        [new Date("2008/05/08"), 70],
        [new Date("2008/05/09"), 80]
      ],
      options: {
        labels: ['Date','Temperature'],
        animatedZooms: true,
        pointSize: 4,
        width: this.currentWindowWidth / this.numberOfGraphs,
        height: 300,
      }
    }
  ];

  windowResize$ = fromEvent(window, 'resize').subscribe((event: any) => {
    this.currentWindowWidth = event.target.innerWidth;
  });

  addGraph() {
    this.numberOfGraphs = this.numberOfGraphs + 1;
    this.graphsInRow2.push(
      {
        title: `Graph ${this.graphsInRow2.length - 1}`,
        data: [
          [new Date("2008/05/07"), 75],
          [new Date("2008/05/08"), 70],
          [new Date("2008/05/09"), 80]
        ],
        options: {
          labels: ['Date','Temperature'],
          animatedZooms: true,
          pointSize: 4,
          width: this.currentWindowWidth / this.numberOfGraphs,
          height: 300,
        }
      });
  }

  ngOnDestroy(): void {
    this.windowResize$.unsubscribe()
  }
}
