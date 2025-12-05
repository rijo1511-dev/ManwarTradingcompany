import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyMessageComponent } from './testimony-message.component';

describe('TestimonyMessageComponent', () => {
  let component: TestimonyMessageComponent;
  let fixture: ComponentFixture<TestimonyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonyMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
