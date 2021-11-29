import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
      // Reset the form back to pristine
      this.contactForm.reset();
      // set appropriate title
      this.setTitle(contact.id);
      // Update the data on the form
      this.patchForm(contact);
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

  // TODO >> as the same form will be used for data show and add new
  saveContact() {}

  ngOnChanges(changes: SimpleChanges): void {
    // patch form with value from the store
    if (changes['selectedContact']) {
      const contact = changes['selectedContact'].currentValue as IContact;
      this.displayContact(contact);
    }
  }

}
