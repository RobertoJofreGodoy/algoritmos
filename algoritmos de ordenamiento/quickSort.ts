// quick sort

const lista = [5, 4, 3, 2, 1, 8, 7, 6, 9, 10]

const quickSort = (
  list: number[],
  init: number = 0,
  last: number = list.length - 1
) => {
  if (init >= last) return list

  const index = partition(list, init, last)
  quickSort(list, init, index - 1)
  quickSort(list, index + 1, last)
  return list
}

const partition = (list: number[], init: number, last: number): number => {
  const pivot = list[init]
  let i = init + 1
  let j = last

  while (true) {
    while (i <= j && list[i] < pivot) i++
    while (j >= i && list[j] > pivot) j--
    if (j < i) break
    ;[list[i], list[j]] = [list[j], list[i]]
    i++
    j--
  }
  ;[list[init], list[j]] = [list[j], list[init]]
  return j
}

console.log(quickSort(lista))

