// Utilities
import Router from "next/router";

const google_authorization = {
  key: "covid19to.api.token"
};

const is_authorized = () =>
  typeof window !== "undefined" &&
  sessionStorage.getItem(google_authorization.key);

const authorize = token => {
  sessionStorage.setItem(google_authorization.key, token);
};

const logout = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(google_authorization.key);
    Router.push("/login");
  }
};

export { is_authorized, authorize, logout };
