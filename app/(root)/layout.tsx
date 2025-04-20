import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  console.log("RootLayout");
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
