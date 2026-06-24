import type { Metadata } from 'next'
import ProductLanding from '../_products/ProductLanding'
import { PRODUCTS } from '../_products/data'

const product = PRODUCTS.mktviral

export const metadata: Metadata = {
  title: `${product.name} — ${product.tagline} | MKT Software`,
  description: product.description,
  alternates: { canonical: `/xaykenh/${product.slug}` },
}

export default function Page() {
  return <ProductLanding product={product} />
}
