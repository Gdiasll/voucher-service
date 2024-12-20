CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CreateTable
CREATE TABLE "voucher" (
    "id" UUID NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresIn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "voucher_pkey" PRIMARY KEY ("id")
);
