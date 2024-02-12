import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

function UserBadge({ user, handleFunction }) {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="teal"
      color="white"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={2} />
    </Box>
  );
}

export default UserBadge;
