import React from 'react';
import { SignUp } from '../pages';

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
    { path: "/", element: <></>},
    { path: "/signup", element: <SignUp/>},
  ],
  private: [],
};
