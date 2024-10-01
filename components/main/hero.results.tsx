import Image from "next/image";
import { Button } from "../ui/button";
import React from "react";

export default function HeroResults() {
    return (
        <React.Fragment>
            <section className="flex gap-y-8 justify-center flex-col mb-8 items-center">
                <div>
                    <h2>TRANSFORMATIES</h2>
                    <p>Na slechts enkele maanden behalen onze cliënten al een super goed resultaat!</p>
                </div>
                <div className="flex sm:flex-row flex-col gap-y-12 w-full justify-evenly gap-x-12">
                    <Image src="/hero-results-1.jpg" alt="Hero Results" width={600} height={600} />
                    <Image src="/hero-results-2.jpg" alt="Hero Results" width={600} height={600} />
                </div>
            </section>
        </React.Fragment>
    )
}