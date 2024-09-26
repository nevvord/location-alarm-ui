import { Box, Button } from '@mui/material'
import { LatLngExpression } from 'leaflet'
import { useState, useRef, useEffect } from 'react'
import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { usePositionsStore } from '@entities/map'
import { CustomMarker } from './custom-marker'

const position: LatLngExpression = [50.2001414, 27.0640701]

export function MainPage() {
  const [markersList, setMarkersList] = useState<Date[]>([])
  const myPosition = usePositionsStore((state) => state.myPosition)
  const markerPosition = usePositionsStore((state) => state.markerPosition)

  const handleDeleteMarker = (currentMarker: Date) => {
    setMarkersList((prevMarkersList) =>
      prevMarkersList.filter((marker) => marker !== currentMarker)
    )
  }

  return (
    <Box width="100%" height="50%">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />

        <Markers markersList={markersList} deleteMarker={handleDeleteMarker} />

        {myPosition && markerPosition && (
          <Polyline
            pathOptions={{ color: 'red' }}
            positions={[myPosition, markerPosition]}
          />
        )}
      </MapContainer>

      <Button
        variant="contained"
        onClick={() => setMarkersList((prev) => [...prev, new Date()])}
        sx={{ position: 'fixed', bottom: 0, right: 0 }}
      >
        Add marker
      </Button>
    </Box>
  )
}

interface IProps {
  markersList: Date[]
  deleteMarker: (currentMarker: Date) => void
}

function Markers({ markersList, deleteMarker }: IProps) {
  const myMarkerRef = useRef<L.Marker>(null)
  // const [myPosition, setMyPosition] = useState<LatLngExpression | null>(null)
  const setMyPosition = usePositionsStore((state) => state.setMyPosition)
  const myPosition = usePositionsStore((state) => state.myPosition)

  const map = useMapEvents({
    locationfound(e) {
      setMyPosition(e.latlng)

      map.flyTo(e.latlng, map.getZoom())
    },
  })

  useEffect(() => {
    map.locate()
  }, [])

  return (
    <>
      {myPosition && <Marker position={myPosition} ref={myMarkerRef} />}

      {markersList.map((item) => (
        <CustomMarker
          key={item.getTime()}
          deleteMarker={() => deleteMarker(item)}
          item={item}
        />
      ))}
    </>
  )
}
