import { createAction, props } from '@ngrx/store';

export const loadContacts = createAction(
  '[Contacts Page] Load'
);

export const setCurrentContact = createAction(
  '[Contacts Page] Set Current Contact',
  props<{ currentContactId: number }>()
);