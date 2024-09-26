-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "lastname" VARCHAR(55),
    "firstname" VARCHAR(55),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
