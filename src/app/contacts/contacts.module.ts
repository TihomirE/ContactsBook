import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactsComponent } from "./contacts.component";

const contactsRoutes: Routes = [
    { path: '', component: ContactsComponent }
]

@NgModule({
    declarations: [
        ContactsComponent,
        ContactListComponent,
        ContactDetailsComponent
    ],
    imports: [
        RouterModule.forChild(contactsRoutes),
        StoreModule.forFeature('contacts', {})
    ]
})
export class ContactsModule { }