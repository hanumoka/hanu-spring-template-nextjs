import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {

    if (_req.method === 'POST') {
      // Process a POST request
      const result = {
        "userId": 1,
        "username": 'test1',
        "accessToken": "aaaabbbbcccc",
      };

      res.status(200).json(result);
    } else {
      // Handle any other HTTP method
      res.status(404);
    }

  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
