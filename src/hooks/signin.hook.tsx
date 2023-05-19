import { SignInDto } from "../domains";
import { useUserSlice } from "../store";
import { useAppDispatch, useAppSelector } from "./redux.hook";

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  const { actions } = useUserSlice();
  const { actionStatus } = useAppSelector((state) => state.user);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const input: SignInDto = {
      email: data.get("email") as string,
      password: data.get("password") as string,
    }
    dispatch(actions.signIn(input));
  };


  return {
    handleSubmit,
  }
}