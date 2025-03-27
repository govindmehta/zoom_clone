import Sidebar from "@/components/Sidebar";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React from "react";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg"
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
