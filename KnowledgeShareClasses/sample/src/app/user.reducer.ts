import { state } from "@angular/animations"
import { createReducer, on } from "@ngrx/store"
import { setComments, setUsers } from "./user.action"

let initialState = {
    users:[],
    comment:{}
}

export const usersReducer = createReducer(
    initialState,
    on(setUsers,(state,{users})=>{
        return {...state, users}
    }),
    on(setComments,(state,{comment})=>{
        return {...state, comment}
    })
)