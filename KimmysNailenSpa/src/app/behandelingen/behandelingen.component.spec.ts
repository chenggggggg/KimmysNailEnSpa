import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehandelingenComponent } from './behandelingen.component';

describe('BehandelingenComponent', () => {
  let component: BehandelingenComponent;
  let fixture: ComponentFixture<BehandelingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehandelingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehandelingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
