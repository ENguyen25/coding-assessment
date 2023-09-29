import express from 'express';
import Subscriber from './model.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
      });

    try {
        await newSubscriber.save();
        res.status(200).json(newSubscriber);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
});

export default router;