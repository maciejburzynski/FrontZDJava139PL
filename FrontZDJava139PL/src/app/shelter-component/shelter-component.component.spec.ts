import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterComponentComponent } from './shelter-component.component';

describe('ShelterComponentComponent', () => {
  let component: ShelterComponentComponent;
  let fixture: ComponentFixture<ShelterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShelterComponentComponent]
    });
    fixture = TestBed.createComponent(ShelterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
