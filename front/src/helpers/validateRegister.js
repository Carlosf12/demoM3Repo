export const validateRegister = (input) => {
    const errors = {};

    const maxLength = 25; // Longitud máxima permitida

    // Nombre: Solo letras, máximo 25 caracteres
    if (input.name && /\d/.test(input.name)) {
        errors.name = "El nombre no debe contener números";
    } else if (input.name.length > maxLength) {
        errors.name = `El nombre no puede exceder los ${maxLength} caracteres`;
    }

    // Email: inputato de correo electrónico, máximo 25 caracteres
    if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
        errors.email = "Ingrese un email válido";
    } else if (input.email.length > maxLength) {
        errors.email = `El email no puede exceder los ${maxLength} caracteres`;
    }

    // Fecha de nacimiento: inputato de fecha (validar si es necesario)
    if (!input.birthdate) {
        errors.birthdate = "La fecha de nacimiento es obligatoria";
    } else {
        // Obtener la fecha actual
        const fechaActual = new Date();

        // Validar si la fecha ingresada no es posterior a la fecha actual
        const fechaIngresada = new Date(input.birthdate);
        if (!isNaN(fechaIngresada) && fechaIngresada > fechaActual) {
            errors.birthdate = "La fecha de nacimiento no puede ser posterior a la fecha actual";
        }
    }

    // DNI: Solo números, máximo 25 caracteres
    if (input.nDni && isNaN(input.nDni)) {
        errors.nDni = "El DNI debe ser un número";
    } else if (input.nDni.length > maxLength) {
        errors.nDni = `El DNI no puede exceder los ${maxLength} caracteres`;
    }

    // Username: Alfanumérico, máximo 25 caracteres
    if (!input.username || !/^[a-zA-Z0-9]+$/.test(input.username)) {
        errors.username = "El nombre de usuario debe ser alfanumérico";
    } else if (input.username.length > maxLength) {
        errors.username = `El nombre de usuario no puede exceder los ${maxLength} caracteres`;
    }

    // Password: Puedes agregar validaciones de longitud y complejidad
    if (!input.password) {
        errors.password = "La contraseña es obligatoria";
    } else if (input.password.length > maxLength) {
        errors.password = `La contraseña no puede exceder los ${maxLength} caracteres`;
    }

    return errors;
}