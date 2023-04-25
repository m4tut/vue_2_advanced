type FormatType = 'date' | 'datetime' | 'time' | 'iso'

const formatDate = (date: Date, type: FormatType = 'date') => {
  switch (type) {
    case 'date':
      return date.toLocaleDateString()

    case 'datetime':
      return date.toLocaleString()

    case 'time':
      return date.toLocaleTimeString()

    case 'iso':
      return date.toISOString()

    default:
      return date.toString()
  }
}

export default formatDate
