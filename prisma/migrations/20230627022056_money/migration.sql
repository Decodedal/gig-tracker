/*
  Warnings:

  - Added the required column `payment` to the `Musician_gig` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Musician_gig" ADD COLUMN     "payment" INTEGER NOT NULL;
