import axios from 'axios';

import {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useSelector} from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

axios.defaults.withCredentials = true



const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },

  },

  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },

}));
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Profile(){
const  user  = useSelector(state=> state.user);


  const [userUpdate, setUserUpdate] = useState({
    username: "",
    userLastName: "",
    date: '',
    email: "",
    password: "",
    nickname: '',
    sex: '',
    id : user._id,
  });
  console.log(userUpdate);




const [drag, setDrag] = useState(false);


const classes = useStyles();

function dragStartHandler(e){
  e.preventDefault();
  setDrag(true)

}
function dragLeaveHandler(e){
  e.preventDefault();
  setDrag(false)

}
function onDropHandler(e) {
  e.preventDefault();
  let files =[...e.dataTransfer.files];
  const formData = new FormData();
  console.log(files);
  console.log(formData);
  formData.append('file', files[0]);
  
axios.post('http://localhost:8080/api/v1/fotos', formData)
  
  setDrag(false)

}

const changeHandler = (e) => {
  setUserUpdate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

const submitHandl = (e) => {
  e.preventDefault();
  axios.post('http://localhost:8080/api/v1/userupdate', userUpdate)

}

return(
<div>
<div className="divReg">
<h4>Изменить личные данные</h4>
<div>
    {drag
     ?
     <div
     onDragLeave={e =>dragStartHandler(e)}
     onDragStart={e => dragLeaveHandler(e)}
     onDragOver={e =>dragStartHandler(e)}
     onDrop ={e =>onDropHandler(e)}
     >Отпустите фото, чтобы его загрузить</div> : 
     <div
     onDragLeave={e =>dragStartHandler(e)}
     onDragStart={e => dragLeaveHandler(e)}
     onDragOver={e =>dragStartHandler(e)}
     >Перетащите сюда фото, чтобы его загрузить</div>
    }

  </div>

      <form

        onSubmit={submitHandl}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <FormControl component="fieldset" className={classes.formControl}>
        
       

      

        <div> 
          <TextField
            onChange={changeHandler}
            name="username"
            id="outlined-textarea"
            label="Ваше имя"
            multiline
            variant="outlined"
          />
        </div>

        <TextField
            onChange={changeHandler}
            name="userLastName"
            id="outlined-textarea"
            label="Ваша фамилия"
            multiline
            variant="outlined"
          />
        
        <div>
          <TextField
            onChange={changeHandler}
            id="outlined-textarea"
            name="email"
            // value={userSignUp.email}
            label="Электронная почта"
            multiline
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={changeHandler}
            id="date"
            name='date'
            label="день рождение"
            type="date"
            // defaultValue="1995-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <TextField
            onChange={changeHandler}
            id="outlined-textarea"
            name="nickname"
            label="Ник нейм"
            multiline
            variant="outlined"
          />


        </div>


       
      
        
        <RadioGroup aria-label="quiz" name="sex"  onChange={changeHandler}>
          <FormControlLabel value="мужской" control={<Radio />} label="Мужской" />
          <FormControlLabel value="женский" control={<Radio />} label="Женский" />
          <FormControlLabel value="не указано" control={<Radio />} label="Не указано" />
        </RadioGroup>
       
        
           




        <Button type="submit" variant="outlined" color="primary">
          Продолжить
        </Button>
      </FormControl>
      </form>

     

    </div>




    </div>


)

}


