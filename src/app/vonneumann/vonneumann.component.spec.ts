import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VonneumannComponent } from './vonneumann.component';

describe('VonneumannComponent', () => {
  let component: VonneumannComponent;
  let fixture: ComponentFixture<VonneumannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VonneumannComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VonneumannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
