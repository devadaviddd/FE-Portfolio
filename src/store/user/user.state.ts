import { ErrorResponse, UserProps } from "../../domains";

export interface UserStateProps {
  actionStatus: 'success' | 'error' | 'loading' | 'idle';
  credential?: UserProps;
  error?: ErrorResponse;
}

export class UserState {
  public actionStatus: 'success' | 'error' | 'loading' | 'idle';
  public credential?: UserProps;
  public error?: ErrorResponse;

  constructor(props: UserStateProps) {
    this.actionStatus = props.actionStatus;
    this.credential = props.credential;    
    this.error = props.error;
  }

  public getProps(): UserStateProps {
    return {
      actionStatus: this.actionStatus,
      credential: this.credential,
      error: this.error,
    }
  }
}