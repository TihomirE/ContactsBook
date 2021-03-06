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

  export const createContactSuccess = createAction(
    '[Contact API] Create Contact Success',
    props<{ contact: IContact }>()
  );
  
  export const createContactFailure = createAction(
    '[Contact API] Create Contact Fail',
    props<{ error: string }>()
  );