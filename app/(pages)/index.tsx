import { ImageBackground, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import styles from '@/assets/styles/styles';
import { Link } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { NativeBaseProvider, Box, Button, VStack, Icon } from 'native-base';

export default function HomeScreen() {
  const Background = require('../images/background-image.jpg');

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={Background}
          resizeMode='cover'
          style={styles.background}
        >
        
          <VStack mb={'150px'} alignItems="center" mt={10} space={2}>
            <Text style={styles.titleText}>FOME ZERO</Text>
            <Text style={styles.quoteText}>
              "Fazer o bem, olhando a quem!"
            </Text>
          </VStack>

          <VStack space={4} my={2} alignItems="center">
            <Button
              width={300}
              style={styles.button}
              leftIcon={<Icon as={FontAwesome5} name="hand-holding-heart" size="lg" color="#DFA436" />}
              bg="white"
            >
              <Link style={styles.buttonText} href={'/ong'}>Quero Doar</Link>
            </Button>
          </VStack>

          <VStack space={3} alignItems="center">
            <Box alignItems="center" flexDirection="row">
              <Icon as={FontAwesome5} name="store" size="lg" color="#DFA436" />
              <Text style={styles.partnerText}>Conheça nossos parceiros</Text>
            </Box>

            <Button.Group variant="outline" space={2}>
              <Button
                width={150}
                style={styles.button}
                colorScheme="light"
                _text={styles.buttonText}
                onPress={() => console.log("Empresas")}
              >
                Instituições
              </Button>
              <Button
                style={styles.button}
                colorScheme="light"
                _text={styles.buttonText}
                onPress={() => console.log("Instituições")}
              >
                Supermercados
              </Button>
            </Button.Group>
          </VStack>

          <VStack alignItems="center" mt={5}>
            <Box alignItems="center" flexDirection="row">
              <Icon as={FontAwesome5} name="handshake" size="lg" color="#DFA436" />
              <Text style={styles.partnerText}>Seja um apoiador</Text>
            </Box>

            <Button
              style={styles.button}
              width={300}
              colorScheme="light"
              _text={styles.buttonText}
              onPress={() => console.log("Apoiar")}
            >
              Apoiar
            </Button>
          </VStack>
        </ImageBackground>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
