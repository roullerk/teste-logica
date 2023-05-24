const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]

module.exports = () => {
  const productsObj = {}

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const [color, size] = product.split("-")
    if (productsObj.hasOwnProperty(color)) {
      if (productsObj[color].hasOwnProperty(size)) {
        productsObj[color][size] += 1;
      } else {
        productsObj[color][size] = 1;
      }
    }
    else {
      productsObj[color] = {
        [size]: 1
      }
    }
  }
  return productsObj;
}
