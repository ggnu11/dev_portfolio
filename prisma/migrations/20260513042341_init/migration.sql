-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FRONTEND', 'FRONTEND_LIBRARY', 'ENV', 'DESIGN', 'ETC');

-- CreateEnum
CREATE TYPE "ratio" AS ENUM ('PORTRAIT', 'LANDSCAPE', 'SQUARE');

-- CreateTable
CREATE TABLE "experience" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "period" VARCHAR(30) NOT NULL,
    "items" TEXT[],
    "links" JSONB[],
    "is_active" BOOLEAN,
    "sub_title" VARCHAR(100),
    "index" INTEGER NOT NULL,
    "skill_ids" INTEGER[],
    "category" VARCHAR(100),

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" INTEGER NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "sub_title" VARCHAR(150) NOT NULL,
    "period" VARCHAR(30) NOT NULL,
    "member" VARCHAR(100) NOT NULL,
    "skills" TEXT[],
    "links" JSONB[],
    "skill_ids" INTEGER[],
    "row_number" INTEGER,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectItem" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "content" TEXT[],
    "projectId" INTEGER,
    "blobUrl" VARCHAR(255),
    "row_number" INTEGER,
    "image_ratio" "ratio",

    CONSTRAINT "ProjectItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "intro" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "detail" TEXT NOT NULL,
    "blobUrl" VARCHAR(255),

    CONSTRAINT "intro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "date" VARCHAR(50) NOT NULL,
    "forwardLink" VARCHAR(255) NOT NULL,
    "bgImageUrl" VARCHAR(255) NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL,
    "items" TEXT[],
    "item" VARCHAR(255) NOT NULL,
    "blobUrl" VARCHAR(255) NOT NULL,

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "sub_title" VARCHAR(150) NOT NULL,
    "period" VARCHAR(50) NOT NULL,
    "items" TEXT[],
    "category" VARCHAR(50),

    CONSTRAINT "education_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectItem" ADD CONSTRAINT "ProjectItem_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
