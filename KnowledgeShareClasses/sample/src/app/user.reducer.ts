import { state } from "@angular/animations"
import { createReducer, on } from "@ngrx/store"
import { getUsers, setUsers } from "./user.action"

let initialState = {
    users:[]
}

export const usersReducer = createReducer(
    initialState,
    on(setUsers,(state,{users})=>{
        return {...state, users}
    }),
    on(getUsers,(state)=>{
        return {...state}
    })
)