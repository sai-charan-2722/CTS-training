import { createAction,props } from "@ngrx/store";

export const setUsers = createAction('set-users',props<{users:any[]}>());

export const getUsers = createAction('get-users');

export const getComments = createAction('get-comments');

export const setComments = createAction('set-comments',props<{comment:{}}>());