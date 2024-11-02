"use server";

import { SigninFormValues } from "../components/auth/SigninForm";
import { createSession, deleteSession } from "../lib/session";

export async function signin(values: SigninFormValues) {
  // Current steps:
  // 4. Create user session
  await createSession(1);
  // 5. Redirect user
  // Construct absolute URL based on request origin

  return { msg: "success" };
}

export async function logout() {
  deleteSession();
  return { msg: "success" };
}
