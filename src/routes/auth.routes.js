import { Router } from "express";
import * as authcrl from '../controllers/auth.controller';
const router = Router();

router.post('/singup', authcrl.singUp);

router.post('/singin', authcrl.singIn)

export default router;