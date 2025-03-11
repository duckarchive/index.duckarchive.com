-- CreateExtension
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'EDITOR', 'USER');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "is_blacklisted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resources" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "is_blacklisted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persons" (
    "first_name" VARCHAR(255) NOT NULL,
    "first_name_normalized" VARCHAR(255),
    "last_name" VARCHAR(255) NOT NULL,
    "last_name_normalized" VARCHAR(255),
    "middle_name" VARCHAR(255),
    "father_name_normalized" VARCHAR(255),
    "is_male" BOOLEAN,
    "birth_date" VARCHAR(255) NOT NULL,
    "is_birth_date_approx" BOOLEAN NOT NULL DEFAULT false,
    "birth_date_normalized" TIMESTAMP(3),
    "birth_place" VARCHAR(255),
    "birth_place_lat" DOUBLE PRECISION,
    "birth_place_lon" DOUBLE PRECISION,
    "record_id" UUID NOT NULL,
    "record_date" VARCHAR(255) NOT NULL,
    "is_record_date_approx" BOOLEAN NOT NULL DEFAULT false,
    "record_date_normalized" TIMESTAMP(3),
    "record_place" VARCHAR(255),
    "record_place_lat" DOUBLE PRECISION,
    "record_place_lon" DOUBLE PRECISION,
    "record_type" VARCHAR(255) NOT NULL,
    "record_type_normalized" VARCHAR(255),
    "archive" VARCHAR(255) NOT NULL,
    "fund" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "case" VARCHAR(255) NOT NULL,
    "page" VARCHAR(255),
    "note" VARCHAR(255),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),
    "author_id" UUID NOT NULL,
    "resource_id" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "first_names" (
    "name" TEXT NOT NULL,
    "normalized_name" TEXT NOT NULL,
    "is_male" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "first_name_gin_trgm_ops_idx" ON "persons" USING GIN ("first_name" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "last_name_gin_trgm_ops_idx" ON "persons" USING GIN ("last_name" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "middle_name_gin_trgm_ops_idx" ON "persons" USING GIN ("middle_name" gin_trgm_ops);

-- CreateIndex
CREATE UNIQUE INDEX "persons_first_name_last_name_record_id_author_id_resource_i_key" ON "persons"("first_name", "last_name", "record_id", "author_id", "resource_id");

-- CreateIndex
CREATE UNIQUE INDEX "first_names_name_key" ON "first_names"("name");

-- AddForeignKey
ALTER TABLE "persons" ADD CONSTRAINT "persons_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "persons" ADD CONSTRAINT "persons_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
