const formatNumber = (
  number: number,
  locales = 'ru',
  options?: Intl.NumberFormatOptions,
) => {
  const DEFAULT_OPTIONS: Intl.NumberFormatOptions = {
    maximumFractionDigits: 2,
  }

  const numberFormat = new Intl.NumberFormat(locales, options || DEFAULT_OPTIONS)

  return numberFormat.format(number)
}

export default formatNumber
