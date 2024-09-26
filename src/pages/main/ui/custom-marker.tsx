import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { LatLng, LatLngExpression, LeafletEventHandlerFnMap } from 'leaflet'
import { useState, useRef, useMemo, useEffect, ChangeEvent } from 'react'
import { Circle, Marker, Popup, useMapEvents } from 'react-leaflet'
import { usePositionsStore } from '@entities/map'
import { useChangeRadius } from './use-change-radius'

const initialRadius = 200

interface IProps {
  deleteMarker: () => void
  item: Date
}

export function CustomMarker({ deleteMarker, item }: IProps) {
  const [draggable, setDraggable] = useState(false)
  const [isCircleStroke, setIsCircleStroke] = useState<boolean>(true)
  const markerRef = useRef<L.Marker>(null)
  const [position, setPosition] = useState<LatLngExpression | null>()
  const [currentRadius, setCurrentRadius] = useState<number>(initialRadius)
  const [radius, setRadius] = useState<number>(initialRadius)
  const myPosition = usePositionsStore((state) => state.myPosition)
  const markerPosition = usePositionsStore((state) => state.markerPosition)
  const [isShowLine, setIsShowLine] = useState<boolean>(false)
  const [isThisMarker, setIsThisMarker] = useState<boolean>(false)

  const setMarkerPosition = usePositionsStore(
    (state) => state.setMarkerPosition
  )

  useEffect(() => {
    if (!position || !markerPosition) {
      return
    }

    if (!('lat' in position) || !('lat' in markerPosition)) {
      return
    }

    if (
      position.lat === markerPosition.lat &&
      position.lng === markerPosition.lng
    ) {
      setIsThisMarker(true)
    } else {
      setIsThisMarker(false)

      // setIsShowLine(false)
    }
  }, [position, markerPosition])

  useEffect(() => {
    // !isThisMarker && setIsShowLine(false)
    !isThisMarker && console.log(item, isThisMarker)
  }, [isThisMarker])

  const map = useMapEvents({
    drag() {
      if (draggable) {
        const center = map.getCenter()

        setPosition(center)
      }
    },
    dragstart() {
      draggable && changeRadius.reduce()
    },
    dragend() {
      draggable && changeRadius.increase()
    },
  })

  useEffect(() => {
    const center = map.getCenter()

    setPosition(center)
  }, [])

  const changeRadius = useChangeRadius({
    setCurrentRadius,
    setIsCircleStroke,
    radius,
  })

  const eventHandlers: LeafletEventHandlerFnMap = useMemo(
    () => ({
      dragstart() {
        changeRadius.reduce()
      },
      dragend() {
        changeRadius.increase()
      },
      drag() {
        const marker = markerRef.current

        marker && setPosition(marker.getLatLng())
      },
    }),
    [radius]
  )

  useEffect(() => {
    if (!position) {
      return
    }

    isShowLine ? setMarkerPosition(position) : setMarkerPosition(null)
  }, [position, isShowLine])

  const handleChangeDraggable = (event: ChangeEvent<HTMLInputElement>) => {
    setDraggable(event.target.checked)
  }

  const handleChangeIsShowLine = (event: ChangeEvent<HTMLInputElement>) => {
    setIsShowLine(event.target.checked)
  }

  const handleChangeRadius = (event: ChangeEvent<HTMLInputElement>) => {
    const radius = +event?.target.value

    if (typeof radius === 'number' && !isNaN(radius)) {
      setRadius(radius)

      setCurrentRadius(radius)
    }
  }

  return (
    <>
      {position && (
        <>
          <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
            title={'asdf'}
            // icon={<div>asdf</div>}

            // title={
            //   myPosition
            //     ? `${Math.round(map.distance(position, myPosition))} m`
            //     : undefined
            // }
          >
            <Popup minWidth={90}>
              <Stack direction="row">
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChangeDraggable}
                      checked={draggable}
                    />
                  }
                  label="Mark to make draggable"
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: 12,
                      lineHeight: 1.1,
                    },
                  }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChangeIsShowLine}
                      checked={isShowLine && isThisMarker}
                    />
                  }
                  label="Show line to me"
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: 12,
                      lineHeight: 1.1,
                    },
                  }}
                />
              </Stack>

              <TextField
                variant="outlined"
                type="tel"
                onChange={handleChangeRadius}
                value={radius}
                InputProps={{ endAdornment: 'm', startAdornment: 'Radius:' }}
                sx={{
                  height: 40,
                  '& input': {
                    py: 0,
                  },
                }}
              />

              {myPosition && (
                <Typography variant="body3">
                  Distance to me:{' '}
                  {`${Math.round(map.distance(position, myPosition))} m`}
                </Typography>
              )}

              <Button
                variant="contained"
                onClick={deleteMarker}
                sx={{ p: 1, fontSize: 14, height: 30 }}
              >
                Delete marker
              </Button>
            </Popup>
          </Marker>

          <Circle
            center={position}
            pathOptions={{ fillColor: 'blue', stroke: isCircleStroke }}
            radius={currentRadius} // meters
          />
        </>
      )}
    </>
  )
}
