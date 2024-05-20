export function formatToCOP(value: string | number) {
    if(!value) return '';
    // Convert to number if the input is a string
    const number = typeof value === 'string' ? parseFloat(value) : value;

    // Check if the number is valid
    if (isNaN(number)) {
        throw new Error('Invalid number');
    }

    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(number);
}