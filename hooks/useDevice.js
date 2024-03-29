import {useEffect} from 'react'

import useMediaQuery from '@mui/material/useMediaQuery'

export const devices = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop'
}

export default function useDevice(onInit) {
  const isMobile = useMediaQuery('only screen and (max-width: 480px)')
  const isTablet = useMediaQuery('(min-width:481px) and (max-width:768px)')
  const isDesktop = useMediaQuery('(min-width:769px)')

  useEffect(() => {
    const isFunction = typeof onInit === 'function'
    isFunction && onInit()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, isTablet, isDesktop])
  return {isMobile, isTablet, isDesktop}
}
