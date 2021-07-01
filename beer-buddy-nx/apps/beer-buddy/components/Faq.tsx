/* This example requires Tailwind CSS v2.0+ */
import { FC } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import {
  FcDoughnutChart,
  FcMultipleDevices,
  FcPrivacy,
  FcTimeline,
} from 'react-icons/fc';
import FaqQuestion from './FaqQuestion';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What's it written with?",
    answer:
      'A little bit of this, and a little bit of that. The API powering this site is written with Ruby on Rails sitting atop a Postgres database. The frontend is all React (Next.js) built with Nx tooling.',
  },
  {
    question: "Where's it hosted?",
    answer:
      'The API is running within a container deployed with Azure connected to a Postgres database, also hosted by Azure. The frontend is served using Vercel, the creators of Next.js (the best way to write React, IMO), using a mix of Nx, Tailwind CSS, and Redux.',
  },
  {
    question: "What's your favorite stack?",
    answer:
      "I'm partial to the .NET stack, especially with onset the of Blazor (all aboard the fullstack C# hype train). Needless to say, I like working with any technology that allows me to be in front of an IDE building something cool. I've worked professionally in quite a few different stacks (.NET, Java, Node, and even IBM). My favorite stack currently outside the workplace is Node with NestJS, Angular, Postgres, etc.",
  },
  {
    question: "What's your favorite beer?",
    answer:
      'An IPA named Hexagenia from a brewery called Fall River Brewery in my hometown of Redding, CA.',
  },
];

export const Faq: FC = () => (
  <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacingX="10"
      spacingY={{ base: '8', md: '14' }}
    >
      <FaqQuestion title="Secure by default" icon={<FcPrivacy />}>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus.
      </FaqQuestion>
      <FaqQuestion title="Always up to date" icon={<FcTimeline />}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore.
      </FaqQuestion>
      <FaqQuestion title="Incredible statistics" icon={<FcDoughnutChart />}>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus.
      </FaqQuestion>
      <FaqQuestion
        title="Support for multiple devices"
        icon={<FcMultipleDevices />}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore.
      </FaqQuestion>
    </SimpleGrid>
  </Box>
);
