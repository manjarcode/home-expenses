import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import PropTypes from 'prop-types'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import {Box} from '@mui/material'
import Typography from '@mui/material/Typography'
import {borders} from '@mui/system'

import style from './index.module.css'

export default function FileUploader({onFileUpload}) {
  const onDrop = useCallback(
    acceptedFiles => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        onFileUpload(file)
      }
    },
    [onFileUpload]
  )

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Box
        borderRadius={borders.borderRadius}
        borderColor="primary.main"
        borders={borders.borders}
        className={style.dropzone}
      >
        <CloudUploadIcon className={style.icon} />
        {isDragActive ? (
          <Typography variant="body1">Suelta el archivo aquí</Typography>
        ) : (
          <Typography variant="body1">Arrastra y suelta un archivo aquí, o haz clic para seleccionar uno</Typography>
        )}
      </Box>
    </div>
  )
}

FileUploader.propTypes = {
  onFileUpload: PropTypes.func.isRequired
}
