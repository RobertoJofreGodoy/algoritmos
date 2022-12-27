const table = {}

const fibonacci = (n: number) => {
  if (n in table) return table[n]
  if (n < 2) return n
  table[n] = fibonacci(n - 1) + fibonacci(n - 2)
  return table[n]
}

console.log(fibonacci(10))