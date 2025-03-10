"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Bericht verzonden!", {
      description: "We nemen zo snel mogelijk contact met je op.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Voornaam</Label>
          <Input id="firstName" name="firstName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Achternaam</Label>
          <Input id="lastName" name="lastName" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-mailadres</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefoonnummer</Label>
        <Input id="phone" name="phone" type="tel" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Bericht</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Vertel ons over je doelen en vragen..."
          className="min-h-[120px]"
          required
        />
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="consent" name="consent" required />
        <Label htmlFor="consent" className="text-sm font-normal">
          Ik ga akkoord met de verwerking van mijn gegevens zoals beschreven in
          de privacyverklaring
        </Label>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
      </Button>
    </form>
  );
}
