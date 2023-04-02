//_app.tsx file is a special file in Next.js that allows you to customize the default behavior of the application. You can use it to add global styles, set up providers, and more. It's the top-level component that wraps all other components in your application, and it's only loaded once when the app is first loaded.

import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import '~/styles/puls_widgets.css'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
