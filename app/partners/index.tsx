import React from 'react';
import { ScrollView, SafeAreaView, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NativeBaseProvider, Box, Image, VStack, HStack, Heading, Icon } from 'native-base';
import { useRouter } from 'expo-router';
import styles from '@/assets/styles/styles';
import { FontAwesome5 } from '@expo/vector-icons';

const partners = [
    {
        name: "Bernardão",
        image: { uri: 'https://www.patrocinioonline.com.br/media/uploads/2023/07/06/whatsapp-image-2023-07-06-at-111126.jpeg' },
    },
    {
        name: "Lima",
        image: { uri: 'https://www.supermercadoslima.com.br/views/imgs/capa.jpg' },
    },
    {
        name: "BH",
        image: { uri: 'https://bigshopping.com.br/wp-content/uploads/2023/12/18.png' },
    },
    {
        name: "Moderno",
        image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69EYXVQmIRzWgnG8k0nPmLjlkQ6MVM6_Wng&s' },
    },
];

const { width } = Dimensions.get('window');

export default function PartnersScreen() {
    const router = useRouter();

    const numCardsToShow = width < 768 ? 2 : 3;

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
                        <Heading color={'white'} size="lg">Supermercados</Heading>
                    </HStack>
                </VStack>

                <ScrollView>
                    {Array.from({ length: Math.ceil(partners.length / numCardsToShow) }).map((_, rowIndex) => (
                        <HStack key={rowIndex} space={2} justifyContent="center" mb={4}>
                            {partners.slice(rowIndex * numCardsToShow, rowIndex * numCardsToShow + numCardsToShow).map((partner, index) => (
                                <TouchableOpacity key={index}>
                                    <Box style={styles.cardMarkett} flexDirection={'row'} mb={4}>
                                        <VStack flex={1} justifyContent="space-between" alignItems="center">
                                            <Image
                                                source={partner.image}
                                                style={styles.cardImage}
                                                accessibilityLabel={partner.name}
                                            />
                                            <Text style={styles.cardTitle}>
                                                {partner.name}
                                            </Text>
                                        </VStack>
                                    </Box>
                                </TouchableOpacity>
                            ))}
                        </HStack>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    );
}