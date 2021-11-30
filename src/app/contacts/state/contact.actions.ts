import { createAction, props } from '@ngrx/store';
import { IContact } from '../IContact';

export const loadContacts = createAction(
  '[Contacts Page] Load'
);

export const setCurrentContact = createAction(
  '[Contacts Page] Set Current Contact',
  props<{ currentContactId: number }>()
);

export const initializeNewContact = createAction(
  '[Contacts Page] Initialize New Contact'
);

export const createContact = createAction(
  '[Contacts Page] Create Contact',
  props<{ contact: IContact }>()
);