import { useState } from "react"
import validateLogin from "../../helpers/validateLogin"
import axios from 'axios';
import styles from './Login.module.css'

const Login = () => {
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
            const response = await axios.post("http://localhost:3000/users/login", form);
            console.log(response);
            alert("Bienvenido")
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
      const {name} = event.target;
      setOnTouched({...onTouched, [name]: true})
      const newErrors = validateLogin(form)
      setErrors({...newErrors})
  }

   return (
      <form onSubmit={handleSubmit} className={styles.container}>
         <h1>Login</h1>
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
         </div>
      </form>
   );

}

export default Login;