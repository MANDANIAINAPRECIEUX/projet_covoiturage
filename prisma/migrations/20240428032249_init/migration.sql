/*
  Warnings:

  - You are about to drop the column `email_accounts` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `typeAccount` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `id_accounts` on the `passager` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Accounts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clerkId]` on the table `Accounts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telephone_passager]` on the table `Accounts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telephone_conducteur]` on the table `Accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkId` to the `Accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone_conducteur` to the `Accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone_passager` to the `Accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `conducteur` DROP FOREIGN KEY `Conducteur_id_accounts_fkey`;

-- DropForeignKey
ALTER TABLE `passager` DROP FOREIGN KEY `Passager_id_accounts_fkey`;

-- DropIndex
DROP INDEX `Accounts_email_accounts_key` ON `accounts`;

-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `email_accounts`,
    DROP COLUMN `typeAccount`,
    ADD COLUMN `clerkId` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `telephone_conducteur` VARCHAR(191) NOT NULL,
    ADD COLUMN `telephone_passager` VARCHAR(191) NOT NULL,
    ADD COLUMN `type_accounts` ENUM('ADMIN', 'PASSAGER', 'CONDUCTEUR') NOT NULL DEFAULT 'PASSAGER';

-- AlterTable
ALTER TABLE `conducteur` MODIFY `id_accounts` INTEGER NULL;

-- AlterTable
ALTER TABLE `passager` DROP COLUMN `id_accounts`;

-- CreateIndex
CREATE UNIQUE INDEX `Accounts_email_key` ON `Accounts`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Accounts_clerkId_key` ON `Accounts`(`clerkId`);

-- CreateIndex
CREATE UNIQUE INDEX `Accounts_telephone_passager_key` ON `Accounts`(`telephone_passager`);

-- CreateIndex
CREATE UNIQUE INDEX `Accounts_telephone_conducteur_key` ON `Accounts`(`telephone_conducteur`);

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_telephone_passager_fkey` FOREIGN KEY (`telephone_passager`) REFERENCES `Passager`(`telephone_passager`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_telephone_conducteur_fkey` FOREIGN KEY (`telephone_conducteur`) REFERENCES `Conducteur`(`telephone_conducteur`) ON DELETE RESTRICT ON UPDATE CASCADE;
