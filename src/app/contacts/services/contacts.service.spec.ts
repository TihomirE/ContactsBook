import { TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactsService } from './contacts.service';
import { IContact } from '../IContact';

describe('ContactsService', () => {
  let service: ContactsService;

  const contact: IContact = {
      id: 0,
      first_name: "Test",
      last_name: "Test",
      phone: "0664-000-0000",
      email: "test@email.com",
      address: "Street 00 Vienna"
    } as IContact;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ContactsService]
    });
    service = TestBed.inject(ContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get contacts (observable) value", fakeAsync((done: DoneFn) => {
    service
      .getContacts()
      .subscribe(value => {
        expect(value.length).not.toBeUndefined();
        expect(value.length).not.toBeNaN();
        expect(value.length).not.toBeNull();
        done();
      });
  }));
  it("should create contact", fakeAsync((done: DoneFn) => {
    service
      .createContact(contact)
      .subscribe(value => {
        expect(value.id).not.toBeNull();
        expect(value.first_name).not.toBeNull();
        expect(value.last_name).not.toBeNull();
        expect(value.phone).not.toBeNull();
        expect(value.email).not.toBeNull();
        expect(value.address).not.toBeNull();
        done();
      });
  }));

});
