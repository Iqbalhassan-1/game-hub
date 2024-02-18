import useData from "./useData";
import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// server data
// const useGenres = () => useData<Genre>("/genres");

//static
const useGenres = () => ({ data: genres, isLoading: null, error: null });

export default useGenres;
