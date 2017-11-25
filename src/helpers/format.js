export const formatPadding = (value, padding = 2) => String(value).padStart(padding, '0')

export const formatTime = (date) => {
  const hours = formatPadding(date.getHours())
  const minutes = formatPadding(date.getMinutes())
  const formated = `${hours}:${minutes}`
  return formated
}
