import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntscheidungsproblemComponent } from './entscheidungsproblem.component';

describe('EntscheidungsproblemComponent', () => {
  let component: EntscheidungsproblemComponent;
  let fixture: ComponentFixture<EntscheidungsproblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntscheidungsproblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntscheidungsproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
