import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

interface Pokemon {
    image: string;
    name: string;
    type: string;
}

interface PokemonDataGridProps {
    rows: Pokemon[];
}

const columns: GridColDef[] = [
    {
        field: 'image',
        headerName: 'Image',
        width: 150,
        renderCell: (params) => (
            <img src={params.value} alt="Pokemon" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        ),
    },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    {
        field: 'details',
        headerName: 'Details',
        width: 100,
        renderCell: () => (
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
            >
                Show
            </Button>
        ),
    },
];

export default function PokemonDataGrid({ rows }: PokemonDataGridProps) {

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
            />
        </Box>
    );
}
