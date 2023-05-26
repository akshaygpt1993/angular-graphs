import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  title = "Data Viewer";
  currentWindowWidth = window.innerWidth;

  graphsInRow2 = [{title: "Graph 1"}, {title: "Graph 2"}];

  mainGraphWidth = this.currentWindowWidth;
  otherGraphsWidth = this.currentWindowWidth / this.graphsInRow2.length; 

  windowResize$ = fromEvent(window, 'resize').subscribe((event: any) => {
    this.currentWindowWidth = event.target.innerWidth;
    this.mainGraphWidth = this.currentWindowWidth;
    this.otherGraphsWidth = this.currentWindowWidth / this.graphsInRow2.length; 
  }); 

  addGraph() {
    this.graphsInRow2.push({title: `Graph ${this.graphsInRow2.length - 1}`});
  }

  ngOnDestroy(): void {
    this.windowResize$.unsubscribe()
  }
}
