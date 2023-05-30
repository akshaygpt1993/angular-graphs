import { Injectable } from '@angular/core';
import graphsData from './graph.mock';
import {of} from "rxjs";
import { GraphData } from './dygraph.typings';
import Dygraph from 'dygraphs';

@Injectable({
  providedIn: 'root'
})
export class DygraphViewerService {
  constructor() { }

  graphCanvasRef?: any;

  setGraphCanvasRef(ref: any) {
    this.graphCanvasRef = ref;
  }

  drawVerticalLineOnCanvas(g: Dygraph, clickedPoint: number) {
    if (this.graphCanvasRef) {
      this.graphCanvasRef.strokeStyle = 'red';
        var canvasx = g.toDomXCoord(clickedPoint);
        var range = g.yAxisRange();
        this.graphCanvasRef.beginPath();
        this.graphCanvasRef.moveTo(canvasx, g.toDomYCoord(range[0]));
        this.graphCanvasRef.lineTo(canvasx, g.toDomYCoord(range[1]));
        this.graphCanvasRef.stroke();
        this.graphCanvasRef.closePath();
    }
  }

  getGraphData(graphId: number, width?: number) {
    const data = graphsData.find(({id}) => id === graphId);
    return of({...data, options: { ...data?.options, width: width }} as GraphData);
  }

  getNonObservableGraphData(graphId: number, width?: number) {
    const data = graphsData.find(({id}) => id === graphId);
    return {...data, options: { ...data?.options, width: width }} as GraphData;
  }
}
