import {
  Box,
  Container,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'

export function TypographyElements() {
  return (
    <Box>
      <Toolbar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        Typography
      </Toolbar>

      <Stack direction="row"></Stack>

      <Container sx={{ mt: 2 }} maxWidth="xl">
        <Divider sx={{ my: '50px' }} />
        <Typography variant="h1">Inter</Typography>
        <Divider sx={{ my: '50px' }} />
        <Typography variant="h1">h1</Typography>
        <Typography variant="h1">h2</Typography>
        <Typography variant="h1">h3</Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Divider sx={{ my: '50px' }} />
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>

        <Typography component="p" variant="body3">
          Body 3
        </Typography>

        <Typography component="p" variant="body4">
          Body 4
        </Typography>

        <Typography variant="button">Button</Typography>
        <Divider sx={{ my: '50px' }} />
      </Container>
    </Box>
  )
}
