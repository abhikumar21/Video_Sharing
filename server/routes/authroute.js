
import express from 'express'
import { signUp, login, googleAuth } from '../controllers/authcontroller.js'


const router = express.Router()
router.post('/signup', signUp)
router.post('/login', login)
router.post('/google', googleAuth)

export default router;