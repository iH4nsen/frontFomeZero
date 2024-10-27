import React from 'react';
import { ScrollView, SafeAreaView, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NativeBaseProvider, Box, VStack, HStack, Heading, Icon, Button } from 'native-base';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '@/assets/styles/styles';
import { useAppContext } from '@/context/appContext';

const { width } = Dimensions.get('window');

const money = [
    { moneyValue: 5 },
    { moneyValue: 10 },
    { moneyValue: 15 },
    { moneyValue: 20 },
    { moneyValue: 25 },
    { moneyValue: 30 },
    { moneyValue: 35 },
    { moneyValue: 40 },
];

export default function DonateScreen() {
    const itemsPerRow = width < 768 ? 2 : 3; 
    const { selectedMoney, setSelectedMoney } = useAppContext();
    const router = useRouter();

    const handleSelectMoney = (moneyValue: number) => {
        setSelectedMoney(moneyValue);
    };

    const handleNavigateToContinue = () => {
        router.push('/thanks');
    };

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
                                <Icon as={FontAwesome5} name="hand-holding-heart" size={28} color="#DFA436" />
                                <Text style={styles.partnerText}>Quero Doar</Text>
                            </HStack>
                        </Box>
                    </HStack>

                    <HStack alignItems="center">
                        <Heading color={'white'} size="lg">Escolher valor</Heading>
                    </HStack>
                </VStack>

                <ScrollView>
                    {Array.from({ length: Math.ceil(money.length / itemsPerRow) }).map((_, rowIndex) => (
                        <HStack key={rowIndex} space={1} justifyContent="center" alignItems="center" mb={1}>
                            {money.slice(rowIndex * itemsPerRow, rowIndex * itemsPerRow + itemsPerRow).map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => handleSelectMoney(item.moneyValue)}>
                                    <Box
                                        style={[
                                            styles.card,
                                            {   
                                                borderRadius: 50,
                                                borderWidth: selectedMoney === item.moneyValue ? 2 : 0,
                                                borderColor: '#5C0C9F',
                                            },
                                        ]}
                                        p={3} // Mantém o padding para uma área de toque melhor
                                    >
                                        <Text style={styles.cardTitle}>R$ {item.moneyValue},00</Text>
                                    </Box>
                                </TouchableOpacity>
                            ))}
                        </HStack>
                    ))}
                </ScrollView>

                {selectedMoney && (
                    <Button style={styles.buttonNext} onPress={handleNavigateToContinue}>
                        <Text style={[styles.buttonText, { color: 'white' }]}>Finalizar</Text>
                    </Button>
                )}
            </SafeAreaView>
        </NativeBaseProvider>
    );
}