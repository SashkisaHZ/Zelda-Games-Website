import { getData } from './ajax.js';

(async function () {
  document.addEventListener('DOMContentLoaded', async function () {
    console.log('Page loaded. Fetching data...');

    try {
      const [games, characters] = await Promise.all([
        getData('/games'),
        getData('/characters')
      ]);

      console.log('✅ Games:', games);
      console.log('✅ Characters:', characters);

    } catch (error) {
      console.error('❌ Failed to load data:', error);
    }
  });
})();
