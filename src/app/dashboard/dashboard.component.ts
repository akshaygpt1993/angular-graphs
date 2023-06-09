import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { DygraphViewerService } from '../dygraph/dygraph-viewer.service';
import { GraphData } from '../dygraph/dygraph.typings';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnDestroy {
  constructor(private dyGraphService: DygraphViewerService) {}

  title = "Data Viewer";

  mainGraphData$ = new BehaviorSubject<GraphData>(this.dyGraphService.getNonObservableGraphData(1, window.innerWidth))
  
  graphsInRow2$ = [
    this.dyGraphService.getGraphData(2),
    this.dyGraphService.getGraphData(3),
  ];

  windowResize$ = fromEvent(window, 'resize').subscribe((event: any) => {
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

  logGraphActionDoneOn(graphData: GraphData): void {
    console.log("User done action on", graphData.id)
  }
}
