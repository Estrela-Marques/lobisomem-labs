-- AlterTable
ALTER TABLE "players" ALTER COLUMN "teamId" DROP NOT NULL,
ALTER COLUMN "teamId" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "_ChampionshipToPlayer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChampionshipToPlayer_AB_unique" ON "_ChampionshipToPlayer"("A", "B");

-- CreateIndex
CREATE INDEX "_ChampionshipToPlayer_B_index" ON "_ChampionshipToPlayer"("B");

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChampionshipToPlayer" ADD CONSTRAINT "_ChampionshipToPlayer_A_fkey" FOREIGN KEY ("A") REFERENCES "championships"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChampionshipToPlayer" ADD CONSTRAINT "_ChampionshipToPlayer_B_fkey" FOREIGN KEY ("B") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;
