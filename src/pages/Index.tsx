import { PropertyForm } from "@/components/PropertyForm";
import { ExitPopup } from "@/components/ExitPopup";
import { HeroGallery } from "@/components/HeroGallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImg from "@/assets/hero-villa.png";
import dayImg from "@/assets/exterior-day.jpg";
import livingImg from "@/assets/villa-living.jpg";
import kitchenImg from "@/assets/villa-kitchen.jpg";
import theatreImg from "@/assets/villa-theatre.jpg";
import {
  CheckCircle2, XCircle, MapPin, Phone, ShieldCheck, Sparkles, Film, Sofa,
  ChefHat, BedDouble, Car, TrendingUp, Clock, Award, FileCheck, AlertTriangle, Home as HomeIcon
} from "lucide-react";

const heroSlides = [
  { src: heroImg, alt: "Luxury 3 BHK villa exterior at twilight, Ganesh Nagar Sirsi Bindayaka", label: "Exterior" },
  { src: livingImg, alt: "Designer living room interior", label: "Living Room" },
  { src: kitchenImg, alt: "Modular kitchen with island", label: "Modular Kitchen" },
  { src: theatreImg, alt: "Private mini theatre", label: "Mini Theatre" },
];

const PHONE = "9079718117";
const WHATSAPP = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi, I'm interested in the premium apartment at Ganesh Nagar, Sirsi, Bindayaka.")}`;

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 md:py-24 px-4 ${className}`}>
    <div className="container mx-auto max-w-6xl">{children}</div>
  </section>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
    {children}
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-emerald text-primary-foreground text-xs md:text-sm py-2 px-4 text-center">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold animate-blink" />
          🔥 Festive Offer Live — Only <span className="text-gold font-bold">3 Units Left</span> at Launch Price
        </span>
      </div>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-[hsl(158_50%_12%)] overflow-hidden">
        {/* decorative gold blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative container mx-auto max-w-7xl px-4 py-8 md:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT — Gallery slider */}
          <div className="relative animate-fade-up order-1 min-w-0">
            <HeroGallery slides={heroSlides} />

            {/* Stat chips below gallery */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                [HomeIcon, "3 BHK"],
                [Car, "2 Parking"],
                [BedDouble, "1800+ Sq.ft"],
              ].map(([Icon, n]) => (
                <div key={n as string} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/10 border border-gold/30 backdrop-blur-sm text-background text-xs font-semibold">
                  <Icon className="w-4 h-4 text-gold" />
                  {n as string}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Headline + Form */}
          <div className="order-2 animate-fade-up">
            <div className="text-background mb-6">
              <Eyebrow><Sparkles className="w-3 h-3" /> Most Premium Villa</Eyebrow>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-[1.05]">
                <span className="text-shimmer-gold">Luxury</span> 3 BHK<br/>
                Villa <span className="italic font-medium">For Sale</span>
              </h1>
              <div className="gold-divider w-20 my-4" />
              <p className="flex items-center gap-2 text-sm md:text-base text-background/90">
                <MapPin className="w-4 h-4 text-gold" />
                Ganesh Nagar, Sirsi, Bindayaka, Jaipur
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  [Sofa, "Fully Furnished"],
                  [Film, "Mini Theatre"],
                  [ShieldCheck, "JDA & RERA"],
                ].map(([Icon, t]) => (
                  <div key={t as string} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/10 border border-gold/30 text-xs text-background/95">
                    <Icon className="w-3 h-3 text-gold" />
                    {t as string}
                  </div>
                ))}
              </div>
            </div>

            <Card id="enquire" className="relative p-6 md:p-7 shadow-luxury border-gold/30 bg-card">
              <div className="absolute -top-3 left-6 px-4 py-1 rounded-full bg-gradient-gold text-gold-foreground text-[10px] font-bold uppercase tracking-widest shadow-gold">
                ⚡ Free Site Visit
              </div>
              <div className="mb-5 mt-1">
                <h2 className="font-display text-xl md:text-2xl text-primary">Check Availability</h2>
                <p className="text-xs text-muted-foreground mt-1">Get exact location + floor plan instantly</p>
              </div>
              <PropertyForm
                buttonLabel="Check Availability Now"
                extraField={{ name: "extra", label: "Preferred Visit Date", type: "date" }}
              />
              <div className="mt-4 flex items-center justify-between gap-2 text-xs">
                <p className="text-muted-foreground flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-gold" /> 100% confidential
                </p>
                <a href={`tel:${PHONE}`} className="text-primary font-semibold flex items-center gap-1 hover:text-gold transition-smooth">
                  <Phone className="w-3 h-3" /> {PHONE}
                </a>
              </div>
            </Card>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg" className="animate-pulse-gold flex-1 min-w-[160px]">
                <a href={`tel:${PHONE}`}><Phone className="w-4 h-4" /> Call Now</a>
              </Button>
              <Button asChild variant="whatsapp" size="lg" className="flex-1 min-w-[160px]">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - WHY DIFFERENT */}
      <Section className="bg-secondary/40">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow><ShieldCheck className="w-3 h-3" /> Secure Investment</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl text-primary mt-4">
            Not Just a Home — It's a Secure Investment
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {[
            { icon: ShieldCheck, t: "Government Approved", d: "JDA + RERA verified" },
            { icon: TrendingUp, t: "High Appreciation", d: "Prime location growth" },
            { icon: Clock, t: "Ready-to-Move", d: "Move in immediately" },
            { icon: Award, t: "Living + Investment", d: "Best of both worlds" },
          ].map(({ icon: Icon, t, d }) => (
            <Card key={t} className="p-6 text-center hover:shadow-luxury transition-smooth border-gold/10 hover:border-gold/40 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-gradient-emerald mx-auto flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl text-primary">{t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* SECTION 3 - FEATURES */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={dayImg} alt="Premium apartment exterior with landscaping, Ganesh Nagar Sirsi Bindayaka"
              className="rounded-2xl shadow-luxury w-full" loading="lazy" decoding="async" />
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold p-5 rounded-xl shadow-gold hidden md:block">
              <p className="text-gold-foreground font-display text-2xl font-bold">₹1.25 Cr<span className="text-sm font-sans font-normal">/onwards</span></p>
            </div>
          </div>
          <div>
            <Eyebrow>Premium Living</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl text-primary mt-4">
              Everything Included. <span className="text-gold">Move Right In.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">Designed for those who value craftsmanship, comfort and quiet luxury.</p>

            <ul className="mt-8 space-y-4">
              {[
                [Sparkles, "Fully Furnished Apartment"],
                [Film, "Private Mini Theatre"],
                [Sofa, "Designer Living Room"],
                [ChefHat, "Modular Kitchen"],
                [BedDouble, "Spacious Bedrooms"],
                [Car, "Dedicated Parking"],
              ].map(([Icon, text]) => (
                <li key={text as string} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/60 transition-smooth">
                  <div className="w-11 h-11 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="font-medium text-foreground">{text as string}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* SECTION 4 - LOCATION */}
      <Section className="bg-gradient-emerald text-primary-foreground">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow><MapPin className="w-3 h-3" /> Location Advantage</Eyebrow>
            <h2 className="font-display text-3xl md:text-5xl mt-4">
              Prime Location = <span className="text-gold">Future Growth</span>
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" /> Ganesh Nagar, Sirsi, Bindayaka, Jaipur
            </p>
            <ul className="mt-8 space-y-3">
              {["High Demand Area", "Excellent Connectivity", "Peaceful + Premium Living", "Strong Investment Potential"].map(t => (
                <li key={t} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <Card className="p-8 bg-background/5 backdrop-blur border-background/20 text-primary-foreground">
            <h3 className="font-display text-2xl mb-6">Why Sirsi, Bindayaka?</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                ["10 min", "Vaishali Nagar"],
                ["15 min", "Heerapura & Ajmer Road"],
                ["20 min", "Jaipur Railway Station"],
                ["5 min", "Top Schools & Markets"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-gold">{n}</p>
                  <p className="text-sm text-primary-foreground/70">{l}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* SECTION 5 - TRUST */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow><FileCheck className="w-3 h-3" /> Verified Property</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl text-primary mt-4">Safe & Verified Property</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-5 mt-12">
          {["JDA Approved", "RERA Registered", "Clear Legal Documentation", "No Hidden Risk"].map(t => (
            <Card key={t} className="p-6 text-center border-gold/20">
              <ShieldCheck className="w-10 h-10 text-gold mx-auto mb-3" />
              <p className="font-semibold text-primary">{t}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* SECTION 6 - ZERO BROKER DRAMA */}
      <Section className="bg-secondary/40">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow>🛑 Trust Builder</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl text-primary mt-4">
            Zero Broker Drama. <span className="text-gold">Zero Builder Surprises.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="p-7 border-destructive/30">
            <h3 className="font-display text-2xl text-destructive flex items-center gap-2 mb-5">
              <XCircle className="w-6 h-6" /> What Others Do
            </h3>
            <ul className="space-y-3">
              {["Add Hidden Charges", "Construction Delays", "Poor Post-Booking Support", "Amenities Promised but Missing", "Lack of Approvals"].map(t => (
                <li key={t} className="flex items-start gap-3 text-foreground/80">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-7 border-success/30 bg-gradient-to-br from-card to-success/5">
            <h3 className="font-display text-2xl text-success flex items-center gap-2 mb-5" style={{ color: "hsl(var(--success))" }}>
              <CheckCircle2 className="w-6 h-6" /> What We Do
            </h3>
            <ul className="space-y-3">
              {["Transparent Pricing Always", "On-Time Delivery Commitment", "Dedicated Relationship Team", "Verified & Ready Amenities", "100% Legal Clarity (JDA + RERA)"].map(t => (
                <li key={t} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "hsl(var(--success))" }} /> {t}
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <p className="text-center mt-10 font-display text-2xl text-primary">
          👉 No Confusion. No Risk. <span className="text-gold">Only Clear Deal.</span>
        </p>
      </Section>

      {/* SECTION 7 - URGENCY CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/20 border border-destructive/40 text-destructive text-xs font-semibold uppercase tracking-widest">
              <AlertTriangle className="w-3 h-3" /> Limited Units
            </div>
            <h2 className="font-display text-3xl md:text-5xl mt-4">
              Limited Units Available — <span className="text-gold">Don't Miss This.</span>
            </h2>
            <ul className="mt-6 space-y-3 text-lg text-primary-foreground/85">
              <li className="flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-gold" /> High Demand Property</li>
              <li className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-gold" /> Prices Increasing Soon</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="xl">
                <a href={`tel:${PHONE}`}><Phone className="w-4 h-4" /> Call {PHONE}</a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
              </Button>
            </div>
          </div>

          <Card className="p-6 md:p-8 shadow-luxury border-gold/30 bg-card">
            <h3 className="font-display text-2xl text-primary mb-1">Book Site Visit</h3>
            <p className="text-sm text-muted-foreground mb-5">Reserve your slot today.</p>
            <PropertyForm
              buttonLabel="Book My Visit"
              extraField={{ name: "extra", label: "Preferred Visit Time", placeholder: "e.g. Saturday 11 AM" }}
            />
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-primary/95 text-primary-foreground/70 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Premium Apartments • Ganesh Nagar, Sirsi, Bindayaka, Jaipur</p>
        <p className="mt-1">Call / WhatsApp: <a href={`tel:${PHONE}`} className="text-gold font-semibold">{PHONE}</a></p>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[hsl(142_70%_40%)] hover:bg-[hsl(142_70%_35%)] text-white w-14 h-14 rounded-full shadow-luxury flex items-center justify-center transition-smooth hover:scale-110"
        aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>

      <ExitPopup />
    </main>
  );
};

export default Index;
