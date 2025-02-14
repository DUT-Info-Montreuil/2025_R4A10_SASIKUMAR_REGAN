import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhSectionComponent } from './vh-section.component';

describe('Section1Component', () => {
  let component: VhSectionComponent;
  let fixture: ComponentFixture<VhSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VhSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VhSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
