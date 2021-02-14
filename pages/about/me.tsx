import { NextPage } from "next";
import NextLink from 'next/link';
import { Heading, Link, Flex } from "@chakra-ui/core";

const AboutMePage : NextPage = () => {
    return ( 

                <Flex flexDirection="column" alignItems="center" margin={4}>
                <Heading as="h1" size="2xl" marginY="2rem">
                This is About me page
                </Heading>
                <NextLink href="/" passHref>
                  <Link>Go to home</Link>
                </NextLink>
                <NextLink href="/about" passHref>
                  <Link>Go to ABOUT</Link>
                </NextLink>
              </Flex>
    );
}

export default AboutMePage;