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
      <DialogTrigger>
        <Button>Plan een gratis consult</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle>Gesprek bij vincent inplannen</DialogTitle>
          <DialogDescription>
            Hier kan je een gesprek inplannen bij vincent.
          </DialogDescription>
        </DialogHeader>
        <InlineCalendly />
      </DialogContent>
    </Dialog>
  );
};
