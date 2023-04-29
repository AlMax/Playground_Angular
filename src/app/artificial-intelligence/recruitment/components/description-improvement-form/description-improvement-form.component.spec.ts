import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionImprovementFormComponent } from './description-improvement-form.component';

describe('DescriptionImprovementFormComponent', () => {
  let component: DescriptionImprovementFormComponent;
  let fixture: ComponentFixture<DescriptionImprovementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionImprovementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionImprovementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
