/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Passager` (
    `id_passager` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_passager` VARCHAR(191) NOT NULL,
    `prenom_passager` VARCHAR(191) NOT NULL,
    `email_passager` VARCHAR(191) NOT NULL,
    `telephone_passager` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Passager_email_passager_key`(`email_passager`),
    UNIQUE INDEX `Passager_telephone_passager_key`(`telephone_passager`),
    PRIMARY KEY (`id_passager`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Conducteur` (
    `id_conducteur` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_conducteur` VARCHAR(191) NOT NULL,
    `prenom_conducteur` VARCHAR(191) NOT NULL,
    `email_conducteur` VARCHAR(191) NOT NULL,
    `telephone_conducteur` VARCHAR(191) NOT NULL,
    `id_accounts` INTEGER NULL,

    UNIQUE INDEX `Conducteur_email_conducteur_key`(`email_conducteur`),
    UNIQUE INDEX `Conducteur_telephone_conducteur_key`(`telephone_conducteur`),
    PRIMARY KEY (`id_conducteur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trajet` (
    `id_trajet` INTEGER NOT NULL AUTO_INCREMENT,
    `type_vehicule` VARCHAR(191) NOT NULL,
    `nombre_de_place_libre` INTEGER NOT NULL,
    `pt_A` VARCHAR(191) NOT NULL,
    `pt_B` VARCHAR(191) NOT NULL,
    `pt_C` VARCHAR(191) NOT NULL,
    `pt_D` VARCHAR(191) NOT NULL,
    `date_depart` DATETIME(3) NOT NULL,
    `id_conducteur` INTEGER NULL,

    PRIMARY KEY (`id_trajet`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `id_reservation` INTEGER NOT NULL AUTO_INCREMENT,
    `date_heure` DATETIME(3) NOT NULL,
    `id_passager` INTEGER NOT NULL,
    `id_trajet` INTEGER NOT NULL,

    PRIMARY KEY (`id_reservation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emplacement` (
    `id_emplacement` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_emplacement` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_emplacement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmplacementTrajet` (
    `id_emplacement` INTEGER NOT NULL,
    `id_trajet` INTEGER NOT NULL,

    PRIMARY KEY (`id_emplacement`, `id_trajet`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accounts` (
    `id_accounts` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `type_accounts` ENUM('ADMIN', 'PASSAGER', 'CONDUCTEUR') NOT NULL DEFAULT 'PASSAGER',
    `email` VARCHAR(191) NOT NULL,
    `clerkId` VARCHAR(191) NOT NULL,
    `id_passager` INTEGER NULL,
    `id_conducteur` INTEGER NULL,

    UNIQUE INDEX `Accounts_username_key`(`username`),
    UNIQUE INDEX `Accounts_email_key`(`email`),
    UNIQUE INDEX `Accounts_clerkId_key`(`clerkId`),
    UNIQUE INDEX `Accounts_id_passager_key`(`id_passager`),
    UNIQUE INDEX `Accounts_id_conducteur_key`(`id_conducteur`),
    PRIMARY KEY (`id_accounts`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Trajet` ADD CONSTRAINT `Trajet_id_conducteur_fkey` FOREIGN KEY (`id_conducteur`) REFERENCES `Conducteur`(`id_conducteur`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_id_passager_fkey` FOREIGN KEY (`id_passager`) REFERENCES `Passager`(`id_passager`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_id_trajet_fkey` FOREIGN KEY (`id_trajet`) REFERENCES `Trajet`(`id_trajet`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmplacementTrajet` ADD CONSTRAINT `EmplacementTrajet_id_emplacement_fkey` FOREIGN KEY (`id_emplacement`) REFERENCES `Emplacement`(`id_emplacement`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmplacementTrajet` ADD CONSTRAINT `EmplacementTrajet_id_trajet_fkey` FOREIGN KEY (`id_trajet`) REFERENCES `Trajet`(`id_trajet`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_id_passager_fkey` FOREIGN KEY (`id_passager`) REFERENCES `Passager`(`id_passager`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_id_conducteur_fkey` FOREIGN KEY (`id_conducteur`) REFERENCES `Conducteur`(`id_conducteur`) ON DELETE SET NULL ON UPDATE CASCADE;
