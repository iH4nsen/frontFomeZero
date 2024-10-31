'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Market, Instituicao } from '@/types'; // Certifique-se de que o caminho está correto

interface AppContextType {
    resetContext: () => void;
    selectedMoney: number | null;
    setSelectedMoney: (money: number | null) => void;
    selectedMarket: Market | null;
    setSelectedMarket: (market: Market | null) => void;
    selectedInstitution: Instituicao | null; // Correção aqui
    setSelectedInstitution: (instituition: Instituicao | null) => void; // Correção no nome da função
}

// Criação do contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provedor do contexto
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [selectedMoney, setSelectedMoney] = useState<number | null>(null);
    const [selectedMarket, setSelectedMarket] = useState<Market | null>(null); // Estado do mercado
    const [selectedInstitution, setSelectedInstitution] = useState<Instituicao | null>(null); // Estado da instituição

    const resetContext = () => {
        setSelectedInstitution(null);
        setSelectedMarket(null);
        setSelectedMoney(null);
    };
    
    return (
        <AppContext.Provider value={{ selectedMoney, setSelectedMoney, selectedMarket, setSelectedMarket, selectedInstitution, setSelectedInstitution, resetContext}}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
