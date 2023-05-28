import { useEffect, useState } from "react";
import { CreateUserDto } from "../domains";
import { useUserSlice } from "../store";
import { useAppDispatch, useAppSelector } from "./redux.hook";

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  const { actions } = useUserSlice();
  const { actionStatus, error } = useAppSelector((state) => state.user);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastSeverity, setToastSeverity] = useState<
    "error" | "success" | "info" | "warning"
  >("info");

  useEffect(() => {
    console.log("error", error);
  })

  useEffect(() => {
    if (actionStatus === "success") {
      setToastMessage("Sign up successfully");
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
      setToastMessage(error.message);
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


  useEffect(() => {
    return () => {
      dispatch(actions.reset());
      console.log("error after reset", error);
      console.log("actionStatus after reset", actionStatus);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fullName: data.get("fullName"),
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    });
    const input: CreateUserDto = {
      fullName: data.get("fullName") as string,
      username: data.get("username") as string,
      email: data.get("email") as string,
      password: data.get("password") as string,
    };
    dispatch(actions.signUp(input));
  };

  return {
    handleSubmit,
    actionStatus,
    error,
    showToast,
    toastMessage,
    toastSeverity,
  };
};
