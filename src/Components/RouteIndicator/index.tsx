import { RouteIndicatorBar } from './styles'
export interface RouteIndicatorProps {
  display?: boolean
}
export function RouteIndicator({ display = false }: RouteIndicatorProps) {
  return <RouteIndicatorBar display={display} />
}
