import { Flex, Button } from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex border='none' justifyContent='center'  height="55px" bg="#294596" color="white" paddingTop="15px">
      <Flex >
        <Popover>
          <PopoverTrigger>
            <Button bg="#f9bd07"  borderRadius='8px' h="38px" type="button">
              IMC o que é?
            </Button>
          </PopoverTrigger>
          <PopoverContent maxWidth="20rem" bg="#e94b1b">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader borderRadius='4' mt="14" color="#231d21">
              <b>Sobre IMC</b>
            </PopoverHeader>
            <PopoverBody color="#231d21">
              IMC é uma sigla utilizada para Índice de Massa Corporal. O Índice
              de Massa Corporal é uma medida utilizada para medir a obesidade
              adotada pela Organização Mundial de Saúde (OMS). É o padrão
              internacional para avaliar o grau de obesidade.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  );
}
