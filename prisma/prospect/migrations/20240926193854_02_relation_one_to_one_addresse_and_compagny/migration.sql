/*
  Warnings:

  - A unique constraint covering the columns `[companyId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Address_companyId_key" ON "Address"("companyId");
