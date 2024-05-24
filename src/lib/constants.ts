// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

export const COLORS = [
  {label: "Preto", value: "black", tw: 'zinc-900'},
  {label: "Azul", value: "blue", tw: 'blue-950'},
  {label: "Rosa", value: "rose", tw: 'rose-950'},
] as const

export const MODELS = {
  name: "models",
  options: [
    {
      label: "Iphone X",
      value: "iphonex"
    },
    {
      label: "Iphone 11",
      value: "iphone11"
    },
    {
      label: "Iphone 12",
      value: "iphone12"
    },
    {
      label: "Iphone 13",
      value: "iphone13"
    },
    {
      label: "Iphone 14",
      value: "iphone14"
    },
    {
      label: "Iphone 15",
      value: "iphone15"
    },
  ],
} as const

export const PRODUCT_PRICES = {
  material: {
    silicone: 0,
    polycarbonate: 15_00,
  },
  finish: {
    smooth: 0,
    textured: 20_00
  }
} as const

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone
    },
    {
      label: "Soft Policarbonato",
      value: "polycarbonate",
      description: "Material mais resistente a quedas",
      price: PRODUCT_PRICES.material.polycarbonate
    },
  ]
} as const

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Acabamento fofo",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth
    },
    {
      label: "Acabamento texturizado",
      value: "textured",
      description: "Textura macia e antiderrapante",
      price: PRODUCT_PRICES.finish.textured
    },
  ]
} as const

export const BASE_PRICE = 50_00