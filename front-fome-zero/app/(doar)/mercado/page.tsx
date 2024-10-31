"use client";
import HeaderDoar from "@/components/header";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from 'next/navigation'; 
import { useState } from 'react'; 
import { Market } from "@/types";

const marketData = [
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

export default function OngScreen() {
    const [selectedInstitution, setSelectedInstitution] = useState<Instituicao | null>(null);
    const router = useRouter();

    const handleSelectInstitution = (institution: Instituicao) => {
        setSelectedInstitution(institution);
    };

    const handleNavigateToMarket = () => {
        router.push('/mercado');
    };

    return (
        <div className="relative">
            <HeaderDoar title="Escolher supermercado" />
            <ScrollArea>
                <div className="flex flex-col gap-4 p-4">
                    {institutions.map((institution, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectInstitution(institution)}
                            className={`flex flex-row items-center p-4 border cursor-pointer rounded-lg shadow-md transition-transform transform ${
                                selectedInstitution && selectedInstitution.name === institution.name ? 'border-2 border-[#1B3252]' : 'border-transparent'
                            }`}
                        >
                            <Image
                                src={institution.image.uri}
                                alt={institution.name}
                                width={200}
                                height={120}
                                className="rounded-l-lg object-cover"
                            />
                            <div className="flex-grow p-4">
                                <h3 className="text-lg font-semibold">{institution.name}</h3>
                                <div className="flex flex-wrap mt-2">
                                    {institution.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} className="bg-[#1B3252] text-white mx-1">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <p className="mt-2">{institution.progress}% da meta arrecadada</p>
                                <Progress value={institution.progress} className="w-full mt-2" />
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>

            {selectedInstitution && (
                <button
                    onClick={handleNavigateToMarket}
                    className="bg-[#1B3252] fixed bottom-0 w-full h-20 text-white px-4 py-2 rounded"
                    aria-pressed="false"
                >
                    Continuar
                </button>
            )}
        </div>
    );
}
