import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSearchFormComponent } from './general-search-form.component';

describe('GeneralSearchFormComponent', () => {
  let component: GeneralSearchFormComponent;
  let fixture: ComponentFixture<GeneralSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
