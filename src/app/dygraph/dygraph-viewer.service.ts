import { Injectable } from '@angular/core';
import graphsData from './graph.mock';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DygraphViewerService {
  constructor() { }

  getGraphData(graphId: number, width?: number) {
    const data = graphsData.find(({id}) => id === graphId);
    return of({...data, options: { ...data?.options, width: width }});
  }

  getNonObservableGraphData(graphId: number, width?: number) {
    const data = graphsData.find(({id}) => id === graphId);
    return {...data, options: { ...data?.options, width: width }};
  }
}
