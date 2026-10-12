"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EnquiryForm } from "./enquiry-form";
import logoAsset from "@/assets/syno-logo.png";

const logoSrc = typeof logoAsset === "string" ? logoAsset : logoAsset.src;

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Core Values", href: "#values" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border bg-background/85 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label="Syno Pharma home">
          <img
            src={logoSrc}
            alt="Syno Pharma logo"
            width={176}
            height={54}
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="hero" className="hidden sm:inline-flex">
                Enquire Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Send us an enquiry</DialogTitle>
                <DialogDescription>
                  Share your requirement and our team will respond within one working day.
                </DialogDescription>
              </DialogHeader>
              <EnquiryForm compact />
            </DialogContent>
          </Dialog>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="heroOutline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-8 flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {l.label}
                  </a>
                ))}
                <Button
                  variant="hero"
                  size="lg"
                  className="mt-4"
                  onClick={() => {
                    setMobileOpen(false);
                    setTimeout(() => {
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 250);
                  }}
                >
                  Enquire Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
