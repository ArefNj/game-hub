import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface ParentPlatforms {
  id: number;
  name: string;
  slug: string;
  Platforms: Platform[];
}

const usePlatforms = () => ({ data: platforms, error: null, isLoading: false });
export default usePlatforms;
