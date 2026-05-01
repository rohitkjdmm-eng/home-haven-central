import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile"),
  extra: z.string().trim().max(80).optional(),
});

type Props = {
  variant?: "primary" | "dark";
  buttonLabel: string;
  extraField?: { name: string; label: string; type?: string; placeholder?: string };
  compact?: boolean;
};

export const PropertyForm = ({ buttonLabel, extraField, variant = "primary", compact }: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ name: "", phone: "", extra: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
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

  const labelCls = variant === "dark" ? "text-background/90" : "text-foreground";
  const inputCls = variant === "dark"
    ? "bg-background/10 border-background/30 text-background placeholder:text-background/50 focus-visible:ring-gold"
    : "bg-card border-border";

  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${compact ? "" : "w-full"}`}>
      <div className="space-y-2">
        <Label htmlFor="name" className={labelCls}>Full Name</Label>
        <Input id="name" className={inputCls} placeholder="Your name" value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })} maxLength={80} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className={labelCls}>Phone Number</Label>
        <Input id="phone" type="tel" className={inputCls} placeholder="10-digit mobile" value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })} />
      </div>
      {extraField && (
        <div className="space-y-2">
          <Label htmlFor="extra" className={labelCls}>{extraField.label}</Label>
          <Input id="extra" type={extraField.type || "text"} className={inputCls}
            placeholder={extraField.placeholder} value={values.extra}
            onChange={(e) => setValues({ ...values, extra: e.target.value })} maxLength={80} />
        </div>
      )}
      <Button type="submit" variant="gold" size="xl" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : buttonLabel}
      </Button>
    </form>
  );
};
