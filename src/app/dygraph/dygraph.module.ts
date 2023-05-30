import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DygraphViewerComponent } from './dygraph-viewer/dygraph-viewer.component';
import { DygraphViewerService } from './dygraph-viewer.service';

@NgModule({
  declarations: [
    DygraphViewerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DygraphViewerComponent
  ],
  providers: [
    DygraphViewerService
  ]
})
export class DygraphModule { }
