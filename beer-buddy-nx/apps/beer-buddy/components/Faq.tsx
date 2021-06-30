/* This example requires Tailwind CSS v2.0+ */
import { FC } from 'react';

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
  <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div className="max-w-2xl lg:mx-auto lg:text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        Infrequently asked questions
      </h2>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        I'm sure you're wondering why I wrote an app about beer, and to be quite
        honest, I am too.
      </p>
    </div>
    <div className="mt-20">
      <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="font-semibold text-gray-900 dark:text-gray-50">
              {faq.question}
            </dt>
            <dd className="mt-3 text-gray-500 dark:text-gray-300">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);
