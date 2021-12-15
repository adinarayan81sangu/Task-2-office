import { TestBed } from '@angular/core/testing';

import { QuizsharedService } from './quizshared.service';

describe('QuizsharedService', () => {
  let service: QuizsharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizsharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
