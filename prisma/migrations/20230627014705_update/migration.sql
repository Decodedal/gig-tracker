/*
  Warnings:

  - You are about to drop the column `Address` on the `BandMember` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `BandMember` table. All the data in the column will be lost.
  - You are about to drop the `Musician` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `BandMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `BandMember` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Musician" DROP CONSTRAINT "Musician_bandMemberId_fkey";

-- DropForeignKey
ALTER TABLE "Musician" DROP CONSTRAINT "Musician_gigId_fkey";

-- AlterTable
ALTER TABLE "BandMember" DROP COLUMN "Address",
DROP COLUMN "Name",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Musician";

-- CreateTable
CREATE TABLE "Musician_gig" (
    "gigId" INTEGER NOT NULL,
    "bandMemberId" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL,

    CONSTRAINT "Musician_gig_pkey" PRIMARY KEY ("gigId")
);

-- AddForeignKey
ALTER TABLE "Musician_gig" ADD CONSTRAINT "Musician_gig_bandMemberId_fkey" FOREIGN KEY ("bandMemberId") REFERENCES "BandMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Musician_gig" ADD CONSTRAINT "Musician_gig_gigId_fkey" FOREIGN KEY ("gigId") REFERENCES "Gig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
