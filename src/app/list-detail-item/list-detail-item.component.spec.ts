import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailItemComponent } from './list-detail-item.component';

describe('ListDetailItemComponent', () => {
  let component: ListDetailItemComponent;
  let fixture: ComponentFixture<ListDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDetailItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
