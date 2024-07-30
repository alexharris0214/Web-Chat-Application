import { Router } from 'express';
const router = Router();
import {insertMessage, getConversations } from '../controller/MessagingController.js';

router.post('/insert-message', insertMessage);
router.post('/get-convos', getConversations )
export default router;