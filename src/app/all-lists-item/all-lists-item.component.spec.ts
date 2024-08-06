import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListsItemComponent } from './all-lists-item.component';

describe('AllListsItemComponent', () => {
  let component: AllListsItemComponent;
  let fixture: ComponentFixture<AllListsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllListsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllListsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
