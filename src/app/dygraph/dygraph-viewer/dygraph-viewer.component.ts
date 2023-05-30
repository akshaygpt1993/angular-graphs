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

  generateGraph(dygraphService: DygraphViewerService) {
    setTimeout(() => {
      console.log(this.graphData, "this.graphData")
      if (this.graphData) {
        this.dygraph = new Dygraph(this.chart?.nativeElement,
          this.graphData.data,
         {
          ...this.graphData.options,
          pointClickCallback: (event, points) => {
            if (points.xval) {
              dygraphService?.drawVerticalLineOnCanvas(this.dygraph, points.xval)
            }
          },
          underlayCallback: function(canvas, area, g) {
            dygraphService?.setGraphCanvasRef(canvas);
          }
        },
        );
      }
    }, 500);
  }

  ngOnChanges(): void {
    if (this.currentGraphType !== this.graphType) {
      this.currentGraphType = this.graphType;

      this.generateGraph(this.dyGraphService);
    }

    this.fetchGraphDatIfRequired();

    if (this.dygraph) {
      this.checkAndResizeWidth();
    } else {
      this.generateGraph(this.dyGraphService);
    }
  }

  addMoreDataToGraph() {
    let i = 0;
    for(var arr=[],dt=new Date(new Date("2008/05/10")); dt<=new Date(new Date("2023/05/30")); dt.setDate(dt.getDate()+1)){
        this.graphData?.data.push([new Date(dt), Math.random() + 80])
        i++;
    }

   this.dygraph.updateOptions({'file': this.graphData?.data})
  }
}
