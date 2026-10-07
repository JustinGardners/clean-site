import { getQuery } from 'h3'
import products from "../mock/products";
import { sanitizeParams } from '../utils';

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const contributor = sanitizeParams(query.contributor)
  const productName = sanitizeParams(query.productName)

  console.log("API called: /api/test-products", {
    raw: query.contributor,
    contributor,
    productName,
  })

  return products.filter((product) => {
    const actualContributor = product?.product?.raw?.contributor
    const actualProductName = product?.product?.raw?.title

    const matchesContributor = !contributor || (
      typeof actualContributor === "string" &&
      actualContributor.toLowerCase().includes(contributor.toLowerCase())
    )
    const matchesProductName = !productName || (
      typeof actualProductName === "string" &&
      actualProductName.toLowerCase().includes(productName.toLowerCase())
    )

    return matchesContributor && matchesProductName
  })
})


