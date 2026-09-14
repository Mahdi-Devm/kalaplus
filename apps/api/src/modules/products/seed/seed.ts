import { Product } from 'src/modules/products/entities/product.entity';

import dataSource from 'src/config/data-source';
import { Category } from '../entities/category.entity';
import { categorySeed } from './category.seed';
import { createProductSeed } from './product.seed';

async function seed() {
  await dataSource.initialize();

  const categoryRepository = dataSource.getRepository(Category);
  const productRepository = dataSource.getRepository(Product);

  console.log('🌱 Starting seed...');

  await productRepository.clear();

  await categoryRepository.clear();

  const categories = categoryRepository.create(categorySeed);

  const savedCategories = await categoryRepository.save(categories);

  console.log(`✅ ${savedCategories.length} categories created`);

  const products = createProductSeed(savedCategories);

  const savedProducts = productRepository.create(products);

  await productRepository.save(savedProducts);

  console.log(`✅ ${savedProducts.length} products created`);

  console.log('🌱 Seed completed successfully');

  await dataSource.destroy();
}

seed().catch(async (error) => {
  console.error('❌ Seed failed:', error);

  if (dataSource.isInitialized) {
    await dataSource.destroy();
  }

  process.exit(1);
});
