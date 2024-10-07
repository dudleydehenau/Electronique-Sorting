import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantsComponent } from './composants.component';

describe('ComposantsComponent', () => {
  let component: ComposantsComponent;
  let fixture: ComponentFixture<ComposantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComposantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
