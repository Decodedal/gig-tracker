/*
  Warnings:

  - You are about to drop the column `bookedId` on the `Gig` table. All the data in the column will be lost.
  - You are about to drop the `BookedBy` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ceremony` to the `Gig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client` to the `Gig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cocktail` to the `Gig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_booked` to the `Gig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Gig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ceremony` to the `Musician_gig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cocktail` to the `Musician_gig` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Gig" DROP CONSTRAINT "Gig_bookedId_fkey";

-- AlterTable
ALTER TABLE "Gig" DROP COLUMN "bookedId",
ADD COLUMN     "ceremony" TEXT NOT NULL,
ADD COLUMN     "client" TEXT NOT NULL,
ADD COLUMN     "cocktail" TEXT NOT NULL,
ADD COLUMN     "date_booked" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Musician_gig" ADD COLUMN     "ceremony" BOOLEAN NOT NULL,
ADD COLUMN     "cocktail" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "BookedBy";
