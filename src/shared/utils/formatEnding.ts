type Words = [string, string, string]

const formatEnding = (number: number, words: Words = ['год', 'года', 'лет']) => {
  const isThirdOption = number % 100 > 4 && number % 100 < 20
  const VARIANTS = [2, 0, 1, 1, 1, 2]
  const index = isThirdOption ? 2 : VARIANTS[number % 10 < 5 ? Math.abs(number) % 10 : 5]

  return words[index]
}

export default formatEnding
