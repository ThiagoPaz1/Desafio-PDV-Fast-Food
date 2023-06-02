enum Category {
  SANDWICH = "SANDWICH",
  ACCOMPANIMENTS = "ACCOMPANIMENTS",
  DRINKS = "DRINKS",
  DESSERT = "DESSERT"
}

export const additionalIngredientMock = [
  {
    name: "Bacon",
    image: "https://i.ibb.co/br0mnkW/bacon.jpg",
    description: "10g",
    price: 1,
  },
  {
    name: "Cheddar",
    image: "https://i.ibb.co/dKjBwyV/cheddar.jpg",
    description: "10g",
    price: 1
  },
  {
    name: "Gotas de chocolate",
    image: "https://i.ibb.co/F6J7XpX/gotas-de-chocolate.jpg",
    description: "",
    price: 1
  }
]

export const productMock = [
  {
    name: "Sanduíche de frago",
    image: "https://i.ibb.co/YkJn0pq/sanduiche.jpg",
    description: "Frango desfiado",
    price: 15,
    category: Category.SANDWICH,
    additionalIngredientsIds: ""
  },
  {
    name: "Sanduíche misto",
    image: "https://i.ibb.co/YkJn0pq/sanduiche.jpg",
    description: "Presunto e queijo",
    price: 10,
    category: Category.SANDWICH,
    additionalIngredientsIds: ""
  },
  {
    name: "Sanduíche de fíle de carne",
    image: "https://i.ibb.co/YkJn0pq/sanduiche.jpg",
    description: "Fíle de carne",
    price: 20,
    category: Category.SANDWICH,
    additionalIngredientsIds: ""
  },
  {
    name: "Batatas fritas",
    image: "https://i.ibb.co/gWtDjv1/batata-fritas.jpg",
    description: "",
    price: 10,
    category: Category.ACCOMPANIMENTS,
    additionalIngredientsIds: ""
  },
  {
    name: "Refrigerante",
    image: "https://i.ibb.co/n7ymZ8w/refrigerante.jpg",
    description: "",
    price: 5,
    category: Category.DRINKS,
    additionalIngredientsIds: ""
  },
  {
    name: "Doce",
    image: "https://i.ibb.co/6Xybmxr/sobremesa.webp",
    description: "",
    price: 7,
    category: Category.DESSERT,
    additionalIngredientsIds: ""
  }
]