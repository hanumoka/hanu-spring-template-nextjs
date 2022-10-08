// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import UserApi from "../api/UserApi";

interface AuthState {
  accessToken: Nullable<string>;
  userId: Nullable<number>,
  userEmail: Nullable<string>,
  loginAction: (email: string, password: string) => void;
  logoutAction: () => void;
  // increase: (by: number) => void;
}

const store = (set) => ({
  accessToken: null,
  userId: null,
  userEmail: null,
  // loginAction: async (email, password)  => {
  //   console.log(email, password);
  //   const res = await UserApi.signin(email, password);
  //   console.log(JSON.stringify(res));
  //   console.log(res.data.result);
  //   set({
  //     accessToken: res.data.result.accessToken
  //   });
  //
  //   return res.data.result.accessToken;
  // },
  //
  // logoutAction: () =>
  //   set({
  //     accessTokens: null,
  //     userId: null,
  //     userEmail: null
  //   })
});

const useAuthStore = create<AuthState>()(
  process.env.NODE_ENV !== "production" ? devtools(
    persist(store, {
      name: "auth-store"
    })
  ) : store
);

export default useAuthStore;