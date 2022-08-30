function dataFormatada() {
    data = new Date();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const monthDay = data.getDate();
    const month = data.getMonth() + 1;
    const year = data.getFullYear();

    return `${formatTime(hours)}:${formatTime(minutes)} ${formatTime(
        monthDay
    )}/${formatTime(month)}/${year}`;
}

const formatTime = (unit) => (String(unit).length === 1 ? `0${unit}` : unit);

module.exports = dataFormatada;
