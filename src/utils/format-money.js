export function formatMonetary(value) {
    if (value === null || value === undefined || isNaN(value) || value == '-') return '-'

    let currency = "$"

    const numberToString = value.toString();
    const parts = numberToString.split('.');

    let integerPart = parts[0];
    let decimalPart = parts[1] || '00';

    if (decimalPart.length < 2) {
        decimalPart = decimalPart.padEnd(2, '0');
    } else if (decimalPart.length > 2) {
        decimalPart = decimalPart.slice(0, 2);
    }

    const formatedNumber = integerPart + ',' + decimalPart;
    var pointNumber = parseFloat(formatedNumber.replace(',', '.'));

    return currency + ' ' + pointNumber.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}