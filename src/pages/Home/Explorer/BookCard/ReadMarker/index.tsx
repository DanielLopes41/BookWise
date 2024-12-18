import { ReadMarkerContainer } from './styles'
export interface ReadMarkerProps {
  IsRead?: boolean
}
export function ReadMarker({ IsRead = false }: ReadMarkerProps) {
  return (
    <ReadMarkerContainer IsRead={IsRead}>
      <p>LIDO</p>
    </ReadMarkerContainer>
  )
}
