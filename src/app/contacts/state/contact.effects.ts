import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContactsService } from '../services/contacts.service';
import { ContactActions, ContactApiActions } from '.';

@Injectable()
export class ContactsEffects {

    constructor(private actions$: Actions, private contactsService: ContactsService) { }

    loadContacts$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(ContactActions.loadContacts),
                mergeMap(() => this.contactsService.getContacts()
                    .pipe(
                        map(contacts => ContactApiActions.loadContactsSuccess({ contacts })),
                        catchError(error => of(ContactApiActions.loadContactsFailure({ error })))
                    )
                )
            );
    });
}