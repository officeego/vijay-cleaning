import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css'
import { Fade } from 'react-awesome-reveal'
import StarBorderIcon from '@material-ui/icons/StarBorder';

function MenuItem({ type, image, price }) {
  return (
    <Fade>
      <Link className='menuItem'>
        <img src={image} alt='' className='menuItem__image' />
        <h4 className='menuItem__type'>{type}<p><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/></p></h4>
        <Link to="/"> <p>{price}</p></Link> 
        <p></p>
      </Link>
    </Fade>
  )
}

export default MenuItem
