import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Home } from "lucide-react";

const PHONE = "9079718117";
const WHATSAPP = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I just submitted an enquiry for the Ganesh Nagar, Sirsi, Bindayaka apartment.")}`;

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-gradient-emerald flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center shadow-luxury border-gold/30 animate-fade-up">
        <div className="w-20 h-20 rounded-full bg-gradient-gold mx-auto flex items-center justify-center shadow-gold mb-6">
          <CheckCircle2 className="w-11 h-11 text-gold-foreground" />
        </div>
        <h1 className="font-display text-3xl md:text-5xl text-primary">🎉 Thank You! Your Request is Submitted</h1>
        <p className="mt-3 text-lg text-muted-foreground">Our team will contact you shortly for site visit confirmation.</p>

        <div className="mt-8 text-left bg-secondary/50 rounded-xl p-6 border border-gold/15">
          <h2 className="font-display text-xl text-primary mb-4">What Happens Next?</h2>
          <ul className="space-y-3">
            {[
              "Our expert will call you within 15–30 minutes",
              "You'll get full details + exact location",
              "Your site visit will be scheduled",
            ].map(t => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-sm text-muted-foreground mb-3">📞 Need immediate help?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="outline" size="xl">
              <Link to="/"><Home className="w-4 h-4" /> Go To Home</Link>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
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
