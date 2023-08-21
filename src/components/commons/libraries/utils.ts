export const getDate = (date: Date): string => {
  const _date = new Date(date)
  const yyyy = _date.getFullYear()
  const mm = String(_date.getMonth() + 1).padStart(2, "0")
  const dd = String(_date.getDate()).padStart(2, "0")
  return `${yyyy}-${mm}-${dd}`
}

export const elapsedTime = (date: Date): string => {
  const start = new Date(date)
  const end = new Date()

  const seconds = Math.floor((end.getTime() - start.getTime()) / 1000)
  // if (seconds < 60) return "방금 전"

  // const minutes = seconds / 60
  // if (minutes < 60) return `${Math.floor(minutes)}분 전`

  // const hours = minutes / 60
  // if (hours < 24) return `${Math.floor(hours)}시간 전`

  // const days = hours / 24
  // if (days < 7) return `${Math.floor(days)}일 전`

  // return `${start.toLocaleDateString()}`

  // 아니면........

  if (seconds < 60) return "방금 전"
  else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60)
    return `${minutes}분 전`
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600)
    return `${hours}시간 전`
  } else if (seconds < 604800) {
    const days = Math.floor(seconds / 86400)
    return `${days}일 전`
  }
  return getDate(date)
}
