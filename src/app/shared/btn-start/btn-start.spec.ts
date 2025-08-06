import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnStart } from './btn-start';

describe('BtnStart', () => {
  let component: BtnStart;
  let fixture: ComponentFixture<BtnStart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnStart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnStart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
