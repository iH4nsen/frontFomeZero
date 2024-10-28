import { ImageBackground, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import styles from '@/assets/styles/styles';
import { Link } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { NativeBaseProvider, Box, Button, VStack, Icon, HStack, Image } from 'native-base';
import React from 'react';

export default function App() {
  const Background = require('../assets/images/background-image.jpg');
  const FomeZero = require('../assets/images/fomeZero.png');

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={Background}
          resizeMode='cover'
          style={styles.background}
          accessibilityLabel={'Background'}
          alt='Background'
        >

          <VStack mb={'150px'} alignItems="center" mt={10} space={2}>
            <HStack alignItems={'center'}>
              <Text style={styles.title}>Fome Zero</Text>
              <Image
                source={FomeZero}
                width={150}
                height={140}
                accessibilityLabel={'Fome Zero'}
              />
            </HStack>
            <Text style={[styles.quoteText, { marginBottom: -80 }]}>
              "Fazer o bem, olhando a quem!"
            </Text>
          </VStack>

          <VStack alignItems="center" space={1}>
            <Button
              style={styles.button}
              leftIcon={<Icon as={FontAwesome5} name="hand-holding-heart" size={28} color="#DFA436" />}
              bg="white"
            >
              <Link style={styles.buttonText} href={'/ong'}>Quero Doar</Link>
            </Button>
          </VStack>

          <VStack space={3} alignItems="center">
            <Box alignItems="center" flexDirection="row">
              <Icon as={FontAwesome5} name="store" size={28} color="#DFA436" />
              <Text style={styles.partnerText}>Conheça nossos parceiros</Text>
            </Box>

            <VStack space={2} justifyContent="center">
              <Button

                style={styles.button}
                colorScheme="light"
                _text={styles.buttonText}
                onPress={() => console.log("Empresas")}
              >
                <Link style={styles.buttonText} href={'/instituition'}>Instituições</Link>
              </Button>
              <Button

                style={styles.button}
                colorScheme="light"
                _text={styles.buttonText}
                onPress={() => console.log("Supermercados")}
              >
                <Link style={styles.buttonText} href={'/partners'}>Supermercados</Link>
              </Button>
            </VStack>
          </VStack>


          <VStack alignItems="center">
            <Box alignItems="center" flexDirection="row">
              <Icon as={FontAwesome5} name="handshake" size={28} color="#DFA436" />
              <Text style={styles.partnerText}>Seja um apoiador</Text>
            </Box>

            <Button
              style={styles.button}
              colorScheme="light"
              _text={styles.buttonText}
              onPress={() => console.log("Apoiar")}
            >
              <Link style={styles.buttonText} href={'/more'}>Saiba Mais</Link>
            </Button>
          </VStack>
        </ImageBackground>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
