import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getComments, getUsers, setComments, setUsers } from "./user.action";
import { UserService } from "./user.service";
import { switchMap, map, catchError } from "rxjs/operators"
import { EMPTY } from "rxjs";


@Injectable()
export class userEffect {
    constructor(private us: UserService, private action$: Actions) { }

    fetchUsers$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(getUsers),
                switchMap(() =>
                    this.us.getUsers().pipe(
                        map(data =>
                            setUsers({ users: data })
                        ),
                        catchError(() => EMPTY)
                    )
                )
            )
        }
    )

    fetchComments$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(getComments),
                switchMap(() =>
                    this.us.getComments().pipe(
                        map(data =>
                            setComments({ comment: data })
                        ),
                        catchError(() => EMPTY)
                    )
                )
            )
        }
    )
}