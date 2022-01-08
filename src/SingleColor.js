import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight,hexColor, index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  console.log(bcg);
  console.log(hexColor);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 3000)
    //clears the timeout 
    return () => clearTimeout(timeOut);
  }, [alert])

  //using the rgb to  hex function 
  const hex = rgbToHex(...rgb);
  return (
    <>
      <article 
        onClick={() =>{
          setAlert(true);
          //with help of navigatior we can copy 
          navigator.clipboard.writeText(hexValue);
        } }
       className={`color ${index > 10 && 'color-light'}`}
        style={{backgroundColor : `rgb(${bcg})`}}>

        <p className='percent-value'>{weight} %</p>
        <p className='color-value'>{hexValue} </p>
        {alert && <p className='alert'> copied to clipboard</p>}

      </article>

    </>
  )
}

export default SingleColor
 