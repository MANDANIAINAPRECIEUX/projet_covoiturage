/*
  Warnings:

  - You are about to drop the column `clerkId` on the `accounts` table. All the data in the column will be lost.
  - Added the required column `password` to the `Accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Accounts_clerkId_key` ON `accounts`;

-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `clerkId`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;
