"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./reveal";
import { categories, type Product } from "@/lib/products";
import { ENQUIRY_PRODUCT_EVENT } from "./enquiry-form";

const getFormBadgeStyle = (form: string) => {
  switch (form.toLowerCase()) {
    case "tablet":
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    case "capsule":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    case "suspension":
      return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20";
    case "injection":
      return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
    case "combi kit":
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
};

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleEnquireClick = (productName: string) => {
    setSelectedProduct(null);
    window.dispatchEvent(new CustomEvent(ENQUIRY_PRODUCT_EVENT, { detail: productName }));
    // Wait for the dialog to close and release its scroll lock before scrolling.
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 250);
  };

  return (
    <section id="products" className="bg-secondary/40 py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Prescription Portfolio"
          title="Our Pharmaceutical Products"
          description="High-quality, prescription-grade pharmaceutical portfolio spanning Gastroenterology, Hepatology and Nutritional Care."
        />

        <Reveal className="mt-12" delay={0.1}>
          <Tabs defaultValue="gastro" className="w-full">
            <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap justify-center gap-1.5 bg-background p-2 shadow-soft rounded-2xl border border-border/60">
              {categories.map((c) => (
                <TabsTrigger
                  key={c.id}
                  value={c.id}
                  className="rounded-xl px-5 py-2.5 text-sm font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
                >
                  <span>{c.label}</span>
                  <span className="ml-2 rounded-full bg-muted-foreground/15 px-2 py-0.5 text-xs font-normal">
                    {c.items.length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((c) => (
              <TabsContent key={c.id} value={c.id} className="mt-10">
                <p className="mx-auto max-w-2xl text-center text-sm font-medium text-muted-foreground">
                  {c.blurb}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {c.items.map((p, i) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <Card className="group overflow-hidden rounded-2xl border border-border/80 bg-card shadow-soft transition-all duration-300 hover:border-primary/50 hover:shadow-lift flex flex-col justify-between h-full">
                        {/* Product Image Box */}
                        <div
                          className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-slate-50/80 dark:bg-slate-900/50 group-hover:bg-slate-100/60 dark:group-hover:bg-slate-900/80 transition-colors duration-300 p-5 border-b border-border/90 group-hover:border-primary/30 flex items-center justify-center"
                          onClick={() => setSelectedProduct(p)}
                        >
                          <img
                            src={p.image}
                            alt={`${p.name} (${p.generic}) pack`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.07)] transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Name & Details Button */}
                        <CardContent className="p-4 sm:p-4.5 flex items-center justify-between gap-3 bg-card">
                          <h3
                            className="text-base font-bold leading-snug text-foreground group-hover:text-primary transition-colors cursor-pointer tracking-tight"
                            onClick={() => setSelectedProduct(p)}
                          >
                            {p.name}
                          </h3>

                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedProduct(p)}
                            className="shrink-0 h-8.5 px-3.5 text-xs font-semibold text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground rounded-xl shadow-2xs transition-all duration-200"
                          >
                            Details
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        {selectedProduct && (
          <DialogContent className="max-w-xl p-0 overflow-hidden rounded-2xl border border-border">
            <div className="relative bg-slate-50 dark:bg-slate-900/80 p-6 flex items-center justify-center border-b border-border">
              <img
                src={selectedProduct.image}
                alt={`${selectedProduct.name} (${selectedProduct.generic}) pack`}
                className="max-h-64 object-contain drop-shadow-md"
              />
              <Badge
                variant="outline"
                className={`absolute top-4 left-4 text-xs font-semibold ${getFormBadgeStyle(selectedProduct.form)}`}
              >
                {selectedProduct.form}
              </Badge>
            </div>

            <div className="p-6 space-y-4">
              <DialogHeader className="text-left space-y-1">
                <DialogTitle className="text-2xl font-extrabold text-foreground">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-sm font-semibold text-teal">
                  {selectedProduct.generic}
                </DialogDescription>
              </DialogHeader>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-border/70 p-3 bg-secondary/30">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                    Dosage Form
                  </span>
                  <span className="text-sm font-bold text-foreground mt-0.5 block">
                    {selectedProduct.form}
                  </span>
                </div>
                <div className="rounded-xl border border-border/70 p-3 bg-secondary/30">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                    Packaging Spec
                  </span>
                  <span className="text-sm font-bold text-foreground mt-0.5 block">
                    {selectedProduct.pack}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="hero"
                  className="w-full sm:flex-1"
                  onClick={() => handleEnquireClick(selectedProduct.name)}
                >
                  <Send className="size-4 mr-2" /> Enquire About {selectedProduct.name}
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

