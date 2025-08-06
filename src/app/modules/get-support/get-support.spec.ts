import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSupport } from './get-support';

describe('GetSupport', () => {
  let component: GetSupport;
  let fixture: ComponentFixture<GetSupport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSupport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSupport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
