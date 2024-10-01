import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTypeHeadComponent } from './search-type-head.component';

describe('SearchTypeHeadComponent', () => {
  let component: SearchTypeHeadComponent;
  let fixture: ComponentFixture<SearchTypeHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTypeHeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchTypeHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
