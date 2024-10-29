import { useState } from "react"
import validateLogin from "../../helpers/validateRegister"
import axios from 'axios';
import styles from './Login.module.css'

const Login = () => {
   const [form, setForm] = useState({
      username: "",
      password: ""
   })

   const [erros, setErrors] = useState({
      username: "",
      password: ""
   })

   const handleSubmit = async (event) => {
      event.preventDefault()

      const validationErrors = validateLogin(form);
      setErrors(valid);

      if (Object.keys(validationErrors).length === 0) {
         try {
            const response = await axios.post("http://localhost:3000/users/login", form);
            console.log(response);
            alert("Bienvenido")
         } catch (error) {
            console.error("No se pudo hacer el login con exito", error.response.data);
         }
      }
   }
   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
      const newErrors = validateLogin(form);
      setErrors({ ...newErrors });
   }

   return (
      <form onSubmit={handleSubmit} className={styles.container}>
         <div className={styles.inputGallery}>
            <div>
               {/* Username field */}
               <label>Username:</label>
               <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleInputChange}
               />
               {erros.username && <p className="error-message">{erros.username}</p>}
            </div>
            <div>
               {/* Password field */}
               <label> Password: </label>
               <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
               />
               {erros.password && <p className="error-message">{erros.password}</p>}
            </div>
            {/* Submit button */}
            <button type="submit">Iniciar Sesión</button>
         </div>
      </form>
   );

}

export default Login;