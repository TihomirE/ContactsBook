import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContactsService } from '../services/contacts.service';
import { ContactActions, ContactApiActions } from '.';
import { IContact } from '../IContact';

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

    createContact$ = createEffect(() => {
        return this.actions$
          .pipe(
            ofType(ContactActions.createContact),
            concatMap(action =>
              this.contactsService.createContact(action.contact)
                .pipe(
                  map((contact: IContact) => ContactApiActions.createContactSuccess({ contact })),
                  catchError(error => of(ContactApiActions.createContactFailure({ error })))
                )
            )
          );
      });
}