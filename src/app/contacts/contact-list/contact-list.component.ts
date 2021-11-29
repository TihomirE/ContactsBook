import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact } from '../IContact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {

  @Input() contacts: IContact[] | null | undefined;
  @Input() selectedContact: IContact | null | undefined;

  @Output() contactWasSelected = new EventEmitter<IContact>();

  contactSelected(contact: IContact): void {
    this.contactWasSelected.emit(contact);
  }

}
