import { UserProps } from "../../domains";

export interface UserStateProps {
  ActionStatus: 'success' | 'error' | 'loading' | 'idle';
  credential?: UserProps;
}

export class UserState {
  public ActionStatus: 'success' | 'error' | 'loading' | 'idle';
  public credential?: UserProps;

  constructor(props: UserStateProps) {
    this.ActionStatus = props.ActionStatus;
    this.credential = props.credential;    
  }

  public getProps(): UserStateProps {
    return {
      ActionStatus: this.ActionStatus,
      credential: this.credential
    }
  }
}