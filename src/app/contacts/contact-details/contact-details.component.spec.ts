import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IContact } from '../IContact';

import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;

    component.selectedContact = {
      id: 0,
      first_name: "Test",
      last_name: "Test",
      phone: "0664-000-0000",
      email: "test@email.com",
      address: "Street 00 Vienna"
    } as IContact;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render card', () => {
    const debugElement = fixture.debugElement;
    expect(debugElement.query(By.css('.card .card-header')).nativeElement).toBeTruthy();
  });
  it('should render card (component) title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card .card-header')?.textContent).toContain('Contact details');
  });
  it('form label First Name should exist', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('#firstNameLabel');
    expect(compiled.innerHTML).toContain('First Name');
  });
  it('form label Last Name should exist', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('#lastNameLabel');
    expect(compiled.innerHTML).toContain('Last Name');
  });
  it('form label Phone should exist', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('#phoneLabel');
    expect(compiled.innerHTML).toContain('Phone #');
  });
  it('form label First Name should exist', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('#emailLabel');
    expect(compiled.innerHTML).toContain('Email');
  });
  it('form label First Name should exist', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('#addressLabel');
    expect(compiled.innerHTML).toContain('Address');
  });
  it('should have Save in "Save Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#submitButton');
    expect(btn.innerHTML).toBe('Save');
  });
});
