// Utilities
import Router from "next/router";

export const google_authorization = {
  key: "covid19to.api.token",
};

export const is_authorized = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem(google_authorization.key);

    if (token) {
      return true;
    }
  }
  return false;
}

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(google_authorization.key);
    Router.push("/login");
  }
}
