export const validateNewAppointment = (input) => {
    const { date, time } = input;
    const errors = {};

    // Validación de formato de fecha y hora con expresiones regulares
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const timeRegex = /^\d{2}:\d{2}$/; // Puedes ajustar para incluir segundos si es necesario

    if (!dateRegex.test(date)) {
        errors.date = 'La fecha debe tener el formato YYYY-MM-DD';
    }

    if (!timeRegex.test(time)) {
        errors.time = 'La hora debe tener el formato HH:mm';
    }

    // Si los formatos son correctos, procedemos a crear el objeto Date
    if (!errors.date && !errors.time) {
        const appointmentDateTime = new Date(`${date}T${time}`);

        // Validación de fecha futura
        const today = new Date();
        if (appointmentDateTime <= today) {
            errors.date = 'La cita debe ser agendada para una fecha posterior a la actual';
        }

        // Validación de horario laboral (ajustar según horario de atención)
        const startTime = new Date(appointmentDateTime.getFullYear(), appointmentDateTime.getMonth(), appointmentDateTime.getDate(), 8, 0, 0);
        const endTime = new Date(appointmentDateTime.getFullYear(), appointmentDateTime.getMonth(), appointmentDateTime.getDate(), 17, 0, 0);
        if (appointmentDateTime < startTime || appointmentDateTime > endTime) {
            errors.time = 'El horario de atención es de 8:00 AM a 5:00 PM';
        }

        // Validación de días de la semana (opcional)
        const day = appointmentDateTime.getDay();
        if (day === 0 || day === 6) { // 0: Domingo, 6: Sábado
            errors.date = 'No se atienden citas los fines de semana';
        }

    }

    return errors;
};