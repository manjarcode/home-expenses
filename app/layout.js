'use client'
import CssBaseline from '@mui/material/CssBaseline'

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
      <body>{children}</body>
    </html>
  )
}
