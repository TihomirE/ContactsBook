import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IContact } from '../IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactsUrl = 'api/contacts';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.contactsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createContact(contact: IContact): Observable<IContact> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Contact Id must be null for the Web API to assign an Id
    const newContact = { ...contact, id: null };
    return this.http.post<IContact>(this.contactsUrl, newContact, { headers })
      .pipe(
        tap(data => console.log('createContact: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }


  // basic error handling (logging) 
  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // client-side or network error occurred
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // backend returned an unsuccessful response code
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => new Error(errorMessage));
  }
}
