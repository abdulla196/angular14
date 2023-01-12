import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatPayComponent } from './what-pay.component';

describe('WhatPayComponent', () => {
  let component: WhatPayComponent;
  let fixture: ComponentFixture<WhatPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
