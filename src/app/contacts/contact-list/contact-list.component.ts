import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IContact } from '../IContact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {

  @Input() contacts: IContact[] | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
