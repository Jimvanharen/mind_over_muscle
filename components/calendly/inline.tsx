"use client";
import { InlineWidget, PopupButton } from "react-calendly";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const InlineCalendly = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <InlineWidget url="https://calendly.com/mindovermuscle-info" />
    </>
  );
};
