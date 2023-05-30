import { Component, ElementRef, ViewChild, Input, OnChanges, ChangeDetectionStrategy, OnInit } from '@angular/core';
import Dygraph from 'dygraphs';
import { DygraphViewerService } from '../dygraph-viewer.service';
import { Observable } from 'rxjs';
import {GraphData} from '../dygraph.typings'

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
  @Input() graphData?: GraphData;
  // Use to pass graph data observable.
  @Input() graphData$?: Observable<GraphData>;
  ngOnInit(): void {
    this.graphData$?.subscribe(graphData => {
      this.graphData = graphData,
      this.checkAndResizeWidth()
    })
  }
  // Use to pass graphId using which graph data service will be used to fetch graph data.
  @Input() graphId?: number;

  // Graph type
  @Input() graphType: string = "Default";
  currentGraphType = this.graphType;

  checkAndResizeWidth() {
    if (this.currentWidth !== this.graphData?.options.width) {
      this.currentWidth = this.graphData?.options.width;
      this.dygraph?.resize(this.currentWidth);
    }
  }

  fetchGraphDatIfRequired() {
    if (!this.graphData && this.graphId) {
      this.graphData = this.dyGraphService.getNonObservableGraphData(this.graphId)
    }
  }

  generateGraph() {
    setTimeout(() => {
      console.log(this.graphData, "this.graphData")
      if (this.graphData) {
        this.dygraph = new Dygraph(this.chart?.nativeElement,
          this.graphData.data,
          this.graphData.options
        );
      }
    }, 500);
  }

  ngOnChanges(): void {
    if (this.currentGraphType !== this.graphType) {
      this.currentGraphType = this.graphType;

      this.generateGraph();
    }

    this.fetchGraphDatIfRequired();

    if (this.dygraph) {
      this.checkAndResizeWidth();
    } else {
      this.generateGraph();
    }
  }

  addMoreDataToGraph() {
   this.graphData?.data.push(
    [new Date("2008/05/10"), 90],
    [new Date("2008/05/11"), 95],
    [new Date("2008/05/12"), 100]
  );
   this.dygraph.updateOptions({'file': this.graphData?.data})
  }
}
