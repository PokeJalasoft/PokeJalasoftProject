import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbarFilterButton, GridToolbarExport } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DetailsWindow from '../modals/DetailsModal';
import { useState } from 'react';
import { Pokemon } from '@hooks/PokemonInterfaces';

interface PokemonDataGridProps {
    rows: Pokemon[];
}

const columns: GridColDef[] = [
    {
        field: 'image',
        headerName: 'Image',
        width: 150,
        disableColumnMenu : true,
        filterable:false,
        renderCell: (params) => (
            <img src={params.value} alt="Pokemon" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        ),
    },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'types', headerName: 'Type', width: 150 },
    {
        field: 'details',
        headerName: 'Details',
        disableExport:true,
        disableColumnMenu : true,
        filterable:false,
        width: 100,
        renderCell: (params) => (
            <ShowButton pokemon={params.row} />
        ),
    },
];

interface ShowButtonProps {
    pokemon: Pokemon;
}

function ShowButton({ pokemon }: Readonly<ShowButtonProps>) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                sx={{
                    bgcolor: '#436686',
                    color: 'white',
                    textTransform: 'none',
                    borderRadius: '25px',
                    height: '30px',
                    width: '30px',
                    marginRight: '10px',
                }}
                onClick={handleOpen}
            >
                Show
            </Button>
            <DetailsWindow isOpen={open} onClose={handleClose} pokemon={pokemon} />
        </>
    );
}

function CustomToolbar() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <GridToolbarFilterButton />
            <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
        </div>
    );
}

export default function PokemonDataGrid({ rows }: Readonly<PokemonDataGridProps>) {
    return (
        <Box sx={{ height: 600, width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 20,
                        },
                    },
                }}
                pageSizeOptions={[20]}
                disableRowSelectionOnClick
                hideFooter
                disableColumnResize
                disableColumnSorting
                disableColumnMenu
                slots={{ toolbar: CustomToolbar }}
            />
        </Box>
    );
}

