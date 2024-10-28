import React from 'react';
import { ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, Image, Badge, Progress, VStack, HStack, Heading, Icon, Button } from 'native-base';
import { useRouter } from 'expo-router';
import styles from '@/assets/styles/styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { Instituicao } from '@/types';
import { useAppContext } from '@/context/appContext';

const institutions = [
  {
    name: "Casa da Esperança",
    image: { uri: 'https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg' },
    tags: ["Educação", "Crianças"],
    progress: 45,
  },
  {
    name: "Lar dos Idosos São Vicente",
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeDda-Lhi0pTKkMSE-n-Zd1WQv7hIXGUrDw&s' },
    tags: ["Saúde", "Idosos"],
    progress: 60,
  },
  {
    name: "Instituto Vida Verde",
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukdXKanbCK1nL4v0vXeUHZxbUuHpQVd9-Gg&s' },
    tags: ["Meio Ambiente", "Sustentabilidade"],
    progress: 30,
  },
  {
    name: "Associação Viver Bem",
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexbqvlv4GrtPhi3IpVJPFPhTFoQWNOKMbVg&s' },
    tags: ["Saúde", "Assistência Social"],
    progress: 80,
  }
];

export default function OngScreen() {
  const { selectedInstitution, setSelectedInstitution } = useAppContext();
  const router = useRouter();

  const handleSelectInstitution = (institution: Instituicao) => {
    setSelectedInstitution(institution);
  };

  const handleNavigateToMarket = () => {
    router.push('/market');
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <VStack style={styles.header} alignItems="center" space={2}>
          <HStack alignItems="center" justifyContent="space-between" flex={1}>
            <Box>
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <FontAwesome5 name="arrow-left" size={20} color='#1B3252' />
              </TouchableOpacity>
            </Box>
            <Box flex={1} alignItems="center">
              <HStack alignItems="center">
                <Icon as={FontAwesome5} name="hand-holding-heart" size={28} color="#DFA436" />
                <Text style={styles.partnerText}>Quero Doar</Text>
              </HStack>
            </Box>
          </HStack>
          <HStack alignItems="center">
            <Heading color={'white'} size="lg">Escolher instituição</Heading>
          </HStack>
        </VStack>

        <ScrollView>
          {institutions.map((institution, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelectInstitution(institution)}>
              <Box
                style={[styles.card, {
                  borderWidth: selectedInstitution && selectedInstitution.name === institution.name ? 5 : 0,
                  borderColor: '#1B3252'
                }]}
                flexDirection={'row'}
                mb={4}
              >
                <Image
                  style={styles.OngCardImage}
                  source={institution.image}
                  size={32}
                  borderRadius={8}
                  height={'auto'}
                  width={200}
                  accessibilityLabel={institution.name}
                  alt={institution.name}
                />
                <VStack space={4} mx={2} flexDirection={'column'} flex={1} justifyContent="space-between">
                  <Text style={styles.cardTitle}>{institution.name}</Text>
                  <Box flexDirection={{ base: 'column', md: 'row' }} flexWrap="wrap">
                    {institution.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} mx={1} style={styles.badge}>
                        <Text style={styles.badgeText}>{tag}</Text>
                      </Badge>
                    ))}
                  </Box>
                  <Box>
                    <Text style={styles.textCard}>{institution.progress}% da meta arrecadada</Text>
                    <Progress size={'sm'} value={institution.progress} style={styles.progress} />
                  </Box>
                </VStack>
              </Box>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {selectedInstitution && (
          <Button style={styles.buttonNext} onPress={handleNavigateToMarket}>
            <Text style={[styles.buttonText, { color: 'white' }]}>Continuar</Text>
          </Button>
        )}
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
