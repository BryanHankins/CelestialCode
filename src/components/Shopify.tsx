// src/shopify.ts
import { Product } from './Types';

export const fetchShopifyProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`https://${process.env.REACT_APP_SHOPIFY_STORE_DOMAIN}/api/2021-07/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
      },
      body: JSON.stringify({
        query: `
          {
            products(first: 10) {
              edges {
                node {
                  id
                  title
                  description
                  images(first: 1) {
                    edges {
                      node {
                        originalSrc
                      }
                    }
                  }
                  variants(first: 1) {
                    edges {
                      node {
                        price
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }

    const { data } = await response.json();

    if (!data || !data.products) {
      throw new Error('No products found in the response');
    }

    return data.products.edges.map(({ node }: any) => ({
      id: node.id,
      title: node.title,
      description: node.description,
      image: node.images.edges[0]?.node.originalSrc || '',
      price: node.variants.edges[0]?.node.price || '',
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
