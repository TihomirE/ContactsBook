import { IContact } from "../IContact";
import { createAction, props } from '@ngrx/store';

export const loadContactsSuccess = createAction(
    '[Contact API] Load Success',
    props<{ contacts: IContact[] }>()
  );
  
  export const loadContactsFailure = createAction(
    '[Contact API] Load Fail',
    props<{ error: string }>()
  );