import { IContact } from "../IContact";

export interface IContactState {
    currentContactId: number | null;
    contacts: IContact[];
    error: string;
}