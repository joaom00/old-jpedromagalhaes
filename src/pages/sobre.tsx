import { About } from 'templates/About'

export default function AboutPage({ nowPlaying, topTracks }) {
  return <About nowPlaying={nowPlaying} topTracks={topTracks.tracks} />
}

export async function getServerSideProps() {
  const nowPlayingResponse = await fetch('http://localhost:3000/api/now-playing')
  const topTracksResponse = await fetch('http://localhost:3000/api/top-tracks')

  const nowPlaying = await nowPlayingResponse.json()
  const topTracks = await topTracksResponse.json()

  return {
    props: {
      nowPlaying,
      topTracks
    }
  }
}
