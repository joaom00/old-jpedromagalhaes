import type { NextApiRequest, NextApiResponse } from 'next'
import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: 'user-read-currently-playing user-top-read',
        redirect_uri: 'http://localhost:3000/'
      })
  )
}
