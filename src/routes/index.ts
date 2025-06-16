import { Router } from 'express';
import { getIndex, getAbout, getCharacters } from '../controllers/indexController.js';

const router: Router = Router();

router.get('/', getIndex);
router.get('/about', getAbout);
router.get('/characters', getCharacters);

export default router;
