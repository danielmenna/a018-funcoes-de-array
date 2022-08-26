const objeto = {
  nome: 'astrodev',
  profissao: 'Dev das estrelas',
  username: 'astrodev_labenu',
  senha: 'melhorDeTodos'
}

//1

function upperCase(items) {
  let copyObject = {}
  for (let i in items) {
    copyObject[i] = items[i].toUpperCase()
  }
  return copyObject
}

console.log(upperCase(objeto))

//2
function objeto2(items) {
  arrayValores = []
  for (items in objeto) {
    let valordeP = objeto[items]
    arrayValores.push(valordeP)
  }
  return arrayValores.toString().replaceAll(',', ' ')
}
console.log(objeto2(objeto))
//3

function aula1(caract) {
  const caixaAlta = upperCase(caract)
  return caixaAlta
}
console.log(aula1(upperCase(objeto)))

function aula2(string) {
  const stringObjeto = objeto2(string)
  return stringObjeto
}

console.log('Aula 2 ' + aula2(objeto2(objeto)))

function callback(objeto) {
  const textoCaixaAlta = objeto2(objeto).toUpperCase()
  return textoCaixaAlta
}

console.log(callback(objeto2(objeto)))
