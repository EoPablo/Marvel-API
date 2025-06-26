import { Personagens } from "@/types/personagens";

const ts = 1750432655686;
const publicKey = '9553652465b2c199d41ab69d18eecb05';
const hash = '9f2d96228f582d6468cc2b99cdf1ca70';

const url = `https://gateway.marvel.com/v1/public/characters?limit=10&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

export async function buscarPersonagens(): Promise <Personagens[]>{
    try {
        const res = await fetch(url);
        if(!res.ok) throw new Error("Erro ao buscar personagens");
        const marvelData = await res.json();

        return marvelData.data.results;

    } catch (error) {
        console.log(error)
        return[];
    }
}
