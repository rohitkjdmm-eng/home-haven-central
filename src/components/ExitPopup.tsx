import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PropertyForm } from "./PropertyForm";

export const ExitPopup = () => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        setShown(true);
      }
    };
    const timer = setTimeout(() => {
      if (!shown) { setOpen(true); setShown(true); }
    }, 45000);
    document.addEventListener("mouseleave", handler);
    return () => { document.removeEventListener("mouseleave", handler); clearTimeout(timer); };
  }, [shown]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-gold/30">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-display text-primary">
            ❗ Wait — Unlock Best Price
          </DialogTitle>
          <DialogDescription className="text-base">
            Fill your details and our expert will call you instantly with the best deal.
          </DialogDescription>
        </DialogHeader>
        <PropertyForm buttonLabel="Get Offer Now" compact />
      </DialogContent>
    </Dialog>
  );
};
