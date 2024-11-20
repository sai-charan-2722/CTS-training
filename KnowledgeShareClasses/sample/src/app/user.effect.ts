import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getUsers, setUsers } from "./user.action";
import { UserService } from "./user.service";
import { switchMap, map, catchError } from "rxjs/operators"
import { EMPTY } from "rxjs";


@Injectable()
export class userEffect {
    constructor(private us: UserService, private action$: Actions) {
        console.log("1", action$)
    }

    fetchUsers$ = createEffect(
        () => {
            console.log(this.action$)
            return this.action$.pipe(
            ofType(getUsers),
            switchMap(() =>
                    this.us.getUsers().pipe(
                    map(data =>
                        setUsers({ users: data })
                    ),
                    catchError(()=>EMPTY)
                )
            )
        )
        })
}