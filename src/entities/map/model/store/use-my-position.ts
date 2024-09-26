import { LatLngExpression } from 'leaflet'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface IMyPositionState {
  myPosition: LatLngExpression | null
  setMyPosition: (payload: LatLngExpression | null) => void

  markerPosition: LatLngExpression | null
  setMarkerPosition: (payload: LatLngExpression | null) => void
}

export const usePositionsStore = create<IMyPositionState>()(
  devtools(
    (set) => ({
      myPosition: null,
      setMyPosition: (myPosition) => set({ myPosition }),

      markerPosition: null,
      setMarkerPosition: (markerPosition) => set({ markerPosition }),
    }),
    { name: 'my-positions-store' }
  )
)
