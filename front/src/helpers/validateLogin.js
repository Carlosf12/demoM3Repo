const validateLogin = (input) => {
    const errors = {};

    const maxLength = 25; // Longitud máxima permitida

    // Nombre de usuario: Alfanumérico, máximo 25 caracteres
    if (!input.username || !/^[a-zA-Z0-9]+$/.test(input.username)) {
        errors.username = "El nombre de usuario debe ser alfanumérico";
    } else if (input.username.length > maxLength) {
        errors.username = `El nombre de usuario no puede exceder los ${maxLength} caracteres`;
    }

    // Contraseña: No puede estar vacía
    if (!input.password) {
        errors.password = "La contraseña es requerida";
    }

    return errors;
};

export default validateLogin;