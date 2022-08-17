import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlanturingComponent } from './alanturing.component';

describe('AlanturingComponent', () => {
  let component: AlanturingComponent;
  let fixture: ComponentFixture<AlanturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlanturingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlanturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
