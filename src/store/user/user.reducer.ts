import { UserState } from ".";

export class UserReducer {
  reset () {
    return new UserState({
      actionStatus: "idle",
    })
  }
}