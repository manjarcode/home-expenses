import useMediaQuery from '@mui/material/useMediaQuery'

export const devices = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop'
}

export default function useDevice() {
  const isMobile = useMediaQuery('only screen and (max-width: 480px)')
  const isTablet = useMediaQuery('(min-width:481px) and (max-width:768px)')
  const isDesktop = useMediaQuery('(min-width:769px)')

  return {isMobile, isTablet, isDesktop}
}
