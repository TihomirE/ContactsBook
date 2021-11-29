import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppState from '../../state/app.state';
import { IContact } from '../IContact';
import { IContactState } from './IContactState';
import { _contacts } from './_contacts.enum';

export * as ContactActions from './contact.actions'
export * as ContactApiActions from './contact-api.actions'

// Extends the app state to include the contacts feature, here because of the lazy loading
export interface ContactsState extends AppState.State {
    contacts: IContactState;
}

// Selector functions
const getContactFeatureState = createFeatureSelector<IContactState>(_contacts.contacts);

export const getCurrentContactId = createSelector(
    getContactFeatureState,
    state => state.currentContactId
);

export const getCurrentContact = createSelector(
    getContactFeatureState,
    getCurrentContactId,
    (state, currentContactId) => {
        if (currentContactId === 0) {
            return {
                id: 0,
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                address: ''
            };
        }
        return currentContactId ? state.contacts.find(p => p.id === currentContactId) : null;
    }
);

export const getContacts = createSelector(
    getContactFeatureState,
    state => state.contacts
);

export const getError = createSelector(
    getContactFeatureState,
    state => state.error
);