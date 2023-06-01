import { Injectable } from '@angular/core';
import graphsData from './graph.mock';
import {of} from "rxjs";
import { GraphData } from './dygraph.typings';

@Injectable()
export class DygraphViewerService {
  constructor() { }

  getGraphData(graphId: number, width?: number) {
    const data = graphsData.find(({id}) => id === graphId);
    return of({...data, options: { ...data?.options, width: width }} as GraphData);
  }

  getNonObservableGraphData(graphId: number, width?: number) {
    const data = graphsData.find(({id}) => id === graphId);
    return {...data, options: { ...data?.options, width: width }} as GraphData;
  }
}
