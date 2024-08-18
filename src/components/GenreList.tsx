import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  const skeletons = [...Array(20).keys()];
  if (error) return null;
  return (
    <>
      {isLoading &&
        skeletons.map((Skeleton) => (
          <GenreSkeleton key={Skeleton}></GenreSkeleton>
        ))}

      <Skeleton isLoaded={!isLoading}>
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Skeleton>
    </>
  );
};

export default GenreList;
