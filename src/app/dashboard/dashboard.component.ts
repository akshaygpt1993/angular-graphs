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

  graphsInRow2 = 2;

  mainGraphWidth = this.currentWindowWidth;
  otherGraphsWidth = this.currentWindowWidth / this.graphsInRow2; 

  windowResize$ = fromEvent(window, 'resize').subscribe((event: any) => {
    this.currentWindowWidth = event.target.innerWidth;
    this.mainGraphWidth = this.currentWindowWidth;
    this.otherGraphsWidth = this.currentWindowWidth / this.graphsInRow2; 
  });  

  ngOnDestroy(): void {
    this.windowResize$.unsubscribe()
  }
}
