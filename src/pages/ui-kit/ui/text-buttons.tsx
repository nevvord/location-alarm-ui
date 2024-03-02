import { Box, Button, Container, Toolbar } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

export function TextButtons() {
  return (
    <Box sx={{ mt: 4 }}>
      <Toolbar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        Text Buttons
      </Toolbar>

      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Grid2 container spacing="70px">
          <Grid2 xs={4}>
            <Button fullWidth variant="text" color="primary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button fullWidth variant="text" color="secondary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button fullWidth variant="text" color="tertiary">
              Button
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container spacing="70px">
          <Grid2 xs={4}>
            <Button disabled fullWidth variant="text" color="primary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button disabled fullWidth variant="text" color="secondary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button disabled fullWidth variant="text" color="tertiary">
              Button
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container spacing="70px">
          <Grid2 xs={4}>
            <Button fullWidth rounded variant="text" color="primary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button fullWidth rounded variant="text" color="secondary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button fullWidth rounded variant="text" color="tertiary">
              Button
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container spacing="70px">
          <Grid2 xs={4}>
            <Button disabled fullWidth rounded variant="text" color="primary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button disabled fullWidth rounded variant="text" color="secondary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button disabled fullWidth rounded variant="text" color="tertiary">
              Button
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}
