import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../../redux/actions/user";

export default function LoginSuccess() {
const dispatch = useDispatch();
const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8080/auth/user', {
    credentials: 'include'
  })
    .then(res => res.json())
    .then((data) => dispatch(setUser(data)));
    history.push('/')
  }, []);

  return (
    <>
      <div>Успешно!</div>
    </>
  )
}
