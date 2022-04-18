const { getDbRef } = require('../../lib/mongo');
const COLLECTION_NAME = 'items';

async function getProducts() {
  try {
    const products = await getDbRef()
      .collection(COLLECTION_NAME)
      .find({})
      .toArray();
    return { products };
  } catch (error) {
    return { error };
  }
}

async function createProduct(product) {
  try {
    const result = await getDbRef()
      .collection(COLLECTION_NAME)
      .insertOne(product);
    return {
      success: true,
      productId: result.insertId,
    };
  } catch (error) {
    return { error };
  }
}

module.exports = { getProducts, createProduct };
