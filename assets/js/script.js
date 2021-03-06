const date = new Date()

const showCalendar = () => {
  date.setDate(1)

  const month = document.querySelector('.days')
  const year = date.getFullYear()

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const previousDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

  const firstDayIndex = date.getDay()
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDay()

  const nextDays = 7 - lastDayIndex - 1

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ]

  document.querySelector('.date h1').innerHTML =
    months[date.getMonth()] + ' - ' + year

  document.querySelector('.date p').innerHTML = new Date().toDateString()

  let days = ''

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${previousDay - x + 1}</div>`
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`
    } else {
      days += `<div>${i}</div>`
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`
    month.innerHTML = days
  }
}

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1)
  showCalendar()
})

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1)
  showCalendar()
})

showCalendar()
