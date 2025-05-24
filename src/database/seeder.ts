import 'dotenv/config';
import { AppDataSource } from './data-source';

async function runSeeders() {
  await AppDataSource.initialize();
  console.log('🚀 Database connected');

  console.log('✅ Seeding completed');
  await AppDataSource.destroy();
}

runSeeders().catch((error) => {
  console.error('❌ Seeding failed', error);
  process.exit(1);
});
