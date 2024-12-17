import React, {useEffect, useState} from 'react';
import './LoginPage.scss';
import { useAppDispatch } from '../../../store';
import { ILoginRequest } from '../../../api/auth/types';
import { LocalStorageTokenKey, loginUser } from '../../../store/slices/auth';
import { useFormik } from 'formik';
import hidden from "/src/assets/images/icons/hidden2.svg"
import logo from "/src/assets/images/icons/logo-colored.svg"
import { useNavigate } from 'react-router-dom'; 

const LoginPage: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const onSubmit = (values: ILoginRequest) => {
    dispatch(loginUser(values))
      .unwrap()
      .then(() => {
        navigate('/main/courses');
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit
  });

  useEffect(() => {
    localStorage.removeItem(LocalStorageTokenKey);
  }, []);

  return (
    <div className="wrapper">
      <div className="login-box">
        <div className="container">
          <div className="login">
            <div className="login__header">
              <h1 className="login__header-title">корпоративный университет “ДЕЛЬТА трафо”</h1>
            </div>
            <form onSubmit={formik.handleSubmit} className="login__main">
              <a className="login__link" href="#">Вход в Личный кабинет</a>
              <div className="login__box">
                <div className="login__title">Адрес эл.почты</div>
                <input name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange} 
                      className="login__input input" 
                      type="email"/>
              </div>
              <div className="login__box">
                <div className="login__title">Пароль</div>
                <label className="password">
                  <input
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className="login__input password__input input" id="password" type={isHidden ? "password" :  "text"}/>
                   <button onClick={() => setIsHidden(!isHidden)} className="password__hidden" data-target="#password">
                      <img src={hidden}/>
                   </button>
                </label>
              </div>
              <button type='submit' className="login__btn" >Войти</button>
              <a className="login__link-password" href="#">Забыл пароль</a>
            </form>
            <div className="login__footer">
              <a className="login__footer-link logo" href="#">
                <img className="login__footer-img logo__img" src={logo} alt=""/>
              </a>
            </div>
          </div>
          {/* <div className="login-box__copy"><span>2023 КУ “Дельта Трафо”</span></div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
