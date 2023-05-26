import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DygraphViewerComponent } from './dygraph-viewer/dygraph-viewer.component';



@NgModule({
  declarations: [
    DygraphViewerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DygraphViewerComponent
  ]
})
export class DygraphModule { }
