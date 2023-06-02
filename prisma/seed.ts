import { PrismaClient } from '@prisma/client'

import {
  productMock,
  additionalIngredientMock
} from '../mock'

const prisma = new PrismaClient()

async function main() {
  additionalIngredientMock.forEach(async i => {
    await prisma.additionalIngredient.create({
      data: {
        name: i.name,
        image: i.image,
        description: i.description,
        price: i.price
      }
    })
  })
  
  await prisma.product.create({
    data: {
      name: productMock[0].name,
      image: productMock[0].image,
      description: productMock[0].description,
      price: productMock[0].price,
      category: productMock[0].category
    }
  })

  await prisma.product.create({
    data: {
      name: productMock[1].name,
      image: productMock[1].image,
      description: productMock[1].description,
      price: productMock[1].price,
      category: productMock[1].category
    }
  })

  await prisma.product.create({
    data: {
      name: productMock[2].name,
      image: productMock[2].image,
      description: productMock[2].description,
      price: productMock[2].price,
      category: productMock[2].category
    }
  })

  await prisma.product.create({
    data: {
      name: productMock[3].name,
      image: productMock[3].image,
      description: productMock[3].description,
      price: productMock[3].price,
      category: productMock[3].category
    }
  })

  await prisma.product.create({
    data: {
      name: productMock[4].name,
      image: productMock[4].image,
      description: productMock[4].description,
      price: productMock[4].price,
      category: productMock[4].category
    }
  })

  await prisma.product.create({
    data: {
      name: productMock[5].name,
      image: productMock[5].image,
      description: productMock[5].description,
      price: productMock[5].price,
      category: productMock[5].category
    }
  })

  const findProducts = await prisma.product.findMany()
  const findAdditionalIngredients = await prisma.additionalIngredient.findMany()
  const bacon = findAdditionalIngredients.find(i => i.name === "Bacon")
  const cheddar = findAdditionalIngredients.find(i => i.name === "Cheddar")
  const chocolateDrops = findAdditionalIngredients.find(i => i.name === "Gotas de chocolate")
  
  await prisma.additionalIngredientOnProduct.create({
    data: {
      productId: findProducts[0].id,
      additionalIngredientId: Number(bacon?.id)
    }
  })

  await prisma.additionalIngredientOnProduct.create({
    data: {
      productId: findProducts[0].id,
      additionalIngredientId: Number(cheddar?.id)
    }
  })

  await prisma.additionalIngredientOnProduct.create({
    data: {
      productId: findProducts[1].id,
      additionalIngredientId: Number(bacon?.id)
    }
  })

  await prisma.additionalIngredientOnProduct.create({
    data: {
      productId: findProducts[1].id,
      additionalIngredientId: Number(cheddar?.id)
    }
  })

  await prisma.additionalIngredientOnProduct.create({
    data: {
      productId: findProducts[2].id,
      additionalIngredientId: Number(bacon?.id)
    }
  })

  await prisma.additionalIngredientOnProduct.create({
    data: {
      productId: findProducts[2].id,
      additionalIngredientId: Number(cheddar?.id)
    }
  })

  await prisma.additionalIngredientOnProduct.create({
    data: {
      productId: findProducts[5].id,
      additionalIngredientId: Number(chocolateDrops?.id)
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })