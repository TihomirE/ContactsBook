import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card .card-header .row .col-md-8')?.textContent).toContain('Contacts list');
  });
  it('button Add should exist', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('#add_button');
    expect(compiled.innerHTML).toContain('Add');
  });
  it('should render table head text', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('#first_name');
    expect(compiled.innerHTML).toContain('First Name');
  });
  // it('should have one contact in list', () => {
  //   const compiled = fixture.debugElement.nativeElement.querySelector('#contacts');
  //   expect(compiled.length).toBe(1);
  // });
});
