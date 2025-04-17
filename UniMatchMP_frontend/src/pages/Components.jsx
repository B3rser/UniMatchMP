import React from 'react';
import { useSnackbar } from 'notistack';
import { Stack, Button, Box } from '@mui/material';

export function Components() {
    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant) => () => {
        enqueueSnackbar(`This is a ${variant} message`, {
            variant: 'custom',
            variantF: variant,
            title: `This is a ${variant} message`
        });
    };

    return (
        <Box>
            <Stack direction="row" spacing={2}>
                <Button onClick={handleClickVariant("success")} sx={{ color: "var(--success-300)" }}>Success</Button>
                <Button onClick={handleClickVariant("error")} sx={{ color: "var(--error-300)" }}>Error</Button>
                <Button onClick={handleClickVariant("warning")} sx={{ color: "var(--warning-300)" }}>Warning</Button>
                <Button onClick={handleClickVariant("info")} sx={{ color: "var(--info-200)" }}>Info</Button>
            </Stack>
        </Box>

    )
}
