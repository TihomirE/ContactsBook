import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IContact } from '../contacts/IContact';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts: IContact[] = [
      {
        id: 1,
        first_name: "The",
        last_name: "Dude",
        phone: "0664-000-0000",
        email: "the.dude@email.com",
        address: "Street 00 Vienna"
      },
      {
        id: 2,
        first_name: "Walter",
        last_name: "Sobchak",
        phone: "0664-111-1111",
        email: "walter.sobchak@email.com",
        address: "Street 11 Vienna"
      },
      {
        id: 3,
        first_name: "Danny",
        last_name: "Kerabatsos",
        phone: "0664-222-2222",
        email: "Danny.Kerabatsos@email.com",
        address: "Street 22 Vienna"
      },
      {
        id: 4,
        first_name: "Maude",
        last_name: "Lebowski",
        phone: "0664-333-3333",
        email: "maude.lebowski@email.com",
        address: "Street 33 Vienna"
      },
      {
        id: 5,
        first_name: "Uli",
        last_name: "Kunkel",
        phone: "0664-444-4444",
        email: "uli.kunkel@email.com",
        address: "Street 44 Vienna"
      }
    ];
    return { contacts };
  }
}