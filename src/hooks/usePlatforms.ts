import useData from "./useData";

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

const usePlatforms = () => useData<ParentPlatforms>("/platforms/lists/parents");

export default usePlatforms;
