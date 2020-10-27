import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDrawerComponent } from './line-drawer.component';

describe('LineDrawerComponent', () => {
  let component: LineDrawerComponent;
  let fixture: ComponentFixture<LineDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
