import { TestBed } from '@angular/core/testing';

import { DygraphViewerService } from './dygraph-viewer.service';

describe('DygraphViewerService', () => {
  let service: DygraphViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DygraphViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
