import type { NextApiRequest, NextApiResponse } from 'next'

const modelUrl = new URL(
  'https://api-inference.huggingface.co/models/VERSAYANA/versayana6'
)
type Data = {
  image: string
}

type Error = {
  error: unknown
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { method } = req
  if (req.method === 'POST') {
    try {
      const response = await fetch(modelUrl, {
        headers: {
          Authorization: `Bearer ${process.env.HF_AUTH_KEY}`,
          'Content-Type': 'application/json',
          'x-use-cache': 'false',
        },
        method: 'POST',
        body: JSON.stringify({ inputs: req.body.prompt }),
      })
      if (!response.ok) {
        // Model not loaded
        if (response.status === 503) {
          const data = await response.json()
          res.status(503).json(data)
        } else {
          const error = await response.json()
          res.status(response.status).json({ error })
        }
      } else {
        const buffer = await response.arrayBuffer()
        const base64 =
          'data:image/png;base64,' + Buffer.from(buffer).toString('base64')
        res.status(200).json({ image: base64 })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'An unknown error occured' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${method} Not Allowed`)
  }
}
