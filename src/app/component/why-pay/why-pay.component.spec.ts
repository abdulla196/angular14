import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyPayComponent } from './why-pay.component';

describe('WhyPayComponent', () => {
  let component: WhyPayComponent;
  let fixture: ComponentFixture<WhyPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
