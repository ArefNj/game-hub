import { GameQuery } from "../components/GameGrid";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        parent_platforms: gameQuery.platform?.id,
        genres: gameQuery.genre?.id,
        ordering: gameQuery.sortOrder
      },
    },
    [gameQuery]
  );
export default useGames;
