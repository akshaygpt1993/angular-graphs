import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DygraphViewerComponent } from './dygraph-viewer.component';

describe('DygraphViewerComponent', () => {
  let component: DygraphViewerComponent;
  let fixture: ComponentFixture<DygraphViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DygraphViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DygraphViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
