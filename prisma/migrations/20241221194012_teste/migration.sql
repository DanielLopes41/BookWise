/*
  Warnings:

  - You are about to alter the column `created_at` on the `ratings` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ratings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rate" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "book_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL
);
INSERT INTO "new_ratings" ("book_id", "created_at", "description", "id", "rate", "user_id") SELECT "book_id", "created_at", "description", "id", "rate", "user_id" FROM "ratings";
DROP TABLE "ratings";
ALTER TABLE "new_ratings" RENAME TO "ratings";
CREATE INDEX "ratings_book_id_idx" ON "ratings"("book_id");
CREATE INDEX "ratings_user_id_idx" ON "ratings"("user_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
