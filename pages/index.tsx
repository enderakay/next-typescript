import { NextPage } from "next";
import NextLink from 'next/link';
import { Heading, Link, Flex } from "@chakra-ui/core";

const IndexPage: NextPage = () => {
    return (
        <Flex flexDirection="column" alignItems="center" margin={4}>
        <Heading as="h1" size="2xl" marginY="2rem">
          This is HOME page
        </Heading>
        <NextLink href="/about" passHref>
          <Link>Go to ABOUT</Link>
        </NextLink>
      </Flex>
    );
}

export default IndexPage;