import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';

const columns: GridColDef[] = [
    {
        field: 'picture',
        headerName: 'Picture',
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

interface PokemonDataGridProps {
    rows: { picture: string; name: string; type: string }[];
}

export default function PokemonDataGrid({ rows }: PokemonDataGridProps) {
    const prefersDarkMode =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ height: 400, width: '90%', maxWidth: '560px', margin: '0 auto' }}>
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
        </ThemeProvider>
    );
}
