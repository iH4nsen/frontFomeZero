import { StyleSheet, SafeAreaView, Text, Dimensions } from 'react-native';
import styles from '@/assets/styles/styles';
import { NativeBaseProvider, VStack, Box, Image, Button } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { useAppContext } from '@/context/appContext';
import { useRouter } from 'expo-router'; 
import ConfettiCannon from 'react-native-confetti-cannon';

const { width, height } = Dimensions.get('window');

export default function ThanksScreen() {
    const { selectedInstitution, selectedMarket, selectedMoney, resetContext } = useAppContext(); 
    const router = useRouter(); 
    const cannonRef = useRef(null); 
    const str = require('../../assets/images/str.png');

    const handleBackToHome = () => {
        resetContext(); 
        router.replace('/'); 
    };

    useEffect(() => {
        setTimeout(() => {
            if (cannonRef.current) {
                cannonRef.current.start();
            }
        }, 100);
    }, []);

    return (
        <NativeBaseProvider>
            <SafeAreaView style={[styles.container, { backgroundColor: '#5C0C9F', justifyContent: 'center', padding: 20 }]}>
                <VStack alignItems="center" space={4}>
                    <ConfettiCannon
                        count={200} 
                        origin={{ x: width / 2, y: 0 }} 
                        fadeOut={true}
                        autoStart={false}
                        ref={cannonRef} 
                    />
                    <Text style={[styles.partnerText, { marginTop: 40, textAlign: 'center' }]}>Obrigado(a) por doar!</Text>
                    <Image
                        source={str} 
                        height={height * 0.35} 
                        width={width * 0.5} 
                        alt="Imagem de agradecimento" 
                    />
                    <Box style={[styles.boxThanks, { padding: 15 }]}>
                        <Text style={[styles.textThanks, { fontWeight: '800', textAlign: 'left', marginBottom: 10 }]}>Dados da doação</Text>
                        <Text style={styles.textThanks}>Instituição: {selectedInstitution?.name || 'Não selecionada'}</Text>
                        <Text style={styles.textThanks}>Supermercado: {selectedMarket?.name || 'Não selecionado'}</Text>
                        <Text style={styles.textThanks}>Valor: {selectedMoney !== null ? `R$ ${selectedMoney.toFixed(2)}` : 'Não informado'}</Text>
                    </Box>
                    <Box>
                        <Text style={[styles.textThanks, { fontStyle: 'italic', color: 'white', textAlign: 'center' }]}>Sua doação será encaminhada para a instituição escolhida.</Text>
                    </Box>

                    <Button style={{ marginTop: 100, borderRadius: 8, backgroundColor: 'transparent', width: width * 0.8 }} onPress={handleBackToHome}>
                        <Text style={[styles.buttonNext, { color: 'white' }]}>Retornar para tela inicial</Text>
                    </Button>
                </VStack>
            </SafeAreaView>
        </NativeBaseProvider>
    );
}