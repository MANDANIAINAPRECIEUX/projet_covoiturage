/*
  Warnings:

  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `conducteur` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `emplacement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `emplacementtrajet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `passager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reservation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trajet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `Accounts_telephone_conducteur_fkey`;

-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `Accounts_telephone_passager_fkey`;

-- DropForeignKey
ALTER TABLE `emplacementtrajet` DROP FOREIGN KEY `EmplacementTrajet_id_emplacement_fkey`;

-- DropForeignKey
ALTER TABLE `emplacementtrajet` DROP FOREIGN KEY `EmplacementTrajet_id_trajet_fkey`;

-- DropForeignKey
ALTER TABLE `reservation` DROP FOREIGN KEY `Reservation_id_passager_fkey`;

-- DropForeignKey
ALTER TABLE `reservation` DROP FOREIGN KEY `Reservation_id_trajet_fkey`;

-- DropForeignKey
ALTER TABLE `trajet` DROP FOREIGN KEY `Trajet_id_conducteur_fkey`;

-- DropTable
DROP TABLE `accounts`;

-- DropTable
DROP TABLE `conducteur`;

-- DropTable
DROP TABLE `emplacement`;

-- DropTable
DROP TABLE `emplacementtrajet`;

-- DropTable
DROP TABLE `passager`;

-- DropTable
DROP TABLE `reservation`;

-- DropTable
DROP TABLE `trajet`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
