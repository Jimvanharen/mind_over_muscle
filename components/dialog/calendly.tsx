import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InlineCalendly } from "../calendly/inline";
import { Button } from "../ui/button";

export const CalendlyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto text-center">
          Plan een gratis consult
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[95vw] sm:max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-2xl text-center">
            Gesprek bij Vincent inplannen
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-center">
            Hier kan je een gesprek inplannen bij Vincent.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 max-h-[70vh] overflow-auto">
          <InlineCalendly />
        </div>
      </DialogContent>
    </Dialog>
  );
};
