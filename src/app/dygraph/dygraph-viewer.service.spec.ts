import { TestBed } from '@angular/core/testing';

import { DygraphViewerService } from './dygraph-viewer.service';

describe('DygraphViewerService', () => {
  let service: DygraphViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DygraphViewerService] });
    service = TestBed.inject(DygraphViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getGraphData should return observables of Graph Data',  (done: DoneFn) => {
    service.getGraphData(1).subscribe(value => {
      expect(value.id).toBe(1);
      expect(value.data.length).toBe(0);

      done();
    })
  })

  it('#getNonObservableGraphData should return observables of Graph Data',  () => {
    const value = service.getNonObservableGraphData(2);

    expect(value.id).toBe(2);
    expect(value.data.length).toBe(3);
  })
});
