import { Box, Button, Container, Toolbar } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

export function OutlinedButtons() {
  return (
    <Box sx={{ mt: 4 }}>
      <Toolbar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        Outlined Buttons
      </Toolbar>

      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Grid2 container spacing="70px">
          <Grid2 xs={4}>
            <Button fullWidth variant="outlined" color="primary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button fullWidth variant="outlined" color="secondary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button fullWidth variant="outlined" color="tertiary">
              Button
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container spacing="70px">
          <Grid2 xs={4}>
            <Button disabled fullWidth variant="outlined" color="primary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button disabled fullWidth variant="outlined" color="secondary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button disabled fullWidth variant="outlined" color="tertiary">
              Button
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container spacing="70px">
          <Grid2 xs={4}>
            <Button fullWidth rounded variant="outlined" color="primary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button fullWidth rounded variant="outlined" color="secondary">
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button fullWidth rounded variant="outlined" color="tertiary">
              Button
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container spacing="70px">
          <Grid2 xs={4}>
            <Button
              disabled
              fullWidth
              rounded
              variant="outlined"
              color="primary"
            >
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button
              disabled
              fullWidth
              rounded
              variant="outlined"
              color="secondary"
            >
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button
              disabled
              fullWidth
              rounded
              variant="outlined"
              color="tertiary"
            >
              Button
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}
