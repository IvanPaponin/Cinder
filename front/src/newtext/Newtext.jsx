import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 supportъ
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import { useState, useEffect } from "react";
const showcard = ['ya molodec', 'ya konec' , 'ya merzavec'];
const showcard2 = ['ya krasavec', 'ya sdelal', 'ya sdelal eeeeeeeeeeee']
const vopros = 'ya vopros';
const vopros2 = 'ya vopros2';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 125,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 2,
  },
}));

export default function NewText (){
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [second, setSecond] = useState(true);
  const [value, setValue] = useState();
  console.log(show);

  const handleShow =() =>{
    setShow(true)
  
  }
  const secondShow = () => {
    setSecond(false);
   
  }
  const handleChange = (event) => {
    setValue(event.target.value);
  };



  return (
    <div>

{ second ? <div>
  {show ? (<Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Вопрос
              </Typography>
              <Typography variant="body2" component="p">
                {vopros} --- eto
                <br />
                <RadioGroup aria-label="Variant" name="Variant" value={value} onChange={handleChange} >
                  {showcard.map((item) =>
                    <FormControlLabel value={item} control={<Radio />} label={item} />)}
                </RadioGroup>
              </Typography>
            </CardContent>
            <CardActions >
              <Button size="small" variant="contained" color="primary" onClick={secondShow} >Отправить ответ</Button>
              </CardActions>
          
          
          </Card>) : (     <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Вопрос
              </Typography>
              <Typography variant="body2" component="p">
                {vopros2} ---
                <br />
                <RadioGroup aria-label="Variant" name="Variant" value={value} onChange={handleChange} >
                  {showcard2.map((item) =>
                    <FormControlLabel value={item} control={<Radio />} label={item} />)}
                </RadioGroup>
              </Typography>
            </CardContent>
           <CardActions >
              <Button size="small" variant="contained" color="primary" onClick={handleShow} >Отправить ответ</Button>
              </CardActions>
      
          </Card>)
                   } 

</div> : <div>privet</div>
  

}
      
         
    </div>
  )
 

     
  

}
  


