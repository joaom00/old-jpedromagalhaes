import { About } from 'templates'

export default function AboutPage({ nowPlaying, topTracks }) {
  return <About nowPlaying={nowPlaying} topTracks={topTracks.tracks} />
}

export async function getServerSideProps() {
  const nowPlayingResponse = await fetch(`${process.env.API_URL}/now-playing`)
  const topTracksResponse = await fetch(`${process.env.API_URL}/top-tracks`)

  const nowPlaying = await nowPlayingResponse.json()
  const topTracks = await topTracksResponse.json()

  return {
    props: {
      nowPlaying,
      topTracks
    }
  }
}
