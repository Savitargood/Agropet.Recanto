export const PHONE_DISPLAY = "(61) 3575-4411";
export const PHONE_TEL = "+556135754411";
export const WHATSAPP_NUMBER = "556135754411";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export type Product = {
  name: string;
  brand: string;
  size: string;
  price: string;
  from?: string;
  badge?: string;
  category: "caes" | "gatos" | "farmacia" | "acessorios";
};

export const CATEGORIES = [
  { id: "caes", label: "Rações Cães" },
  { id: "gatos", label: "Rações Gatos" },
  { id: "farmacia", label: "Farmácia Vet" },
  { id: "acessorios", label: "Acessórios" },
] as const;

export const PRODUCTS: Product[] = [
  {
    name: "Ração Adulto Carne",
    brand: "Premium Cães",
    size: "15 kg",
    price: "R$ 99,99",
    from: "R$ 129,90",
    badge: "-23%",
    category: "caes",
  },
  {
    name: "Ração Filhotes Frango",
    brand: "Premium Cães",
    size: "10,1 kg",
    price: "R$ 119,90",
    badge: "Mais vendida",
    category: "caes",
  },
  {
    name: "Ração Super Premium",
    brand: "Linha Natural",
    size: "15 kg",
    price: "R$ 229,90",
    from: "R$ 269,90",
    badge: "-15%",
    category: "caes",
  },
  {
    name: "Ração Raças Pequenas",
    brand: "Premium Cães",
    size: "10,1 kg",
    price: "R$ 149,90",
    category: "caes",
  },
  {
    name: "Ração Gatos Adultos",
    brand: "Sabor Peixe",
    size: "10,1 kg",
    price: "R$ 139,90",
    from: "R$ 165,00",
    badge: "-15%",
    category: "gatos",
  },
  {
    name: "Ração Gatos Castrados",
    brand: "Linha Urinary",
    size: "3 kg",
    price: "R$ 79,90",
    badge: "Indicada",
    category: "gatos",
  },
  {
    name: "Areia Sanitária",
    brand: "Higiênica",
    size: "4 kg",
    price: "R$ 19,90",
    category: "gatos",
  },
  {
    name: "Antipulgas e Carrapatos",
    brand: "Uso veterinário",
    size: "Dose única",
    price: "R$ 59,90",
    badge: "Farmácia",
    category: "farmacia",
  },
  {
    name: "Vermífugo Cães e Gatos",
    brand: "Uso veterinário",
    size: "4 comprimidos",
    price: "R$ 34,90",
    category: "farmacia",
  },
  {
    name: "Suplemento Vitamínico",
    brand: "Pele e pelagem",
    size: "60 ml",
    price: "R$ 44,90",
    category: "farmacia",
  },
  {
    name: "Coleira + Guia",
    brand: "Nylon reforçado",
    size: "Tam. M",
    price: "R$ 39,90",
    badge: "Novidade",
    category: "acessorios",
  },
  {
    name: "Comedouro Duplo Inox",
    brand: "Antiderrapante",
    size: "Médio",
    price: "R$ 49,90",
    category: "acessorios",
  },
  {
    name: "Caminha Pet Macia",
    brand: "Conforto",
    size: "Tam. G",
    price: "R$ 89,90",
    from: "R$ 109,90",
    badge: "-18%",
    category: "acessorios",
  },
];

export const GROOMING = [
  {
    title: "Banho Simples",
    price: "R$ 45",
    note: "Porte pequeno",
    items: ["Banho com produtos hipoalergênicos", "Secagem e escovação", "Perfume pet", "Corte de unhas"],
  },
  {
    title: "Banho + Tosa Higiênica",
    price: "R$ 70",
    note: "Porte pequeno e médio",
    items: [
      "Tudo do banho simples",
      "Tosa higiênica",
      "Limpeza de ouvidos",
      "Hidratação da pelagem",
    ],
    highlight: true,
  },
  {
    title: "Banho + Tosa na Máquina",
    price: "R$ 95",
    note: "Consulte portes maiores",
    items: ["Tosa completa na máquina", "Hidratação profunda", "Corte de unhas e ouvidos", "Finalização com perfume"],
  },
];
