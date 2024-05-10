/*
  Warnings:

  - Added the required column `id_accounts` to the `Conducteur` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_accounts` to the `Passager` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `conducteur` ADD COLUMN `id_accounts` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `passager` ADD COLUMN `id_accounts` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Passager` ADD CONSTRAINT `Passager_id_accounts_fkey` FOREIGN KEY (`id_accounts`) REFERENCES `Accounts`(`id_accounts`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Conducteur` ADD CONSTRAINT `Conducteur_id_accounts_fkey` FOREIGN KEY (`id_accounts`) REFERENCES `Accounts`(`id_accounts`) ON DELETE RESTRICT ON UPDATE CASCADE;
