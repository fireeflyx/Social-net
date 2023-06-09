import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUser } from "../../redux/auth-reducer";
import classes from './Login.module.css';
import ReduxLoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginUser(formData);
        console.log(formData);
    };

    if(props.isAuth){
        return <Navigate to="/profile" />
    }

    return (
        <div className={classes.login_wrapper}>
            <h1 className={classes.login}>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
}

const LoginContainer = connect(mapStateToProps, {loginUser})(Login);

export default LoginContainer;