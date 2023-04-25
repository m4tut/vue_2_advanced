const toNbsp = <T>(text: T): T | string => {
  if (typeof text !== 'string' || !text) {
    return text
  }

  const NON_BREAK_SPACE = '\u00A0'

  const charRegex = new RegExp(
    `(?:&nbsp;| )([а-яёА-ЯЁa-zA-Z0-9]{1,2}) (?=[а-яёА-ЯЁa-zA-Z0-9])`,
    'gi',
  )
  const numberRegex = new RegExp(`(\\d+) `, 'gi')

  return text
    .replace(numberRegex, `$1${NON_BREAK_SPACE}`)
    .replace(charRegex, ` $1${NON_BREAK_SPACE}`)
}

export default toNbsp
