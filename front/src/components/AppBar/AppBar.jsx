import React, { useEffect } from "react";
import "./AppBar.css";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import logo from "../../images/Cinder.jpg";
import { getUserFromServer } from "../../redux/actions/user";
import { useThemeContext } from "../../context/context";

export default function AppBar() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch()

  useEffect(() => {
    if (user === null) {
      dispatch(getUserFromServer());
    }
    
  }, [user, dispatch])

  
  const {theme, setTheme, anotherThemeSet} = useThemeContext()

 
  return (
    <nav>
      <div className={theme ? "topnav" : "topnav2"}>
        <Link to="/">
          CINDER
        </Link>
        <div className="" id="navbarNav">
          <div className="">
            {user ? (
              <>
                <span className="right">
                  <NavLink exact to="/profile" className="">
                    Личный кабинет
                  </NavLink>
                </span>
                <span className="right">
                  <NavLink exact to="/logout" className="">
                    Выйти
                  </NavLink>
                </span>
              </>
            ) : (
              <>
                <span className="right">
                  <NavLink exact to="/login" className="">
                    Войти
                  </NavLink>
                </span>
              </>
            )}
            <Switch
              checked={theme.checkedA}
              onChange={anotherThemeSet}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
              className="right switch  "
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
