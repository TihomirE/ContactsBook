import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from './IContact';
import { Store } from '@ngrx/store';
import { ContactsState, getContacts, ContactActions } from './state';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<IContact[]> | undefined;

  constructor(private store: Store<ContactsState>) { }

  ngOnInit(): void {
    this.contacts$ = this.store.select(getContacts);

    this.store.dispatch(ContactActions.loadProducts());
  }

}
