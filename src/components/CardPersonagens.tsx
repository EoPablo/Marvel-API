"use client";

import { useState, useEffect} from 'react';
import { buscarPersonagens } from '@/services/marvel';
import { Personagens } from '@/types/personagens';

export default function CardPersonagens(){

    const [personagens, setPersonagens] = useState<Personagens[]> ([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarPersonagens(){
            const dados = await buscarPersonagens();
            setPersonagens(dados);
            setLoading(false);
        }

        carregarPersonagens()
    }, []);

    if (loading){
        return (
            <div className='flex items-center justify-center h-64'>
                <p className='text-xl font-semibold animate-pulse'>Carregando personagens...</p>
            </div>
        )
    }



    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-4'>
            {personagens.map((personagem) => (
                <div 
                    key={personagem.id}
                    className='bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer'
                    >
                    <img src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`} 
                    alt={personagem.name} 
                    className='w-full h-48 object-cover'
                    />
                    <div className='p-4'>
                        <h2 className='text-lg font-bold'>{personagem.name}</h2>
                        <p className='text-sm text-gray-600 line-clamp-3'>
                            {personagem.description || "Sem descrição disponível."}
                        </p>

                    </div>

                </div>
            ))}

        </div>
    )
}