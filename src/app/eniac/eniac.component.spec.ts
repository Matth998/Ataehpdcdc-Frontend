import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniacComponent } from './eniac.component';

describe('EniacComponent', () => {
  let component: EniacComponent;
  let fixture: ComponentFixture<EniacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
