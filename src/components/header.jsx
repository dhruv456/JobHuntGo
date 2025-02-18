import React from "react";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Header() {
  return (
    <nav className="nav-header flex justify-between align-middle pe-10 items-center">
      <img src="/logo_Job_hunt.png" alt="Logo" style={{ height: "90%" }} />

      {/* <Button variant="double-shadow">Login</Button> */}
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}

export default Header;
