import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { DygraphViewerService } from '../dygraph/dygraph-viewer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnDestroy {
  constructor(private dyGraphService: DygraphViewerService) {}

  title = "Data Viewer";

  mainGraphData$ = new BehaviorSubject(this.dyGraphService.getNonObservableGraphData(1, window.innerWidth))
  
  graphsInRow2$ = [
    this.dyGraphService.getGraphData(2),
    this.dyGraphService.getGraphData(3),
  ];

  windowResize$ = fromEvent(window, 'resize').subscribe((event: any) => {
    console.log("resizing", event.target.innerWidth)
    this.mainGraphData$.next(this.dyGraphService.getNonObservableGraphData(1, event.target.innerWidth))
  });

  addGraph() {
    this.graphsInRow2$.push(
      this.dyGraphService.getGraphData(4)
    );
  }

  ngOnDestroy(): void {
    this.windowResize$.unsubscribe()
  }
}
