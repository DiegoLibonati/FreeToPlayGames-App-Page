import { CardGameInGamesProps } from "../../../entities/entities";
import { useGamesStore } from "../../../hooks/exports";

export const CardGameInGames = ({
  thumbnail,
  title,
  game,
}: CardGameInGamesProps): JSX.Element => {
  const { onActiveGame } = useGamesStore();

  const showActiveGame = () => {
    onActiveGame(game);
  };
  return (
    <article
      className="main_games_section_container_grid_games_game"
      onClick={() => showActiveGame()}
    >
      <img src={thumbnail} alt={title}></img>

      <h2>{title}</h2>
    </article>
  );
};
