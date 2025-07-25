// app/providers.tsx
"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <PrivyProvider
      appId="cmdiktk1f01kul70i622xmt71" // Replace with your actual ID
      config={{
        loginMethods: ["wallet", "email", "google"],
        embeddedWallets: {
          // createOnLogin:  { enabled: true },
        },
        appearance: {
          theme: "light", // or "dark"
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
};

export default Providers;
