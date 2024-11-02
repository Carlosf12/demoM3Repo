import { useState } from "react";
import validateLogin from "../../helpers/validateLogin";
import axios from 'axios';
import styles from './Login.module.css';
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/toothLogo2.png";
import { Link, useNavigate } from 'react-router-dom';
import { USER_REGISTER } from '../../helpers/routes';

const Login = () => {
   const navigate = useNavigate();

   const [form, setForm] = useState({
      username: "",
      password: ""
   })

   const [errors, setErrors] = useState({})
   const [onTouched, setOnTouched] = useState({})

   const handleSubmit = async (event) => {
      event.preventDefault()

      const validationErrors = validateLogin(form);
      setErrors(validationErrors);


      try {
         if (Object.keys(validationErrors).length === 0) {
            await axios.post("http://localhost:3000/users/login", form);
            navigate(MY_APPOINTMENTS);
         } else {
            alert("Usuario invalido")
         }
      } catch (error) {
         console.error("No se pudo hacer el login con exito", error.response.data);
         alert("Usuario no valido")
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