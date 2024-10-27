import React, { useState } from 'react';
import { ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, Image, Badge, Progress, VStack, HStack, Heading, Icon, Button } from 'native-base';
import { useRouter, Link } from 'expo-router';
import styles from '@/assets/styles/styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { Instituicao } from '@/types';

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

export default function InstituitionScreen() {
  const router = useRouter();

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <VStack style={styles.header} alignItems="center" space={2}>
          <HStack alignItems="center" justifyContent="space-between" flex={1}>
            <Box>
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <FontAwesome5 name="arrow-left" size={20} color='#5C0C9F' />
              </TouchableOpacity>
            </Box>

            <Box flex={1} alignItems="center">
              <HStack alignItems="center">
                <Icon as={FontAwesome5} name="store" size={28} color="#DFA436" />
                <Text style={styles.partnerText}>Conheça nossos parceiros</Text>
              </HStack>
            </Box>
          </HStack>

          <HStack alignItems="center">
            <Heading color={'white'} size="lg">Instituições</Heading>
          </HStack>
        </VStack>

        <ScrollView>
          {institutions.map((institution, index) => (
            <TouchableOpacity key={index}>
              <Box
                style={styles.card}
                flexDirection={'row'}
                mb={4}
              >
                <Image
                  source={institution.image}
                  size={32}
                  borderRadius={8}
                  height={'auto'}
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
                </VStack>
              </Box>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}