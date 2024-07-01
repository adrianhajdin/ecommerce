import axios from 'axios'
import { Router } from 'express'

import payload from 'payload'

const router = Router()
import crypto from 'crypto'

router.post('/create-order', async (req, res) => {
  let userId;

  function generateRandomPassword(length) {
    return crypto.randomBytes(length).toString('hex');
  }

  try {
    const result = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: req.body.userMail,
        },
      },
    });

    if (result.docs.length === 0) {
      const randomPassword = generateRandomPassword(8);
      const createUserResult = await payload.create({
        collection: 'users',
        data: {
          email: req.body.userMail,
          socialId: req.body.userSocialId,
          name: req.body.userName,
          password: randomPassword
        }
      });
      userId = createUserResult.id;
    } else {
      userId = result.docs[0].id;
    }

  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }

  try {
    const createOrderResult = await payload.create({
      collection: 'orders',
      data: {
        orderedBy: userId,
        total: req.body.total,
        items: req.body.items,
        shippingTicket: req.body.shippingTicket,
        shippingZipCode: req.body.shippingZipCode,
        shippingHouseNumber: req.body.shippingHouseNumber,
        userSocialId: req.body.userSocialId,
        userPhoneNumber: req.body.userPhoneNumber
      }
    });

    return res.json(createOrderResult);

  } catch (error) {
    console.error('Error creating order:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;

