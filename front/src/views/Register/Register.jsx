import axios from "axios"
import { useState } from "react"
import styles from "./Register.module.css"
import validateRegister from "../../helpers/validateRegister";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const [onTouched, setOnTouched] = useState({})

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateRegister(form);   

        setErrors(validationErrors);

            try {
                if(!Object.keys(errors).length === 0){
                    const response = await axios.post("http://localhost:3000/users/register", form);
                    console.log(response);
                    alert("Registro Exitoso");
                }
                else{
                    alert("Errores en el formulario")
                }
            } catch (error) {
                console.error("Registro fallido", error.response.data);
            }
        
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        const newErrors = validateRegister(form);
        setErrors({ ...newErrors });
    }

    const handleBlur = (event) => {
        const {name} = event.target;
        setOnTouched({...onTouched, [name]: true})
        const newErrors = validateRegister(form)
        setErrors({...newErrors})
    }

    return (
        <form className={styles.container}>
            <h2>Formulario de Registro</h2>
            <div className={styles.inputGallery}>
                <div>
                    <label>Nombre: </label>
                    <input
                        type="text"
                        value={form.name}
                        name="name"
                        placeholder="Mauricio Suarez"
                        onChange={handleInputChange} 
                        onBlur={handleBlur}
                        />
                        {onTouched.name && errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        value={form.email}
                        name="email"
                        placeholder="example@gmail.com"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        />
                        {onTouched.email && errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
                <div>
                    <label>Fecha de Nacimiento: </label>
                    <input
                        type="date"
                        value={form.birthdate}
                        name="birthdate"
                        placeholder="DD/MM/YYYY"
                        onChange={handleInputChange} 
                        onBlur={handleBlur}
                        />
                        {onTouched.birthdate && errors.birthdate && <p className={styles.error}>{errors.birthdate}</p>}
                </div>
                <div>
                    <label>Número de DNI: </label>
                    <input
                        type="text"
                        value={form.nDni}
                        name="nDni"
                        placeholder="# de Identificacíon"
                        onChange={handleInputChange} 
                        onBlur={handleBlur}
                        />
                        {onTouched.nDni && errors.nDni && <p className={styles.error}>{errors.nDni}</p>}
                </div>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={form.username}
                        name="username"
                        placeholder="username"
                        onChange={handleInputChange} 
                        onBlur={handleBlur}
                        />
                        { onTouched.username && errors.username && <p className={styles.error}>{errors.username}</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={form.password} 
                        name="password"
                        placeholder="********"
                        onChange={handleInputChange} 
                        onBlur={handleBlur}
                        />
                        { onTouched.password && errors.password && <p className={styles.error}>{errors.password}</p>}
                </div>
                <div>
                   <button type="submit" onClick={handleSubmit}> Registrarse </button>
                </div>
            </div>
        </form>
    )

}

export default Register;