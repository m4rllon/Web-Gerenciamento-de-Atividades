const getMonthWithNumber = (month:string) => {
    const monthList = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ];
    const monthNumber = Number(month)-1
    return monthList[monthNumber]
}

const setDateTaskCard = (date:string) => {
    const newDate = date.split('-')
    return `${newDate[2]} de ${getMonthWithNumber(newDate[1])} de ${newDate[0]}`
}

export default setDateTaskCard