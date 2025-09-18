import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailHolder } from './email-holder.component';

describe('EmailHolder', () => {
  let component: EmailHolder;
  let fixture: ComponentFixture<EmailHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailHolder],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailHolder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
