-- DropForeignKey
ALTER TABLE "BandMember" DROP CONSTRAINT "BandMember_instrumentId_fkey";

-- AlterTable
ALTER TABLE "BandMember" ALTER COLUMN "instrumentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "BandMember" ADD CONSTRAINT "BandMember_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE SET NULL ON UPDATE CASCADE;
