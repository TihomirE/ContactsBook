import { createReducer, on } from '@ngrx/store';
import { IContact } from '../IContact';
import { IContactState } from './IContactState';
import * as ContactApiActions from './contact-api.actions';
import * as ContactActions from './contact.actions';

const initialState: IContactState = {
    currentContactId: null,
    contacts: [] as IContact[],
    error: ''
};

export const contactReducer = createReducer<IContactState>(
    initialState,
    on(ContactApiActions.loadContactsSuccess, (state, action): IContactState => {
        return {
            ...state,
            contacts: action.contacts,
            error: ''
        };
    }),
    on(ContactApiActions.loadContactsFailure, (state, action): IContactState => {
        return {
            ...state,
            contacts: [] as IContact[],
            error: action.error
        };
    }),
    on(ContactActions.setCurrentContact, (state, action): IContactState => {
      return {
        ...state,
        currentContactId: action.currentContactId
      };
    }),
    on(ContactActions.initializeNewContact, (state): IContactState => {
      return {
        ...state,
        currentContactId: 0
      };
    }),
    // After a create, the currentContact is the new contact.
    on(ContactApiActions.createContactSuccess, (state, action): IContactState => {
      return {
        ...state,
        contacts: [...state.contacts, action.contact],
        currentContactId: action.contact.id,
        error: ''
      };
    }),
    on(ContactApiActions.createContactFailure, (state, action): IContactState => {
      return {
        ...state,
        error: action.error
      };
    })
)