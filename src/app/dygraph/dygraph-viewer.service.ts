import { Injectable } from '@angular/core';
import graphsData from './graph.mock';
import {of} from "rxjs";
import { GraphData } from './dygraph.typings';
import Dygraph from 'dygraphs';

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

  addMoreDataToGraph(graphId: number) {
    const data = graphsData.find(({id}) => id === graphId);

    let i = 0;
    for(var arr=[],dt=new Date(new Date("2008/05/10")); dt<=new Date(new Date("2023/05/30")); dt.setDate(dt.getDate()+1)){
       data?.data.push([new Date(dt), Math.random() + 80])
        i++;
    }

    return data;
  }
}
