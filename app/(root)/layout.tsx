import React, { Children, ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaik's video Calling App",
  description: "Shaik's video Calling App",
  icons: {
    icon:'/icons/logo.svg'
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
