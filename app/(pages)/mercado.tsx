import React, { useState } from 'react';
import { ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, Image, Badge, Progress, VStack, HStack, Heading, Button, Icon } from 'native-base';
import { Link } from 'expo-router';
import styles from '@/assets/styles/styles';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function MercadoScreen() {
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
                                <FontAwesome5 name="hand-holding-heart" size={20} color="#DFA436" style={{ marginRight: 8 }} />
                                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Quero Doar</Text>
                            </HStack>
                        </Box>
                    </HStack>

                    <HStack alignItems="center">
                        <Heading color={'white'} size="lg">Supermercados</Heading>
                    </HStack>
                </VStack>
            </SafeAreaView>
        </NativeBaseProvider>
    );
}