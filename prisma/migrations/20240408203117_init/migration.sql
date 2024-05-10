/*
  Warnings:

  - You are about to drop the column `heure_depart` on the `trajet` table. All the data in the column will be lost.
  - You are about to drop the column `point_arrive` on the `trajet` table. All the data in the column will be lost.
  - Added the required column `date_depart` to the `Trajet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `trajet` DROP COLUMN `heure_depart`,
    DROP COLUMN `point_arrive`,
    ADD COLUMN `date_depart` DATETIME(3) NOT NULL;
