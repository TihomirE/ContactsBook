import { createReducer, on } from '@ngrx/store';
import { IContact } from '../IContact';
import { IContactState } from './IContactState';
import * as ContactApiActions from './contact-api.actions'

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
    })
)