"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

import { LogOut } from 'lucide-react';

export default function LogoutButton(){
  return(
    <Button
      variant="destructive"
      className="hover:cursor-pointer"
      onClick={()=> {signOut()}}
    >
      Sair <LogOut />
    </Button>
  );
};