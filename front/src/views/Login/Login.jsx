import { useState } from "react";
import validateLogin from "../../helpers/validateLogin";
import axios from 'axios';
import styles from './Login.module.css';
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/toothLogo2.png";
import { Link, useNavigate } from 'react-router-dom';
import { USER_REGISTER, HOME } from '../../helpers/routes';
import { useUserContext } from "../../context/UserContext";

const Login = () => {
   const navigate = useNavigate();
   const { updateUser } = useUserContext();
   const [form, setForm] = useState({
      username: "",
      password: ""
   });
   const [errors, setErrors] = useState({});
   const [onTouched, setOnTouched] = useState({});
   const [loginError, setLoginError] = useState("");
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (event) => {
      event.preventDefault()
      setLoading(true);
      setLoginError("");

      const validationErrors = validateLogin(form);
      setErrors(validationErrors);

      try {
         const res = await axios.post("http://localhost:3000/users/login", form);
         console.log("Datos de usuario recibidos al loguearse:", res.data);
         updateUser(res.data.user);
         alert("Login exitoso");
         setForm({ username: "", password: "" })
         navigate(HOME);
      } catch (error) {
         alert("Usuario o contraseña incorrectos.")
      } finally {
         setLoading(false);
      }

   }
   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
      const newErrors = validateLogin(form);
      setErrors({ ...newErrors });
   }

   const handleBlur = (event) => {
      const { name } = event.target;
      setOnTouched({ ...onTouched, [name]: true })
      const newErrors = validateLogin(form)
      setErrors({ ...newErrors })
   }

   return (
      <div>
         <form onSubmit={handleSubmit} className={styles.container}>
            {loginError && <p className={styles.errorMessage}>{loginError}</p>}
            <h1>Login</h1>
            <img src={logo} alt="imageLogo" className={styles.imageLogo} />
            <h3 className={styles.titleLogo}>TuutTooth</h3>
            <h4 className={styles.logoQuote}>Sonrie sin preocupaciones!</h4>
            <div className={styles.inputGallery}>
               <div>
                  {/* Username field */}
                  <label>Username:</label>
                  <input
                     type="text"
                     name="username"
                     value={form.username}
                     onChange={handleInputChange}
                     onBlur={handleBlur}
                  />
                  {onTouched.username && errors.username && <p className={styles.errorMessage}>{errors.username}</p>}
               </div>
               <div>
                  {/* Password field */}
                  <label> Password: </label>
                  <input
                     type="password"
                     name="password"
                     value={form.password}
                     onChange={handleInputChange}
                     onBlur={handleBlur}
                  />
                  {onTouched.password && errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
               </div>
               {/* Submit button */}
               <button type="submit" onClick={handleSubmit}>Iniciar Sesión</button>
               <p>No estas registrado? Registrate haciendo click <Link to={USER_REGISTER}>AQUI</Link> </p>
            </div>
            <Footer />
         </form>

      </div>
   );

}

export default Login;