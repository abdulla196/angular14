import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BogDetailsComponent } from './bog-details.component';

describe('BogDetailsComponent', () => {
  let component: BogDetailsComponent;
  let fixture: ComponentFixture<BogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BogDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
