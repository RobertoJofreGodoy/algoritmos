// bubble sort

const list = [5, 4, 3, 2, 1, 8, 7, 6, 9, 10]

const bubbleSort = (list: number[]) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = temp
      }
    }
  }
  return list
}