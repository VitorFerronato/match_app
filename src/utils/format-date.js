export function formatDate(dataString) {
    if (!dataString) return

    let data = new Date(dataString);

    let dia = data.getDate().toString().padStart(2, '0');
    let mes = (data.getMonth() + 1).toString().padStart(2, '0'); // getMonth() retorna mês de 0-11
    let ano = data.getFullYear();

    let horas = data.getHours().toString().padStart(2, '0');
    let minutos = data.getMinutes().toString().padStart(2, '0');

    return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
}