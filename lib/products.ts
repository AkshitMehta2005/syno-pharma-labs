export type Product = {
  id: string;
  name: string;
  generic: string;
  form: string;
  pack: string;
  image: string;
  description: string;
  category: "gastro" | "hepato" | "supplements";
};

export const categories: {
  id: string;
  label: string;
  blurb: string;
  items: Product[];
}[] = [
  {
    id: "gastro",
    label: "Gastroenterology",
    blurb: "Acid control, GI motility and H. pylori eradication management for everyday gastroenterology practice.",
    items: [
      {
        id: "pancide-40",
        name: "Pancide 40 mg Tab",
        generic: "Pantoprazole Gastro-Resistant Tablets I.P. 40 mg",
        form: "Tablet",
        pack: "10 × 15 Tablets",
        image: "/pancide-40.jpeg",
        description: "Targeted proton pump inhibitor for effective acid suppression, GERD, erosive esophagitis & peptic ulcer healing.",
        category: "gastro",
      },
      {
        id: "pancide-dsr",
        name: "Pancide DSR Cap",
        generic: "Pantoprazole Gastro-resistant & Domperidone Prolonged-release Capsules I.P.",
        form: "Capsule",
        pack: "10 × 15 Capsules",
        image: "/pancide-dsr.jpeg",
        description: "Dual-action acid control with prokinetic motility management for reflux esophagitis and persistent heartburn.",
        category: "gastro",
      },
      {
        id: "pancide-it",
        name: "Pancide IT Cap",
        generic: "Pantoprazole 40 mg + Itopride Hydrochloride 150 mg (SR) Capsules",
        form: "Capsule",
        pack: "10 × 10 Capsules",
        image: "/pancide-it.jpeg",
        description: "Advanced prokinetic-PPI combination engineered for non-ulcer dyspepsia & delayed gastric emptying.",
        category: "gastro",
      },
      {
        id: "pancide-l",
        name: "Pancide L Cap",
        generic: "Enteric Coated Pantoprazole Sodium & Levosulpiride (SR) Capsules",
        form: "Capsule",
        pack: "10 × 10 Capsules",
        image: "/pancide-l.jpeg",
        description: "Synergistic PPI & prokinetic formulation for refractory GERD, functional dyspepsia & nausea.",
        category: "gastro",
      },
      {
        id: "pancide-hp-kit",
        name: "Pancide HP Kit",
        generic: "Combipack of Clarithromycin, Pantoprazole & Amoxicillin Tablets",
        form: "Combi Kit",
        pack: "7 × 6 Tablets",
        image: "/pancide-hp-kit.jpeg",
        description: "Standardized 7-day triple therapy combipack for Helicobacter pylori infection eradication.",
        category: "gastro",
      },
      {
        id: "pancide-iv",
        name: "Pancide IV",
        generic: "Pantoprazole for Injection 40 mg (Lyophilized)",
        form: "Injection",
        pack: "1 × 5 Vials",
        image: "/pancide-iv.jpeg",
        description: "Rapid intravenous acid suppression for acute upper GI bleeding and critical gastric ulcer care.",
        category: "gastro",
      },
      {
        id: "anoraft-suspension",
        name: "Anoraft Suspension",
        generic: "Sodium Alginate, Sodium Bicarbonate & Calcium Carbonate Suspension",
        form: "Suspension",
        pack: "200 mL",
        image: "/anoraft-suspension.jpeg",
        description: "Fast-acting raft-forming barrier delivering rapid acid reflux relief in 3 minutes lasting up to 4 hours.",
        category: "gastro",
      },
    ],
  },
  {
    id: "hepato",
    label: "Hepatology & Special Care",
    blurb: "Hepatoprotective support and targeted GI antimicrobial therapy for specialist care.",
    items: [
      {
        id: "urodax-150",
        name: "Urodax 150 mg Tab",
        generic: "Ursodeoxycholic Acid Tablets IP 150 mg",
        form: "Tablet",
        pack: "10 × 10 Tablets",
        image: "/urodax-150.jpeg",
        description: "Hepatoprotective and choleretic agent for radiolucent gallstone dissolution & chronic liver protection.",
        category: "hepato",
      },
      {
        id: "urodax-300",
        name: "Urodax 300 Tab",
        generic: "Ursodeoxycholic Acid Tablets IP 300 mg",
        form: "Tablet",
        pack: "10 × 15 Tablets",
        image: "/urodax-300.jpeg",
        description: "High-strength ursodeoxycholic acid for primary biliary cholangitis & fatty liver management.",
        category: "hepato",
      },
      {
        id: "rifanac-200",
        name: "Rifanac 200",
        generic: "Rifaximin Tablets 200 mg",
        form: "Tablet",
        pack: "10 × 10 Tablets",
        image: "/rifanac-200.jpeg",
        description: "Non-systemic GI-targeted antibiotic for acute infectious traveler's diarrhea & gut infection control.",
        category: "hepato",
      },
      {
        id: "rifanac-400",
        name: "Rifanac 400",
        generic: "Rifaximin Tablets 400 mg",
        form: "Tablet",
        pack: "10 × 10 Tablets",
        image: "/rifanac-400.jpeg",
        description: "Targeted intestinal antimicrobial for bacterial overgrowth, intestinal infection & IBS-D.",
        category: "hepato",
      },
      {
        id: "rifanac-550",
        name: "Rifanac 550",
        generic: "Rifaximin Tablets 550 mg",
        form: "Tablet",
        pack: "10 × 10 Tablets",
        image: "/rifanac-550.jpeg",
        description: "First-line therapy for reducing recurrence of overt hepatic encephalopathy and managing IBS-D.",
        category: "hepato",
      },
    ],
  },
  {
    id: "supplements",
    label: "Supplements",
    blurb: "Advanced nutritional and restorative formulations for liver care, stamina and metabolic wellness.",
    items: [
      {
        id: "folovit-forte",
        name: "Folovit-Forte Cap",
        generic: "CoQ10, L-Carnitine, Lycopene, L-Arginine, B12, Folic Acid & Zinc",
        form: "Capsule",
        pack: "10 × 1 × 10 Capsules",
        image: "/folovit-forte.jpeg",
        description: "Potent antioxidant & cellular protection formula supporting liver function, energy production & cardiovascular health.",
        category: "supplements",
      },
      {
        id: "folovit-s",
        name: "Folovit-S Suspension",
        generic: "Silymarin, L-Carnitine, N-Acetyl Cysteine & B-Complex (Sugar Free)",
        form: "Suspension",
        pack: "200 mL",
        image: "/folovit-s.jpeg",
        description: "Sugar-free liquid liver care & restorative formula designed for detoxification, appetite improvement & stamina.",
        category: "supplements",
      },
    ],
  },
];

export const allProducts = categories.flatMap((c) => c.items);
