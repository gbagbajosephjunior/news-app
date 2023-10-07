import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerythingComponent } from './verything.component';

describe('VerythingComponent', () => {
  let component: VerythingComponent;
  let fixture: ComponentFixture<VerythingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerythingComponent]
    });
    fixture = TestBed.createComponent(VerythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
