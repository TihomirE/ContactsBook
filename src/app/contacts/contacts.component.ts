import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from './IContact';
import { Store } from '@ngrx/store';
import { ContactsState, getContacts, ContactActions, getError, getCurrentContact } from './state';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<IContact[]> | undefined;
  errorMessage$: Observable<string> | undefined;
  selectedContact$!: Observable<IContact | null | undefined>;

  constructor(private store: Store<ContactsState>) { }

  contactSelected(contact: IContact): void {
    this.store.dispatch(ContactActions.setCurrentContact({ currentContactId: contact.id }));
  }

  ngOnInit(): void {
    this.contacts$ = this.store.select(getContacts);

    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ContactActions.loadContacts());

    this.selectedContact$ = this.store.select(getCurrentContact);
  }

}
