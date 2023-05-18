import React from 'react';
import { SignIn, SignUp } from '../pages';

type RoutePath = {
  path: string;
  element: JSX.Element;
};
export type RouteType = {
  public: Array<RoutePath>;
  private: Array<RoutePath>;
};

export const routePaths: RouteType = {
  public: [
    { path: "/", element: <SignIn/>},
    { path: "/signup", element: <SignUp/>},
    { path: "/signin", element: <SignIn/>},

  ],
  private: [],
};
