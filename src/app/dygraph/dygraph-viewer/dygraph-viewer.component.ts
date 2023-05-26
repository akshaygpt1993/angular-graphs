import { Component, AfterViewInit, ElementRef, ViewChild, Input, OnChanges } from '@angular/core';
import Dygraph from 'dygraphs';

@Component({
  selector: 'app-dygraph-viewer',
  templateUrl: './dygraph-viewer.component.html',
  styleUrls: ['./dygraph-viewer.component.css']
})
export class DygraphViewerComponent implements OnChanges {
  @Input() width ?= 500; 

  @ViewChild('dygraphsdiv') public chart?: ElementRef;
  
  dygraph: any;

  data = [[new Date("2008/05/07"), 75],
    [new Date("2008/05/08"), 70],
    [new Date("2008/05/09"), 80]
  ];
  options = {
    labels: ['Date','Temperature'],
    // xlabel: 'X label text',
    // ylabel: 'Y label text',
    // title: 'Working title :)',
    animatedZooms: true,
    pointSize: 4,
    width: this.width,
    height: 300,
  };


  ngOnChanges(): void {
    this.options = {
      ...this.options,
      width: this.width,
    }
    console.log(this.options, "options", this.width);

    setTimeout(() => {
      this.dygraph = new Dygraph(this.chart?.nativeElement,
        this.data,
        this.options
      );
    }, 500);
  }
}
