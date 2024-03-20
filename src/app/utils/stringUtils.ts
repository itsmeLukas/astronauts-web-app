export function formatDateFromAPI(dateFromAPI: string): string {
    const date = new Date(dateFromAPI);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = (day < 10 ? '0' : '') + day + '.' + (month < 10 ? '0' : '') + month + '.' + year;
    return formattedDate;
}

export function formatDateToYYYYMMDD(originalDateString: string): string {
    const parts = originalDateString.split('T')[0].split('-');
    const formattedDate = parts[0] + '-' + parts[1] + '-' + parts[2];
    return formattedDate;
}