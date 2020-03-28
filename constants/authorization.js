// Utilities
import Router from "next/router";

const google_authorization = {
  key: "covid19to.api.token"
};

const is_authorized = () =>
  typeof window !== "undefined" &&
  localStorage.getItem(google_authorization.key);

const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(google_authorization.key);
    Router.push("/login");
  }
};

export { google_authorization, is_authorized, logout };
