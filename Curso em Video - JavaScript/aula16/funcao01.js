function parimp(n) {
  if (n%2==0) {
    return 'Par!'
  } else {
    return 'Impar!'
  }
}

console.log(`O valor digitado é um número ${parimp(12)}`)