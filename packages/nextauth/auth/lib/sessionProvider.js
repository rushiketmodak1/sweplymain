//packages/ui/CommonProvider.jsx
"use client";

import { SessionProvider } from "next-auth/react";

export function NextAuthSessionProvider({ children }, props) {
  const { session } = props;

  return (
    <>
      <SessionProvider session={session}>{children}</SessionProvider>
    </>
  );
}
