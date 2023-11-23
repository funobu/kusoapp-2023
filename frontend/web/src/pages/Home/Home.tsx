import { FC, useEffect, useRef, useState } from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import BgImage from '/src/assets/bg.png';
import AddButtonImage from '/src/assets/Button.png';
import { authClient } from '../../shared/axios.ts';
import { Character } from '../../models/character.ts';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const HomePage: FC = () => {
  const inputImageRef = useRef<HTMLInputElement>(null);
  const [characterStorage, setCharacterStorage] = useState<Character[]>([]);
  const [charactersX, setCharactersX] = useState<number[]>([]);

  const onClickButton = async () => {
    inputImageRef.current?.click();
  };

  useEffect(() => {
    const updateX = () => {
      const newCharactersX = charactersX.map(characterX => {
        return Math.random() * 8 - 4;
      });
      console.log(newCharactersX);
      setCharactersX(newCharactersX);
    };

    setInterval(updateX, 2000);
  }, [characterStorage]);

  const handleFileChange = async () => {
    const file = inputImageRef.current?.files?.[0];
    if (file === undefined) {
      console.log('file is undefined');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    console.log('requesting...');
    const res = await authClient.post('/', formData, {
      responseType: 'blob',
    });
    console.log('response done!', res.headers['Content-Type']);
    const imageBlob = new Blob([res.data], { type: 'image/png' });
    console.log(imageBlob);
    const imageURL = URL.createObjectURL(imageBlob);
    console.log(imageURL);
    setCharacterStorage([
      ...characterStorage,
      {
        image: imageURL,
      },
    ]);
    setCharactersX([...charactersX, 0]);
  };

  return (
    <Box bgImage={`url(${BgImage})`} bgSize="cover" w="100vw" h="100vh">
      <Helmet>
        <title>集まれグッズ牧場</title>
      </Helmet>
      <Box position="fixed" bottom="140px" right="-20px">
        <Button
          variant="unstyled"
          _hover={{ opacity: 0.8 }}
          mr="xl"
          onClick={onClickButton}
        >
          <input
            type="file"
            hidden
            accept="image/*"
            ref={inputImageRef}
            onChange={() => handleFileChange()}
          />
          <Image src={AddButtonImage} />
        </Button>
      </Box>
      <Flex direction="column" py="xs">
        <Flex direction="row" justifyContent="space-between">
          <Box
            p="xs"
            bgColor="orange.100"
            w="500px"
            roundedRight="3xl"
            borderColor="orange.800"
            borderTopWidth="2px"
            borderBottomWidth="2px"
            borderRightWidth="2.5px"
          >
            <Text fontSize="lg" color="orange.800" fontWeight="semibold">
              Funobuさんのグッズ牧場
            </Text>
          </Box>
        </Flex>
        <Flex direction="row" mt="450px" ml="450px" gap="80px">
          {characterStorage.map((character, index) => (
            <motion.div key={index} animate={{ x: charactersX[index] }}>
              <Image src={character.image} w="100px" />
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomePage;
