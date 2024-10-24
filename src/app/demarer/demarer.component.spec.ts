import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemarerComponent } from './demarer.component';

describe('DemarerComponent', () => {
  let component: DemarerComponent;
  let fixture: ComponentFixture<DemarerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemarerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemarerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
