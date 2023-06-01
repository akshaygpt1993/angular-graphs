import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DygraphViewerComponent } from './dygraph-viewer.component';
import { DygraphViewerService } from '../dygraph-viewer.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('DygraphViewerComponent', () => {
  let component: DygraphViewerComponent;
  let fixture: ComponentFixture<DygraphViewerComponent>;

  class MockDygraphViewerService {

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DygraphViewerComponent ],
      providers: [
        {provide: DygraphViewerService, useClass: MockDygraphViewerService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DygraphViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Add Data button', () => {
    const graphElement: HTMLElement = fixture.nativeElement;
    expect(graphElement.textContent).toContain("Add Data");
  });

  it('should contain Change Type button', () => {
    const graphElement: HTMLElement = fixture.nativeElement;
    expect(graphElement.textContent).toContain("Change Type");
  });

  it('should have 2 buttons with title Add Data ad Change Type', () => {
    const graphElement: DebugElement = fixture.debugElement;
    const buttonElement = graphElement.queryAll(By.css('button'));

    expect(buttonElement[0].nativeElement.textContent).toEqual("Add Data");
    expect(buttonElement[1].nativeElement.textContent).toEqual("Change Type");
  });

  it('should have a div graph',  () => {
    const graphElement: DebugElement = fixture.debugElement;
    const graphDiv = graphElement.query(By.css('#dygraphsdiv'));

    expect(graphDiv).toBeTruthy();
  });
});
