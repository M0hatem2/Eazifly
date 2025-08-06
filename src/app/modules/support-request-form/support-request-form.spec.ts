import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequestForm } from './support-request-form';

describe('SupportRequestForm', () => {
  let component: SupportRequestForm;
  let fixture: ComponentFixture<SupportRequestForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportRequestForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportRequestForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
