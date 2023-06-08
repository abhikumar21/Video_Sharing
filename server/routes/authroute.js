
import express from 'express'
import { signUp, login, google } from '../controllers/authcontroller.js'


const router = express.Router()
router.post('/signup', signUp)
router.post('/login', login)
router.post('/google', google)

export default router;