import { Component, ElementRef, ViewChild, Input, OnChanges, ChangeDetectionStrategy, OnInit } from '@angular/core';
import Dygraph from 'dygraphs';
import { DygraphViewerService } from '../dygraph-viewer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dygraph-viewer',
  templateUrl: './dygraph-viewer.component.html',
  styleUrls: ['./dygraph-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DygraphViewerComponent implements OnChanges, OnInit {
  constructor(private dyGraphService: DygraphViewerService) {}
 
  @ViewChild('dygraphsdiv') public chart?: ElementRef;
  dygraph: any;
  currentWidth = this.graphData?.options.width;

  // Use to pass graph data directly.
  @Input() graphData?: any;
  // Use to pass graph data observable.
  @Input() graphData$?: Observable<any>;
  ngOnInit(): void {
    this.graphData$?.subscribe(graphData => {
      this.graphData = graphData,
      this.checkAndResizeWidth()
    })
  }
  // Use to pass graphId using which graph data service will be used to fetch graph data.
  @Input() graphId: any;

  checkAndResizeWidth() {
    if (this.currentWidth !== this.graphData?.options.width) {
      this.currentWidth = this.graphData?.options.width;
      this.dygraph?.resize(this.currentWidth);
    }
  }

  fetchGraphDatIfRequired() {
    if (!this.graphData && this.graphId) {
      this.graphData = this.dyGraphService.getGraphData(this.graphId)
    }
  }

  ngOnChanges(): void {
    this.fetchGraphDatIfRequired();

    if (this.dygraph) {
      this.checkAndResizeWidth();
    } else {
      setTimeout(() => {
        if (this.graphData) {
          this.dygraph = new Dygraph(this.chart?.nativeElement,
            this.graphData.data,
            this.graphData.options
          );
        }
      }, 500);
    }
  }
}
