import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import styles from './index.module.scss';
import type { Pokemon } from '@nx-next-pokemon/shared-types';
import P from '../P';

export function Index({
    q,
    pokemon: initialPokemon,
}: {
    q: string;
    pokemon: Pokemon[];
}) {
    const [search, setSearch] = useState(q);
    const [pokemon, setPokemon] = useState<Pokemon[]>(initialPokemon);

    const onSetSearch = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
        setSearch(evt.target.value);
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3333/search?q=${search}`)
            .then((resp) => resp.json())
            .then((data) => setPokemon(data));
    }, [search]);

    return (
        <div className={styles.page}>
            <input value={search} onChange={onSetSearch} />
            <ul>
                {pokemon.map(({ name: { english }, id }) => (
                    <li key={id}>{english}</li>
                ))}
            </ul>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    let pokemon = [];
    if (context.query.q) {
        const res = await fetch(
            `http://localhost:3333/search?q=${context.query.q}`
        );
        const pokemon = await res.json();
    }

    return {
        props: {
            q: context.query.q ?? '',
            pokemon,
        },
    };
};

export default Index;
