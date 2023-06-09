import { useEffect, useState } from "react";
import { SignInDto } from "../domains";
import { useUserSlice } from "../store";
import { useAppDispatch, useAppSelector } from "./redux.hook";

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  const { actions } = useUserSlice();
  const { actionStatus, error } = useAppSelector((state) => state.user);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastSeverity, setToastSeverity] = useState<
    "error" | "success" | "info" | "warning"
  >("info");


  useEffect(() => {
    return () => {
      dispatch(actions.reset());
      console.log('error after reset', error);
      console.log('actionStatus after reset', actionStatus);
    };
  }, []);


  useEffect(() => {
    if (actionStatus === "success") {
      setToastMessage("Sign in successfully");
      setToastSeverity("success");
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setShowToast(false);
    }
    
    if (error) {
      setToastMessage("Wrong Credentials");
      setToastSeverity("error");
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setShowToast(false);
    }
  }, [actionStatus, error]);

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
    actionStatus,
    error,
    showToast,
    toastMessage,
    toastSeverity,
  }
}