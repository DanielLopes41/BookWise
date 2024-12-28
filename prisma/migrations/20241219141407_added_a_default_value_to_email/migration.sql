/*
  Warnings:

  - You are about to drop the column `provider_account_id` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `session_token` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `sessions` table. All the data in the column will be lost.
  - Added the required column `providerAccountId` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionToken` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CategoriesOnBooks" (
    "book_id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    PRIMARY KEY ("book_id", "categoryId")
);
INSERT INTO "new_CategoriesOnBooks" ("book_id", "categoryId") SELECT "book_id", "categoryId" FROM "CategoriesOnBooks";
DROP TABLE "CategoriesOnBooks";
ALTER TABLE "new_CategoriesOnBooks" RENAME TO "CategoriesOnBooks";
CREATE INDEX "CategoriesOnBooks_categoryId_idx" ON "CategoriesOnBooks"("categoryId");
CREATE INDEX "CategoriesOnBooks_book_id_idx" ON "CategoriesOnBooks"("book_id");
CREATE TABLE "new_accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "email" TEXT NOT NULL DEFAULT 'temporary@example.com',
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT
);
INSERT INTO "new_accounts" ("access_token", "expires_at", "id", "id_token", "provider", "refresh_token", "scope", "session_state", "token_type", "type") SELECT "access_token", "expires_at", "id", "id_token", "provider", "refresh_token", "scope", "session_state", "token_type", "type" FROM "accounts";
DROP TABLE "accounts";
ALTER TABLE "new_accounts" RENAME TO "accounts";
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");
CREATE INDEX "accounts_userId_idx" ON "accounts"("userId");
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");
CREATE TABLE "new_ratings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rate" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "book_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL
);
INSERT INTO "new_ratings" ("book_id", "created_at", "description", "id", "rate", "user_id") SELECT "book_id", "created_at", "description", "id", "rate", "user_id" FROM "ratings";
DROP TABLE "ratings";
ALTER TABLE "new_ratings" RENAME TO "ratings";
CREATE INDEX "ratings_book_id_idx" ON "ratings"("book_id");
CREATE INDEX "ratings_user_id_idx" ON "ratings"("user_id");
CREATE TABLE "new_sessions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);
INSERT INTO "new_sessions" ("expires", "id") SELECT "expires", "id" FROM "sessions";
DROP TABLE "sessions";
ALTER TABLE "new_sessions" RENAME TO "sessions";
CREATE UNIQUE INDEX "sessions_sessionToken_key" ON "sessions"("sessionToken");
CREATE INDEX "sessions_userId_idx" ON "sessions"("userId");
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL DEFAULT 'temporary@example.com',
    "emailVerified" DATETIME
);
INSERT INTO "new_users" ("avatar_url", "created_at", "id", "name") SELECT "avatar_url", "created_at", "id", "name" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
