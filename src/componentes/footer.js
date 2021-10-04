import { Flex } from '@chakra-ui/react';

export default function Footer() {
  const data = new Date().getFullYear();
  return (
    <Flex
      height="30px"
      bg="#495057"
      color="white"
      justifyContent="center"
      paddingTop="4px"
    >
      <label htmlFor="">©LeoJunkes | {data}</label>
    </Flex>
  );
}
