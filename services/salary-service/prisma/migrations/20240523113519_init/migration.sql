-- CreateTable
CREATE TABLE "Salary" (
    "salary_id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "base_salary" INTEGER NOT NULL,
    "bonus" INTEGER NOT NULL,
    "pay_period" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'Ariary',

    CONSTRAINT "Salary_pkey" PRIMARY KEY ("salary_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Salary_employee_id_key" ON "Salary"("employee_id");
