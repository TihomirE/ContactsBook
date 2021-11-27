import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactsComponent } from "./contacts.component";
import { contactReducer } from "./state/contact.reducer";
import { _contacts } from "./state/_contacts.enum";
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from "./state/contact.effects";

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
        CommonModule,
        RouterModule.forChild(contactsRoutes),
        StoreModule.forFeature(_contacts.contacts, contactReducer),
        EffectsModule.forFeature([ContactsEffects])
    ]
})
export class ContactsModule { }