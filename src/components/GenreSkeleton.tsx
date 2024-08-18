import { Card, SkeletonCircle } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card padding={2} marginY={2} display="flex" borderRadius={8}>
      <SkeletonCircle size="32px" />
    </Card>
  );
};

export default GenreSkeleton;
