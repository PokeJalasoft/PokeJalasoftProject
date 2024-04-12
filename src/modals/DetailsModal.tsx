import Modal from 'react-modal';
import { Card, CardContent } from '@mui/material';
import usePokemon from '@hooks/usePokemon';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        padding: 0,
        borderRadius: '10px',
        backgroundColor: 'rgb(244, 245, 248)',
        border: 'none',
        boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.2)',
    },
};

interface DetailsWindowProps {
    isOpen: boolean;
    onClose: () => void;
    pokemon: {
        id: number;
        name: string;
        image: string;
        type: string;
        url: string;
    } | null;
}

const DetailsWindow: React.FC<DetailsWindowProps> = ({ isOpen, onClose, pokemon }) => {
    const { pokemon: pokemonDetails, loading, error } = usePokemon(pokemon?.url ?? '');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Details Window"
            ariaHideApp={false}
        >
            <div style={{ position: 'relative', margin: '20px' }}>
                <button
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '20px',
                    }}
                    onClick={onClose}
                >
                    x
                </button>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {pokemonDetails && (
                    <Card variant="outlined" sx={{ minWidth: 400, minHeight: 200, margin: 'auto', top: '20%', left: '20%', fontFamily: 'Arial, sans-serif' }}>
                        <CardContent>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={pokemonDetails.picture} alt={pokemonDetails.name} style={{ width: '180px', height: '180px', marginRight: '5px', border: '2px solid black' }} />
                                <div>
                                    <div><b>Name: </b>{pokemonDetails.name}</div>
                                    <div><b>Type: </b> {pokemonDetails.types.join(', ')}</div>
                                </div>
                            </div>
                            <div><b>Features:</b></div>
                            <ul>
                                <li>Height: {pokemonDetails.details.height}</li>
                                <li>Weight: {pokemonDetails.details.weight}</li>
                                <li>Base Experience: {pokemonDetails.details.baseExperience}</li>
                            </ul>

                        </CardContent>
                    </Card>
                )}
            </div>
        </Modal>
    );
};

export default DetailsWindow;
