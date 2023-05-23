import express from 'express'
import { getResults, postResult } from './result.controller.js';

const router = express.Router()

router.get('/', getResults)
router.post('/add-result', postResult)


export default router;