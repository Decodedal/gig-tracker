/*
  Warnings:

  - You are about to drop the column `instrumentId` on the `BandMember` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BandMember" DROP CONSTRAINT "BandMember_instrumentId_fkey";

-- AlterTable
ALTER TABLE "BandMember" DROP COLUMN "instrumentId";

-- CreateTable
CREATE TABLE "MusicianInstrument" (
    "bandMemberId" TEXT NOT NULL,
    "instrumentId" INTEGER NOT NULL,

    CONSTRAINT "MusicianInstrument_pkey" PRIMARY KEY ("bandMemberId","instrumentId")
);

-- AddForeignKey
ALTER TABLE "MusicianInstrument" ADD CONSTRAINT "MusicianInstrument_bandMemberId_fkey" FOREIGN KEY ("bandMemberId") REFERENCES "BandMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MusicianInstrument" ADD CONSTRAINT "MusicianInstrument_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
