"use client";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export const CalendlyPopup = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <PopupButton 
                url="https://calendly.com/joostdebruyn3"
                rootElement={document.getElementById("root") || document.body}
                text="Plan een afspraak"
                className="bg-white text-black px-4 py-2 rounded-sm"
            />
        </>
    );
};
