-- CreateEnum
CREATE TYPE "Category" AS ENUM ('SANDWICH', 'ACCOMPANIMENTS', 'DRINKS', 'DESSERT');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PREPARING', 'READY');

-- CreateTable
CREATE TABLE "additionalIngredients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "additionalIngredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderItems" (
    "id" SERIAL NOT NULL,
    "productQuantity" INTEGER NOT NULL,
    "observation" TEXT NOT NULL,
    "totalOrderItemPrice" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "orderItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "clientName" TEXT NOT NULL,
    "totalOrderPrice" INTEGER NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdditionalIngredientOnProduct" (
    "productId" INTEGER NOT NULL,
    "additionalIngredientId" INTEGER NOT NULL,

    CONSTRAINT "AdditionalIngredientOnProduct_pkey" PRIMARY KEY ("productId","additionalIngredientId")
);

-- CreateTable
CREATE TABLE "AdditionalIngredientOnOrderItem" (
    "orderItemId" INTEGER NOT NULL,
    "additionalIngredientId" INTEGER NOT NULL,

    CONSTRAINT "AdditionalIngredientOnOrderItem_pkey" PRIMARY KEY ("orderItemId","additionalIngredientId")
);

-- AddForeignKey
ALTER TABLE "orderItems" ADD CONSTRAINT "orderItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItems" ADD CONSTRAINT "orderItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdditionalIngredientOnProduct" ADD CONSTRAINT "AdditionalIngredientOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdditionalIngredientOnProduct" ADD CONSTRAINT "AdditionalIngredientOnProduct_additionalIngredientId_fkey" FOREIGN KEY ("additionalIngredientId") REFERENCES "additionalIngredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdditionalIngredientOnOrderItem" ADD CONSTRAINT "AdditionalIngredientOnOrderItem_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "orderItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdditionalIngredientOnOrderItem" ADD CONSTRAINT "AdditionalIngredientOnOrderItem_additionalIngredientId_fkey" FOREIGN KEY ("additionalIngredientId") REFERENCES "additionalIngredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
