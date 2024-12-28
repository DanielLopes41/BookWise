-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_categories" ("id", "name") SELECT "id", "name" FROM "categories";
DROP TABLE "categories";
ALTER TABLE "new_categories" RENAME TO "categories";
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
