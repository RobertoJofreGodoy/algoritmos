interface FrequencyMap {
  [key: number]: number
}

const getFrequency = (list: number[]): FrequencyMap => {
  const frequencyMap: FrequencyMap = {}
  for (const item of list) {
    frequencyMap[item] = frequencyMap[item] + 1 || 1
  }
  return frequencyMap
}

const kFrequentElements = (list: number[], k: number): number[] => {
  // obtener frecuencias
  const frequencyMap = getFrequency(list)
  // transformar Hash de frecuencias a lista ordenada
  return Object.keys(frequencyMap)
    .sort((a: any, b: any) => frequencyMap[b] - frequencyMap[a])
    .slice(0, k)
    .map((item) => Number(item))
}

// La parte dónde ordenamos la lista de frecuencias podría ser mucho más eficiente
// ya que el método sort es O(n log n) y podríamos hacerlo en O(n) con un algoritmo
// de ordenamiento más eficiente como quicksort o heapsort

export default kFrequentElements