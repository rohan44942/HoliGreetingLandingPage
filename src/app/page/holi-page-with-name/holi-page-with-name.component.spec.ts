import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoliPageWithNameComponent } from './holi-page-with-name.component';

describe('HoliPageWithNameComponent', () => {
  let component: HoliPageWithNameComponent;
  let fixture: ComponentFixture<HoliPageWithNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoliPageWithNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoliPageWithNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
