import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Home, MessageCircle, Phone as PhoneIcon, Calendar, Clock } from "lucide-react";

const PHONE = "9079718117";
const DEFAULT_WA = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
  "Hi, I just submitted an enquiry for the Ganesh Nagar, Sirsi, Bindayaka apartment."
)}`;

type Enquiry = {
  name?: string;
  phone?: string;
  visitDate?: string;
  visitTime?: string;
  waUrl?: string;
};

const ThankYou = () => {
  const location = useLocation();
  const [enquiry, setEnquiry] = useState<Enquiry>({});

  useEffect(() => {
    const fromState = (location.state as Enquiry) || null;
    if (fromState && fromState.name) {
      setEnquiry(fromState);
    } else {
      try {
        const raw = sessionStorage.getItem("lastEnquiry");
        if (raw) setEnquiry(JSON.parse(raw));
      } catch {}
    }
  }, [location.state]);

  const waUrl = enquiry.waUrl || DEFAULT_WA;

  // Auto-open WhatsApp once so the client's details reach the owner
  useEffect(() => {
    if (!enquiry.waUrl) return;
    const opened = sessionStorage.getItem("waOpened");
    if (opened === enquiry.waUrl) return;
    const t = setTimeout(() => {
      window.open(enquiry.waUrl!, "_blank", "noopener,noreferrer");
      sessionStorage.setItem("waOpened", enquiry.waUrl!);
    }, 600);
    return () => clearTimeout(t);
  }, [enquiry.waUrl]);

  return (
    <main className="min-h-screen bg-gradient-emerald flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center shadow-luxury border-gold/30 animate-fade-up">
        <div className="w-20 h-20 rounded-full bg-gradient-gold mx-auto flex items-center justify-center shadow-gold mb-6">
          <CheckCircle2 className="w-11 h-11 text-gold-foreground" />
        </div>
        <h1 className="font-display text-3xl md:text-5xl text-primary">
          🎉 Thank You{enquiry.name ? `, ${enquiry.name.split(" ")[0]}` : ""}!
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Your request is submitted. Our team will contact you shortly for site visit confirmation.
        </p>

        {(enquiry.name || enquiry.phone || enquiry.visitDate) && (
          <div className="mt-6 text-left bg-gold/5 rounded-xl p-5 border border-gold/30">
            <p className="text-xs uppercase tracking-widest text-gold font-bold mb-3">Your Booking Summary</p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {enquiry.name && (
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold" /><span className="text-foreground"><b>Name:</b> {enquiry.name}</span></div>
              )}
              {enquiry.phone && (
                <div className="flex items-center gap-2"><PhoneIcon className="w-4 h-4 text-gold" /><span className="text-foreground"><b>Mobile:</b> {enquiry.phone}</span></div>
              )}
              {enquiry.visitDate && (
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gold" /><span className="text-foreground"><b>Date:</b> {enquiry.visitDate}</span></div>
              )}
              {enquiry.visitTime && (
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /><span className="text-foreground"><b>Time:</b> {enquiry.visitTime}</span></div>
              )}
            </div>
          </div>
        )}

        <div className="mt-8 text-left bg-secondary/50 rounded-xl p-6 border border-gold/15">
          <h2 className="font-display text-xl text-primary mb-4">What Happens Next?</h2>
          <ul className="space-y-3">
            {[
              "Our expert will call you within 15–30 minutes",
              "You'll get full details + exact location",
              "Your site visit will be scheduled",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-sm text-muted-foreground mb-3">
            📲 Tap below to send your details on WhatsApp instantly
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="whatsapp" size="xl" className="animate-pulse-gold">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" /> Send on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={`tel:+91${PHONE}`}>
                <PhoneIcon className="w-4 h-4" /> Call Now
              </a>
            </Button>
            <Button asChild variant="ghost" size="xl">
              <Link to="/"><Home className="w-4 h-4" /> Home</Link>
            </Button>
          </div>
        </div>

        <p className="mt-8 pt-6 border-t border-gold/20 text-sm md:text-base font-semibold text-primary">
          🔒 100% Transparent Deal. No Hidden Charges. Verified Property You Can Trust.
        </p>
      </Card>
    </main>
  );
};

export default ThankYou;
