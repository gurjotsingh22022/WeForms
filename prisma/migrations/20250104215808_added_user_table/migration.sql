-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "max_submissions" INTEGER NOT NULL DEFAULT 300;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "provider" TEXT,
ADD COLUMN     "provider_user_id" TEXT;

-- CreateTable
CREATE TABLE "AddedUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "parentUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AddedUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddedUser_apiKey_key" ON "AddedUser"("apiKey");

-- CreateIndex
CREATE UNIQUE INDEX "AddedUser_parentUserId_email_key" ON "AddedUser"("parentUserId", "email");

-- AddForeignKey
ALTER TABLE "AddedUser" ADD CONSTRAINT "AddedUser_parentUserId_fkey" FOREIGN KEY ("parentUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
