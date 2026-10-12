"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const ENQUIRY_PRODUCT_EVENT = "enquiry:product";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^\+?[0-9\s()-]+$/, "Phone can only contain digits and + - ( )")
    .refine((v) => v.replace(/\D/g, "").length >= 7, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  product: z.string().trim().max(120).optional(),
  message: z.string().trim().min(5, "Tell us a little more").max(1000),
});

const initial = { name: "", phone: "", email: "", product: "", message: "" };

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [botcheck, setBotcheck] = useState(false);

  useEffect(() => {
    const onProduct = (e: Event) => {
      const product = (e as CustomEvent<string>).detail;
      setValues((v) => ({ ...v, product }));
    };
    window.addEventListener(ENQUIRY_PRODUCT_EVENT, onProduct);
    return () => window.removeEventListener(ENQUIRY_PRODUCT_EVENT, onProduct);
  }, []);

  const set = (key: keyof typeof initial) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const data = parsed.data;
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: `New website enquiry${data.product ? ` — ${data.product}` : ""} from ${data.name}`,
          from_name: "Syno Pharma Website",
          replyto: data.email,
          name: data.name,
          email: data.email,
          phone: data.phone,
          product: data.product || "—",
          message: data.message,
          botcheck,
        }),
      });
      const result: { success?: boolean; message?: string } = await res.json().catch(() => ({}));
      if (!res.ok || !result.success) throw new Error(result.message || `HTTP ${res.status}`);

      setValues(initial);
      toast.success("Enquiry received", {
        description: "Our team will get back to you within one working day.",
      });
    } catch (err) {
      console.error("Enquiry submission failed", err);
      toast.error("Couldn't send your enquiry", {
        description: `Please try again, or email us directly at ${siteConfig.email}.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const field = (
    id: keyof typeof initial,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement> = {},
  ) => (
    <div className="space-y-2">
      <Label htmlFor={`enq-${id}`}>{label}</Label>
      <Input id={`enq-${id}`} name={id} value={values[id]} onChange={set(id)} {...props} />
      {errors[id] ? <p className="text-xs text-destructive">{errors[id]}</p> : null}
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
      />
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        {field("name", "Full name", { placeholder: "Dr. A. Sharma", maxLength: 100, autoComplete: "name" })}
        {field("phone", "Phone", { placeholder: "+91 98765 43210", maxLength: 20, type: "tel", autoComplete: "tel" })}
      </div>
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        {field("email", "Email", { placeholder: "you@clinic.com", maxLength: 255, type: "email", autoComplete: "email" })}
        {field("product", "Product enquiry", { placeholder: "e.g. Pancide 40 mg Tab", maxLength: 120 })}
      </div>
      <div className="space-y-2">
        <Label htmlFor="enq-message">Message</Label>
        <Textarea
          id="enq-message"
          name="message"
          value={values.message}
          onChange={set("message")}
          rows={compact ? 3 : 4}
          maxLength={1000}
          placeholder="Share your requirement, quantity or query..."
        />
        {errors["message"] ? <p className="text-xs text-destructive">{errors["message"]}</p> : null}
      </div>
      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
        <Send /> {submitting ? "Sending..." : "Submit Enquiry"}
      </Button>
    </form>
  );
}
