import { CircularProgress, Modal } from '@mui/material'

export function GlobalLoader() {
  return (
    <Modal
      tabIndex={-1}
      open={true}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <CircularProgress />
    </Modal>
  )
}
