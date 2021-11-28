import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsComponent } from './contacts.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IContact } from './IContact';
import { IContactState } from './state/IContactState';
import { By } from '@angular/platform-browser';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let store = MockStore;
  const initialState: IContactState = {
    currentContactId: null,
    contacts: [{
      id: 1,
      first_name: "The",
      last_name: "Dude",
      phone: "0664-000-0000",
      email: "the.dude@email.com",
      address: "Street 00 Vienna"
    }] as IContact[],
    error: ''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsComponent],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('container row column should exist', () => {
    expect(fixture.debugElement.queryAll(By.css('.container .row .col-md-4'))).toBeTruthy();
  });
});
