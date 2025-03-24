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
      <Button
        variant="outline"
        className="hidden bg-gray-950 md:flex border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
      >
        <PopupButton
          url="https://calendly.com/joostdebruyn3"
          rootElement={document.getElementById("root") || document.body}
          text="Boek een Sessie"
        />
      </Button>
    </>
  );
};
