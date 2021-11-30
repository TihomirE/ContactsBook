import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IContact } from '../IContact';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent implements OnChanges {

  title = 'Contact details';

  @Input() selectedContact: IContact | null | undefined;

  @Output() createContact = new EventEmitter<IContact>();

  // initializing the form here
  contactForm: FormGroup = this.fb.group({
    first_name: [{ value: '', disabled: true }],
    last_name: [{ value: '', disabled: true }],
    phone: [{ value: '', disabled: true }],
    email: [{ value: '', disabled: true }],
    address: [{ value: '', disabled: true }],
  });

  constructor(private fb: FormBuilder) { }

  displayContact(contact: IContact | null): void {
    if (contact && this.contactForm) {
      this.dynamicFormReset(contact);
      // set appropriate title
      this.setTitle(contact.id);
      // Update the data on the form
      this.patchForm(contact);
    }
  }

  dynamicFormReset(contact: IContact) {
    // Reset the form back to pristine and controls to disabled
    this.contactForm.reset();
    this.contactForm.disable();
    if (contact.id === 0) {
      // enable inputs if new user
      this.contactForm.controls['first_name'].enable();
      this.contactForm.controls['last_name'].enable();
      this.contactForm.controls['phone'].enable();
      this.contactForm.controls['email'].enable();
      this.contactForm.controls['address'].enable();
    }
  }

  setTitle(contactId: number) {
    this.title = contactId === 0 ? 'Add new contact' : 'Contact details'
  }

  patchForm(contact: IContact) {
    this.contactForm.patchValue({
      first_name: contact.first_name,
      last_name: contact.last_name,
      phone: contact.phone,
      email: contact.email,
      address: contact.address
    });
  }

  saveContact() {
    // This ensures values not on the form, such as the Id, are retained
    const contact = { ...this.selectedContact, ...this.contactForm.value };

    this.createContact.emit(contact);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // patch form with value from the store
    if (changes['selectedContact']) {
      const contact = changes['selectedContact'].currentValue as IContact;
      this.displayContact(contact);
    }
  }

}
