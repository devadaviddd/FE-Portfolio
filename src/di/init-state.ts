import { UserState, UserStateProps } from "../store/user/user.state";

const userStateProps: UserStateProps = {
  actionStatus: "idle",
}

export const userManagementInitialState = new UserState(userStateProps);

console.log('userManagementInitialState', userManagementInitialState);
