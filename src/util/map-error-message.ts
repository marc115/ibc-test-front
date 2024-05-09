// Function that maps status codes to user-friendly error messages
export const mapErrorMessage = (status: number): string => {
    switch (status) {
        case 401:
            return "Acceso no autorizado. Por favor inicie sesión.";
        case 403:
            return "Acceso restringido. No tiene los roles para esta acción"
        case 404:
            return "No se encontró el recurso";
        case 500:
            return "Error del servidor. Por favor, inténtelo de nuevo más tarde";
        default:
            return `Unexpected error occurred (Status: ${status})`;
    }
}
