const removeDuplicates = (list: string[]): string[] => {
  const table = new Set()
  const result: string[] = []
  for (const item of list) {
    if (!table.has(item)) {
      table.add(item)
      result.push(item)
    }
  }
  return result
}

export default removeDuplicates
