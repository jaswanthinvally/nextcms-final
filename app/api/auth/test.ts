import {NextApiRequest,NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      return res.json({ response: "welcome to the next js" });
    } else if (req.method === 'POST') {
      // Handle POST requests here
      return res.status(200).json({ message: "Post request received" });
    } else {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  