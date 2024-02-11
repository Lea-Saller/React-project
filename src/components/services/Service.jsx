import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { observer } from "mobx-react"
import { Button, Stack } from "@mui/material"
import dataStore from "../data/loginStore"
import '../../styles/service.css'
import { CardActionArea } from '@mui/material';

function Service({ oneService }) {
  return (
    <>
  
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="../../../public/jewelry.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {oneService.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <strong className='serviceH'>{oneService.description}</strong>
            <div><strong className='serviceH'>price:</strong> {oneService.price}</div>
            {/* <strong className='serviceH'>duration:</strong> {oneService.duration} */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default Service



