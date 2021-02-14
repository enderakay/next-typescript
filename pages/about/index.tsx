import { NextPage } from "next";
import NextLink from 'next/link';
import { Heading, Link, Flex } from "@chakra-ui/core";

const AboutPage : NextPage = () => {
    return ( 
        <Flex flexDirection="column" alignItems="center" margin={4}>
        <Heading as="h1" size="2xl" marginY="2rem">
          This is ABOUT page
        </Heading>
        <NextLink href="/" passHref>
          <Link>Go back home</Link>
        </NextLink>
        <NextLink href="/about/me" passHref>
          <Link>Go to me</Link>
        </NextLink>
      </Flex>
    );
}

export default AboutPage;