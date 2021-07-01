import { FormEvent, ChangeEvent, useState, FC } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { isStringNullUndefinedOrEmpty } from '../../../../../shared/src';

export const BeerSearch: FC = () => {
  const [beerName, setBeerName] = useState('');

  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Container
        maxW={'lg'}
        bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        direction={'column'}
      >
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}
        >
          Search for a Beer
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
        >
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'beerName'}
              type={'text'}
              required
              placeholder={'i.e. Pabst Blue Ribbon'}
              aria-label={'Beer name'}
              value={beerName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBeerName(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            {/*<Button
              colorScheme={state === 'success' ? 'green' : 'blue'}
              isLoading={state === 'submitting'}
              w="100%"
              type={state === 'success' ? 'button' : 'submit'}
            >
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>*/}
            <Button colorScheme={'blue'} w="100%">
              {/*<CheckIcon />*/}
              Search
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
};
