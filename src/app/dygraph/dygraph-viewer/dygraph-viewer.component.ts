import { Component, AfterViewInit, ElementRef, ViewChild, Input, OnChanges } from '@angular/core';
import Dygraph from 'dygraphs';

@Component({
  selector: 'app-dygraph-viewer',
  templateUrl: './dygraph-viewer.component.html',
  styleUrls: ['./dygraph-viewer.component.css']
})
export class DygraphViewerComponent implements OnChanges {
  @Input() graphData: any;

  @ViewChild('dygraphsdiv') public chart?: ElementRef;
  
  dygraph: any;


  ngOnChanges(): void {
    setTimeout(() => {
      this.dygraph = new Dygraph(this.chart?.nativeElement,
        this.graphData.data,
        this.graphData.options
      );
    }, 500);
  }
}
