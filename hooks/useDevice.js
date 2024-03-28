import useMediaQuery from '@mui/material/useMediaQuery'

export const devices = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop'
}

export default function useDevice() {
  const mobile = useMediaQuery('only screen and (max-width: 480px)')
  const tablet = useMediaQuery('(min-width:481px) and (max-width:768px)')
  const desktop = useMediaQuery('(min-width:769px)')

  return {mobile, tablet, desktop}
}
