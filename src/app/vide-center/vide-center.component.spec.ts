import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideCenterComponent } from './vide-center.component';

describe('VideCenterComponent', () => {
  let component: VideCenterComponent;
  let fixture: ComponentFixture<VideCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
