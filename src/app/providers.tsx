"use client";

import { Toaster } from "react-hot-toast";

export default function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  )
}
