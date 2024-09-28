import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RndMiscComponent } from './rnd-misc.component';

describe('RndMiscComponent', () => {
  let component: RndMiscComponent;
  let fixture: ComponentFixture<RndMiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RndMiscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RndMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
