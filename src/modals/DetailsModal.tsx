import React from 'react';
import { Modal, Box, Button, Card, CardContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import usePokemon from '@hooks/usePokemon';
import PlayButton from '../components/PlayButton';
import { Pokemon } from '@hooks/PokemonInterfaces';

interface DetailsWindowProps {
    isOpen: boolean;
    onClose: () => void;
    pokemon: Pokemon | null;
}

const DetailsWindow: React.FC<DetailsWindowProps> = ({ isOpen, onClose, pokemon }) => {
    const { pokemon: pokemonDetails, loading, error } = usePokemon(pokemon);

    return (
        <Modal open={isOpen} onClose={onClose} aria-labelledby="pokemon-details-modal" aria-describedby="pokemon-details-modal-description">
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '10px',
                    maxHeight: '80vh',
                    overflowY: 'auto',
                }}
            >
                <Button
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        color: 'text.primary',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '20px',
                    }}
                >
                    <CloseIcon />
                </Button>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {pokemonDetails && (
                    <Card variant="outlined" sx={{ minWidth: 400, minHeight: 200, margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
                        <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src={pokemonDetails.image}
                                    alt={pokemonDetails.name}
                                    style={{
                                        width: '180px',
                                        height: '180px',
                                        marginRight: '10px',
                                        border: '2px solid black',
                                        borderRadius: '8px',
                                    }}
                                />
                                <div>
                                    <div><b>Name: </b>{pokemonDetails.name}</div>
                                    <div><b>Type: </b>{pokemonDetails.types.join(', ')}</div>
                                    <PlayButton audioUrl={pokemonDetails.pokemonSound ?? ''} />
                                </div>
                            </div>
                            <div><b>Features:</b></div>
                            <ul>
                                <li>Height: {pokemonDetails.details.height}</li>
                                <li>Weight: {pokemonDetails.details.weight}</li>
                                <li>Base Experience: {pokemonDetails.details.baseExperience}</li>
                            </ul>
                            <div><b>Abilities:</b></div>
                            <ul>
                                {pokemonDetails.abilities.map((ability, index) => (
                                    <li key={index}>{ability}</li>
                                ))}
                            </ul>
                            <div><b>Locations:</b></div>
                            {pokemonDetails.locations.length > 0 ? (
                                <ul>
                                    {pokemonDetails.locations.map((location) => (
                                        <li key={location}>{location}</li>
                                    ))}
                                </ul>
                            ) : (
                                <div>No known locations</div>
                            )}
                        </CardContent>
                    </Card>
                )}
            </Box>
        </Modal>
    );
};

export default DetailsWindow;
