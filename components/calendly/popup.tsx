"use client";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const CalendlyPopup = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <PopupButton
        url="https://calendly.com/mindovermuscle-info"
        rootElement={document.getElementById("root") || document.body}
        text="Boek een Sessie"
        className="hidden bg-white rounded-md md:flex border-red-500 text-black hover:bg-red-500 hover:text-white p-4"
      />
    </>
  );
};
