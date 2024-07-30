import { Router } from 'express';
const router = Router();
import {insertMessage } from '../controller/MessagingController.js';

router.get('/insert-message', insertMessage);

export default router;