'use client'
import PropTypes from 'prop-types'

import {Box} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import {LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'

import styles from './layout.module.scss'

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <title>Calculadora de gastos</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <CssBaseline />
      </head>
      <body>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box className={styles.container}>{children}</Box>
        </LocalizationProvider>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node
}
