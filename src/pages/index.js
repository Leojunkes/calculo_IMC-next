/* eslint-disable react/no-children-prop */
import Head from 'next/head';

import {
  Button,
  Flex,
  Input,
  FormLabel,
  InputGroup,
  InputRightAddon,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imcresultado, setimcResultado] = useState(0);
  const [imctext, setImcText] = useState('');

  function calcular(e) {
    e.preventDefault();
    const imcresultado = peso / (altura * altura);
    const imc = imcresultado * 10000;
    const imcText = '';
    console.log(imc);

    setImcText(imcText);
    setimcResultado(imc);
  }

  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>Junkes | IMC</title>
      </Head>
      <Flex
        as="form"
        mb="4"
        h="400px"
        width="80%"
        flexDirection="column"
        borderRadius="4"
        border="1px solid"
        type="OnSubmit"
        justifyContent="center"
        bg="Colors.blue"
      >
        <Flex flexDirection="column">
          <Stack>
            <InputGroup flexDirection="column">
              <Input
                placeholder="Sua Altura"
                _placeholder={{ color: 'Colors.gray900' }}
                type="number"
                onChange={(e) => setAltura(e.target.value)}
                borderRadius="8"
                pattern="[0-9]+([,\.][0-9]+)?"
                min="0"
                step="any"
                inputMode="numeric"
                bg="Colors.yellow"
                border="none"
                w="100%"
              />
              <InputRightAddon
                borderRadius="none"
                position="absolute"
                right="0"
                w="50px"
                children="cm"
              />
            </InputGroup>
            <InputGroup>
              <Input
                placeholder="Seu Peso"
                _placeholder={{ color: 'Colors.gray900' }}
                border="none"
                type="number"
                onChange={(e) => setPeso(e.target.value)}
                borderRadius="8"
                pattern="[0-9]+([,\.][0-9]+)?"
                min="0"
                step="any"
                
                bg="Colors.yellow"
                w="100%"
              />

              <InputRightAddon
                borderRadius="none"
                position="absolute"
                right="0"
                w="50px"
                children="kg"
              />
            </InputGroup>

            <Button
              color="Colors.gray900"
              bg="Colors.orange"
              onClick={calcular}
              name="calcular"
              type="submit"
              border='none'
              _hover='none'
            >
              {' '}
              Calcular
            </Button>
            <Input border='none' color='white' bg='Colors.red' type="reset" value="Limpar Valores" />
          </Stack>
          <FormLabel
            m="auto"
            w="170px"
            borderBottom="1px solid"
            color="white"
            fontSize="4rem"
            mt="20px"
            textAlign="center"
          >
            {imcresultado.toFixed(2)}
          </FormLabel>
        </Flex>
      </Flex>
    </Flex>
  );
}
