/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import Head from 'next/head';
Table;
import {
  Button,
  Flex,
  Input,
  FormLabel,
  InputGroup,
  InputRightAddon,
  Stack,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imcresultado, setimcResultado] = useState(0);
  const [text, setText] = useState('');

  //Tabela de Referência

  const tabelaIMCm = (
    <Flex>
      <Table size="sm">
        <Thead>
          <Tr color='white'>
            <Th color="white">IMC</Th>
            <Th color="white">Classificação</Th>
            <Th color="white">Obesidade(Grau)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr color="black" bg="#abf45b">
            <Td>menor que 18,5</Td>
            <Td>Magreza</Td>
            <Td>0</Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );

  const tabelaIMCms = (
    <Flex>
      <Table size="sm">
        <Thead >
          <Tr color='white'>
            <Th color="white">IMC</Th>
            <Th color="white">Classificação</Th>
            <Th color="white">Obesidade(Grau)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* <Tr>
            <Td>menor que 18,5</Td>
            <Td>Magreza</Td>
            <Td>0</Td>
          </Tr> */}
          <Tr color="black" bg="#abf45b">
            <Td>ENTRE <b>18,5</b> E <b>24,9</b></Td>
            <Td>MAGREZA SAUDÁVEL</Td>
            <Td><b>0</b></Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );

  const tabelaIMCsobrepeso = (
    <Flex>
      <Table size="sm">
        <Thead >
          <Tr >
            <Th color="white">IMC</Th>
            <Th color="white">Classificação</Th>
            <Th color="white">Obesidade(Grau)</Th>
          </Tr>
        </Thead>
        <Tbody w="2rem">
          <Tr color="black" bg="#abf45b">
            <Td>ENTRE <b>25</b> E <b>29.9</b></Td>
            <Td>SOBREPESO</Td>
            <Td><b>1</b></Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );

  const tabelaIMCOb2 = (
    <Flex>
      <Table size="sm">
        <Thead >
          <Tr >
            <Th color="white">IMC</Th>
            <Th color="white">Classificação</Th>
            <Th color="white">Obesidade(Grau)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr color="black" bg="#abf45b">
            <Td>ENTRE <b>30</b> E <b>39.9</b></Td>
            <Td>OBESIDADE</Td>
            <Td><b>2</b></Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );

  const tabelaIMCOb3 = (
    <Flex>
      <Table size="md">
        <Thead>
          <Tr>
            <Th color="white">IMC</Th>
            <Th color="white">Classificação</Th>
            <Th color="white">Obesidade(Grau)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr  bg="#abf45b">
            <Td color="black">MAIOR QUE 40</Td>
            <Td>OBESIDADE MÓRBIDA!</Td>
            <Td><b>3</b></Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );

  function calcular(e) {
    e.preventDefault();
    const imcresultado = peso / (altura * altura);
    const imc = imcresultado * 10000;
    console.log(imc);
    console.log(imcresultado);

    if (imc < 18.4) {
      setText(tabelaIMCm);
    } else if (imc < 25) {
      setText(tabelaIMCms);
    } else if (imc < 30) {
      setText(tabelaIMCsobrepeso);
    } else if (imc < 40) {
      setText(tabelaIMCOb2);
    } else {
      setText(tabelaIMCOb3);
    }

    setimcResultado(imc);
  }

  function reload() {
    window.location.reload();
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
      <img style={{ width: '20rem' }} src="/imagens/junkes_Imc.png" />
      <Flex
        as="form"
        mb="180px"
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
                // min="0"
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
                // min="0"
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
              border="none"
              _hover="none"
            >
              {' '}
              Calcular
            </Button>
            <Input
              border="none"
              color="white"
              bg="Colors.red"
              type="reset"
              value="Limpar Valores"
            />
          </Stack>
          {text}

          <FormLabel
            m="auto"
            w="170px"
            borderBottom="1px solid"
            color="white"
            fontSize="4rem"
            mt="20px"
            textAlign="center"
          >
            {imcresultado.toFixed(1)}
          </FormLabel>
        </Flex>
        <Button
          onClick={reload}
          color="gray.900"
          bg="blue.100"
          type="button"
          m="10px auto"
          w="6rem"
          size="small"
        >
          Refresh
        </Button>
      </Flex>
    </Flex>
  );
}
