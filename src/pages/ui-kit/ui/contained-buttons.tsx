import { Mail, Send } from '@mui/icons-material'
import { Box, Button, Container, Toolbar, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'

export function ContainedButtons() {
  return (
    <Box>
      <Toolbar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        Contained Buttons
      </Toolbar>

      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Box mb={4}>
          <Typography variant="h2">Standard</Typography>

          <Box
            sx={({ palette }) => ({
              border: '2px dashed',
              borderColor: palette.purple.main,
              borderRadius: '16px',
              padding: 2,
            })}
          >
            <Grid2 container spacing="70px">
              <Grid2 xs={4}>
                <Button fullWidth variant="contained" color="primary">
                  Button
                </Button>
              </Grid2>

              <Grid2 xs={4}>
                <Button fullWidth variant="contained" color="secondary">
                  Button
                </Button>
              </Grid2>

              <Grid2 xs={4}>
                <Button
                  startIcon={<Send />}
                  fullWidth
                  variant="contained"
                  color="tertiary"
                >
                  Button
                </Button>
              </Grid2>
            </Grid2>

            <Grid2 container spacing="70px">
              <Grid2 xs={4}>
                <Button disabled fullWidth variant="contained" color="primary">
                  Button
                </Button>
              </Grid2>

              <Grid2 xs={4}>
                <Button
                  disabled
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Button
                </Button>
              </Grid2>

              <Grid2 xs={4}>
                <Button disabled fullWidth variant="contained" color="tertiary">
                  Button
                </Button>
              </Grid2>
            </Grid2>

            <Grid2 container spacing="70px">
              <Grid2 xs={4}>
                <Button
                  size="small"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Button
                </Button>
              </Grid2>

              <Grid2 xs={4}>
                <Button
                  size="small"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  endIcon={<Mail />}
                >
                  Button
                </Button>
              </Grid2>

              <Grid2 xs={4}>
                <Button
                  size="small"
                  fullWidth
                  variant="contained"
                  color="tertiary"
                >
                  Button
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </Box>

        <Grid2 container spacing="70px">
          <Grid2 xs={4}>
            <Button
              fullWidth
              rounded={true}
              variant="contained"
              color="primary"
            >
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button
              fullWidth
              rounded={true}
              variant="contained"
              color="secondary"
            >
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button
              fullWidth
              rounded={true}
              variant="contained"
              color="tertiary"
            >
              Button
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container spacing="70px">
          <Grid2 xs={4}>
            <Button
              disabled
              fullWidth
              rounded={true}
              variant="contained"
              color="primary"
            >
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button
              disabled
              fullWidth
              rounded={true}
              variant="contained"
              color="secondary"
            >
              Button
            </Button>
          </Grid2>

          <Grid2 xs={4}>
            <Button
              disabled
              fullWidth
              rounded={true}
              variant="contained"
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
