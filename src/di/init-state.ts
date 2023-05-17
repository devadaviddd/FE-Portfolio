import { UserState, UserStateProps } from "../store/user/user.state";

const userStateProps: UserStateProps = {
  ActionStatus: "idle",
}

export const userManagementInitialState = new UserState(userStateProps);

console.log('userManagementInitialState', userManagementInitialState);
