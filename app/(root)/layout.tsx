import React, { Children, ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamProvider";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
