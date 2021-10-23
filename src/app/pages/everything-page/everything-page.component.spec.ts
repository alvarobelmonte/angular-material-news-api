import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingPageComponent } from './everything-page.component';

describe('EverythingPageComponent', () => {
  let component: EverythingPageComponent;
  let fixture: ComponentFixture<EverythingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverythingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EverythingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
