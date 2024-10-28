import React from 'react';
import { ScrollView, SafeAreaView, Text, Dimensions, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, Image, VStack, Heading, HStack } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient'; // Importe o LinearGradient
import { useRouter } from 'expo-router';
import styles from '@/assets/styles/styles';
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function MoreScreen() {
    const router = useRouter();
    const str = require('../../assets/images/str.png');
    const instagram = require('../../assets/images/instagram.jpeg');

    return (
        <NativeBaseProvider>
            <LinearGradient
                colors={['#1B3252', '#8DD7DF']}
                locations={[0.55, 1]}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <HStack alignItems="center" mx={8} mt={10} justifyContent="space-between" flex={1}>
                            <Box>
                                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                                    <FontAwesome5 name="arrow-left" size={20} color='#1B3252' />
                                </TouchableOpacity>
                            </Box>
                            <Text style={styles.title}>Seja um apoiador do STR</Text>
                        </HStack>


                        <VStack alignItems="center" my={4}>
                            <Image
                                source={str}
                                height={height * 0.22}
                                width={width * 0.3}
                                alt="Imagem de agradecimento"
                            />
                        </VStack>

                        <Text style={styles.text}>
                            A equipe STR - Super Tecno Robots é composta por 9 (Nove)
                            integrantes: André, Artur, Fellipe, Heitor, Isabela, Luiza, Miguel, Sara e
                            Valentina, sendo alunos do 5 Ano do Ensino Fundamental do Colégio
                            Marista Patos de Minas.
                        </Text>
                        <Text style={styles.text}>
                            O nome STR foi escolhido para representar os superpoderes de um
                            grupo que é apaixonado por tecnologia e robótica e que participa pelo
                            terceiro ano consecutivo do torneio do TBR, sendo classificado este
                            ano para a etapa regional do Triangulo Mineiro, trazendo cada vez mais
                            garra e paixão por este universo de desafios e diversão que é a
                            robótica.
                        </Text>
                        <Text style={styles.subtitle}>Torneio</Text>
                        <Text style={styles.text}>
                            O Torneio Brasil de Robótica - TBR é uma iniciativa de cunho educativo-científico- tecnológico que objetiva preparar crianças,
                            jouens e adultos jovens para atuarem de diferentes modos na pluralidade científica e tecnológica do mundo do trabalho.
                            A Metodologia do Torneio Brasil de Robótica, há doze anos explora as competências individuais de seus participantes
                            no enfrentamento e resolução de problemas no mundo real, estimula o empreendedorismo por meio das soluções apresentadas aos problemas trabalhados,
                            fortalece as habilidades técnicas e científicas individualmente de cada integrante com o propósito de
                            descortinar os expoentes, além de exercitar os domínios da gestão de forma ampla e integrada, fazendo a melhoria
                            contínua dos processos;
                        </Text>
                        <Text style={styles.subtitle}>Objetivos</Text>
                        <Text style={styles.text}>
                            Ampliar nossos conhecimentos e vivenciar novas experiências no contexto da criatividade, inovação e desenvolvimento tecnológico,
                            alcançando a etapa nacional e com determinação, disciplina e dedicação conquistar o título no maior torneio de robótica do Brasil
                            , o TBR.
                        </Text>
                        <Text style={styles.title}>Contato</Text>
                        <HStack justifyContent="center" >
                            <Text style={[styles.text, { fontWeight: 'bold' }]}> (34) 9 9968-3339 </Text>
                        </HStack>

                        <VStack alignItems="center" my={4}>
                            <Image
                                source={instagram}
                                height={300}
                                width={300}
                                borderRadius={8}
                                alt="Imagem de agradecimento"
                            />
                        </VStack>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        </NativeBaseProvider >
    );
}
