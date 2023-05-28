import { UserState, UserStateProps } from "../store/user/user.state";

const userStateProps: UserStateProps = {
  actionStatus: "idle",
  credential: undefined,
  error: undefined,
}

export const userManagementInitialState = new UserState(userStateProps).getProps()

console.log('userManagementInitialState', userManagementInitialState);
