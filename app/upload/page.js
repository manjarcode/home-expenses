'use client'
import {Box} from '@mui/material'

import FileUploader from '../../components/fileUploader/index.js'

function send(file) {
  const data = new FormData()
  data.set('file', file)

  return fetch('/api/upload', {
    method: 'POST',
    body: data
  })
}

export default function UploadInvoice() {
  return (
    <Box>
      <FileUploader onFileUpload={send} />
    </Box>
  )
}
