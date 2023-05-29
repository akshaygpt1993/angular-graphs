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

  @Input() graphData?: any;
  @Input() graphData$?: Observable<any>;
  ngOnInit(): void {
    this.graphData$?.subscribe(graphData => {
      this.graphData = graphData,
      console.log(this.currentWidth, this.graphData, "this.graphData.subscribed", this.graphData?.options.width);
      this.checkAndResizeWidth()
    })
  }
  @Input() graphId: any;

  checkAndResizeWidth() {
    if (this.currentWidth !== this.graphData?.options.width) {
      this.currentWidth = this.graphData?.options.width;
      this.dygraph?.resize(this.currentWidth);
    }
  }

  ngOnChanges(): void {
    console.log(this.currentWidth, this.graphData, "this.graphData onchange", this.graphData?.options.width);

    if (!this.graphData && this.graphId) {
      this.graphData = this.dyGraphService.getGraphData(this.graphId)
    }

    setTimeout(() => {
      if (this.graphData) {
        this.dygraph = new Dygraph(this.chart?.nativeElement,
          this.graphData.data,
          this.graphData.options
        );

        this.checkAndResizeWidth()
      }
      
    }, 500);
  }
}
