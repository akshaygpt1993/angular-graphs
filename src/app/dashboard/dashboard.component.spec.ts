import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { DashboardComponent } from './dashboard.component';
import { DygraphViewerService } from '../dygraph/dygraph-viewer.service';
import { DygraphViewerComponent } from '../dygraph/dygraph-viewer/dygraph-viewer.component';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, DygraphViewerComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
      ],
      providers: [DygraphViewerService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should have title Data Viewer', () => {
    const element: DebugElement  = fixture.debugElement;
    const titleInstance = element.query(By.css(".mat-h1"));

    expect(titleInstance.nativeElement.textContent).toEqual("Data Viewer");
  });

  it('should have 3 graph viewer components', () => {
    const element: DebugElement  = fixture.debugElement;
    const viewerInstances = element.queryAll(By.css("app-dygraph-viewer"));

    expect(viewerInstances.length).toEqual(3);
  });
});
