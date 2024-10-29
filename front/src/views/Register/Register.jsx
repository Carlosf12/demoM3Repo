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

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        birthdate: '',
        nDni: '',
        username: '',
        password: ''
    })
    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateRegister(form);   

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post("http://localhost:3000/users/register", form);
                console.log(response);
                alert("Registro Exitoso");
            } catch (error) {
                console.error("Registro fallido", error.response.data);
            }
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        const newErrors = validateRegister(form);
        setErrors({ ...newErrors });
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
                        onChange={handleInputChange} />
                        {/* {errors.name && <span className="error">{errors.name}</span>} */}
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        value={form.email}
                        name="email"
                        placeholder="example@gmail.com"
                        onChange={handleInputChange} />
                        {/* {errors.name && <span className="error">{errors.name}</span>} */}
                </div>
                <div>
                    <label>Fecha de Nacimiento: </label>
                    <input
                        type="date"
                        value={form.birthdate}
                        name="birthdate"
                        placeholder="DD/MM/YYYY"
                        onChange={handleInputChange} />
                        {/* {errors.name && <span className="error">{errors.name}</span>} */}
                </div>
                <div>
                    <label>Número de DNI: </label>
                    <input
                        type="text"
                        value={form.nDni}
                        name="nDni"
                        placeholder="# de Identificacíon"
                        onChange={handleInputChange} />
                        {/* {errors.name && <span className="error">{errors.name}</span>} */}
                </div>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={form.username}
                        name="username"
                        placeholder="username"
                        onChange={handleInputChange} />
                        {/* {errors.name && <span className="error">{errors.name}</span>} */}
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={form.password} 
                        name="password"
                        placeholder="********"
                        onChange={handleInputChange} />
                        {/* {errors.name && <span className="error">{errors.name}</span>} */}
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}> Registrarse </button>
                </div>
            </div>
        </form>
    )

}

export default Register;