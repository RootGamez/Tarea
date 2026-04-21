import { useEffect, useMemo, useState } from "react";

type PokemonSpriteItem = {
  name: string;
  spriteUrl: string;
};

type PokemonApiResponse = {
  name: string;
  sprites: {
    front_default: string | null;
    other?: {
      "official-artwork"?: {
        front_default?: string | null;
      };
    };
    versions?: {
      "generation-v"?: {
        "black-white"?: {
          animated?: {
            front_default?: string | null;
          };
        };
      };
    };
  };
};

const CACHE_KEY = "landing-pokemon-sprites-v1";
const CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 7;

const FALLBACK_SPRITES: PokemonSpriteItem[] = [
  { name: "Pikachu", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
  { name: "Charizard", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
  { name: "Lucario", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png" },
  { name: "Gardevoir", spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png" }
];

export function PokemonSpriteShowcase() {
  const [sprites, setSprites] = useState<PokemonSpriteItem[]>(FALLBACK_SPRITES);

  const pokemonNames = useMemo(() => ["pikachu", "charizard", "lucario", "gardevoir"], []);

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);

    if (cached) {
      try {
        const parsed = JSON.parse(cached) as { timestamp: number; data: PokemonSpriteItem[] };
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS && parsed.data.length > 0) {
          setSprites(parsed.data);
          return;
        }
      } catch {
        localStorage.removeItem(CACHE_KEY);
      }
    }

    let isMounted = true;

    const loadSprites = async () => {
      try {
        const responses = await Promise.all(
          pokemonNames.map((pokemon) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`))
        );

        if (responses.some((response) => !response.ok)) {
          return;
        }

        const data = (await Promise.all(responses.map((response) => response.json()))) as PokemonApiResponse[];

        const normalized = data
          .map<PokemonSpriteItem | null>((item) => {
            const animated = item.sprites.versions?.["generation-v"]?.["black-white"]?.animated?.front_default;
            const artwork = item.sprites.other?.["official-artwork"]?.front_default;
            const front = item.sprites.front_default;
            const spriteUrl = animated ?? artwork ?? front;

            if (!spriteUrl) {
              return null;
            }

            return {
              name: item.name,
              spriteUrl
            };
          })
          .filter((item): item is PokemonSpriteItem => item !== null);

        if (!isMounted || normalized.length === 0) {
          return;
        }

        setSprites(normalized);
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: normalized
          })
        );
      } catch {
        // Keep fallback sprites when API is unavailable.
      }
    };

    void loadSprites();

    return () => {
      isMounted = false;
    };
  }, [pokemonNames]);

  return (
    <ul className="hero__pokemon-sprites" aria-label="Pokemon destacados">
      {sprites.map((item, index) => (
        <li key={`${item.name}-${index}`}>
          <img src={item.spriteUrl} alt={item.name} loading="lazy" />
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}
