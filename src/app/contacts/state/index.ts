import * as AppState from '../../state/app.state';
import { IContactState } from './IContactState';

// Extends the app state to include the contacts feature.
// This is required because contacts are lazy loaded.
// So the reference to ContactState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
    contacts: IContactState;
}