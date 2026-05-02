import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { z } from "zod";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile"),
  buyingFor: z.enum(["Self Use", "Investment"], { required_error: "Select an option" }),
  budget: z.enum(["₹80L – ₹1 Cr", "₹1 Cr – ₹1.25 Cr", "₹1.25 Cr – ₹1.5 Cr", "Flexible"], { required_error: "Select your budget" }),
  timeline: z.enum(["Immediately", "Within 1 Month", "1–3 Months", "Just Exploring"], { required_error: "Select timeline" }),
  visitDate: z.date({ required_error: "Pick a date" }),
  visitTime: z.string().min(1, "Pick a time"),
});

type Props = {
  variant?: "primary" | "dark";
  buttonLabel: string;
  compact?: boolean;
};

const BUDGETS = ["₹80L – ₹1 Cr", "₹1 Cr – ₹1.25 Cr", "₹1.25 Cr – ₹1.5 Cr", "Flexible"] as const;
const TIMELINES = ["Immediately", "Within 1 Month", "1–3 Months", "Just Exploring"] as const;

export const PropertyForm = ({ buttonLabel, variant = "primary", compact }: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [buyingFor, setBuyingFor] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const [visitDate, setVisitDate] = useState<Date | undefined>();
  const [visitTime, setVisitTime] = useState<string>("");

  const isDark = variant === "dark";
  const labelCls = isDark ? "text-background/90" : "text-foreground";
  const inputCls = isDark
    ? "bg-background/10 border-background/30 text-background placeholder:text-background/50 focus-visible:ring-gold"
    : "bg-card border-border";
  const chipBase = "cursor-pointer text-xs md:text-sm rounded-md border px-3 py-2 text-center transition-colors select-none";
  const chipIdle = isDark
    ? "border-background/30 text-background/80 hover:border-gold hover:text-gold"
    : "border-border text-foreground hover:border-gold hover:text-gold";
  const chipActive = "border-gold bg-gold/15 text-gold font-semibold";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, phone, buyingFor, budget, timeline, visitDate, visitTime });
    if (!result.success) {
      toast({ title: "Please check your details", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/thank-you");
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${compact ? "" : "w-full"}`}>
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className={labelCls}>Full Name *</Label>
        <Input id="name" className={inputCls} placeholder="Your name" value={name}
          onChange={(e) => setName(e.target.value)} maxLength={80} />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className={labelCls}>Mobile Number *</Label>
        <Input id="phone" type="tel" inputMode="numeric" className={inputCls} placeholder="10-digit mobile" value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} />
      </div>

      {/* Buying For */}
      <div className="space-y-2">
        <Label className={labelCls}>You are buying for? *</Label>
        <RadioGroup value={buyingFor} onValueChange={setBuyingFor} className="grid grid-cols-2 gap-2">
          {["Self Use", "Investment"].map((opt) => (
            <Label key={opt} htmlFor={`bf-${opt}`}
              className={cn(chipBase, buyingFor === opt ? chipActive : chipIdle)}>
              <RadioGroupItem id={`bf-${opt}`} value={opt} className="sr-only" />
              {opt}
            </Label>
          ))}
        </RadioGroup>
      </div>

      {/* Budget */}
      <div className="space-y-2">
        <Label className={labelCls}>Your Budget Range? *</Label>
        <RadioGroup value={budget} onValueChange={setBudget} className="grid grid-cols-2 gap-2">
          {BUDGETS.map((opt) => (
            <Label key={opt} htmlFor={`bg-${opt}`}
              className={cn(chipBase, budget === opt ? chipActive : chipIdle)}>
              <RadioGroupItem id={`bg-${opt}`} value={opt} className="sr-only" />
              {opt}
            </Label>
          ))}
        </RadioGroup>
      </div>

      {/* Timeline */}
      <div className="space-y-2">
        <Label className={labelCls}>When are you planning to buy? *</Label>
        <RadioGroup value={timeline} onValueChange={setTimeline} className="grid grid-cols-2 gap-2">
          {TIMELINES.map((opt) => (
            <Label key={opt} htmlFor={`tl-${opt}`}
              className={cn(chipBase, timeline === opt ? chipActive : chipIdle)}>
              <RadioGroupItem id={`tl-${opt}`} value={opt} className="sr-only" />
              {opt}
            </Label>
          ))}
        </RadioGroup>
      </div>

      {/* Date + Time */}
      <div className="space-y-2">
        <Label className={labelCls}>Preferred Site Visit Date & Time *</Label>
        <div className="grid grid-cols-2 gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button type="button" variant="outline"
                className={cn("justify-start text-left font-normal h-10", !visitDate && "text-muted-foreground",
                  isDark && "bg-background/10 border-background/30 text-background hover:bg-background/20 hover:text-background")}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {visitDate ? format(visitDate, "dd MMM yyyy") : "Pick date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={visitDate} onSelect={setVisitDate}
                disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                initialFocus className={cn("p-3 pointer-events-auto")} />
            </PopoverContent>
          </Popover>
          <Input type="time" className={cn(inputCls, "h-10")} value={visitTime}
            onChange={(e) => setVisitTime(e.target.value)} />
        </div>
      </div>

      <Button type="submit" variant="gold" size="xl" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : buttonLabel}
      </Button>
    </form>
  );
};
