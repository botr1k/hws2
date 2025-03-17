import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
      <Slider
          sx={{ // стили для слайдера // пишет студент
            width: '147px',
            color: '#00CC22',
            '& .MuiSlider-rail': {
              backgroundColor: '#8B8B8B'
            },
            '& .MuiSlider-thumb': {
              color: 'white',
              border: '1px solid #00CC22'
            },
            '& .MuiSlider-thumb:before': {
              position: "absolute",
              content: "''",
              borderRadius: "100%",
              width: "6px",
              height: "6px",
              boxShadow: "none",
              backgroundColor: '#00CC22'
            }
          }}
          {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
  )
}

export default SuperRange
