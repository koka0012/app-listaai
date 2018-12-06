import faker from 'faker'

export function productfaker(number: number) {
  const products = []
  for (let index = 0; index < number; index++) {
    const product = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(0.1, 100),
    }

    products.push(product)
  }

  return products
}
