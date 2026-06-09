import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync } from 'node:fs'
import { dirname, join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'
import ffmpegPath from 'ffmpeg-static'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const videosDir = join(root, 'public', 'media', 'videos')
const previewsDir = join(root, 'public', 'media', 'previews')
const postersDir = join(root, 'public', 'media', 'posters')

mkdirSync(previewsDir, { recursive: true })
mkdirSync(postersDir, { recursive: true })

const videoFiles = readdirSync(videosDir).filter((file) => file.toLowerCase().endsWith('.mp4'))

if (videoFiles.length === 0) {
  console.log('No source videos found in', videosDir)
  process.exit(0)
}

const run = (args) => {
  execFileSync(ffmpegPath, args, { stdio: 'inherit' })
}

for (const file of videoFiles) {
  const { name } = parse(file)
  const input = join(videosDir, file)
  const previewOut = join(previewsDir, `${name}.mp4`)
  const posterOut = join(postersDir, `${name}.jpg`)

  if (!existsSync(previewOut)) {
    console.log(`Preview clip → ${name}.mp4`)
    run([
      '-y',
      '-i', input,
      '-t', '24',
      '-an',
      '-vf', "scale='min(960,iw)':-2:flags=bicubic,fps=24",
      '-c:v', 'libx264',
      '-profile:v', 'high',
      '-pix_fmt', 'yuv420p',
      '-preset', 'veryfast',
      '-crf', '30',
      '-movflags', '+faststart',
      previewOut
    ])
  } else {
    console.log(`Preview exists, skip → ${name}.mp4`)
  }

  if (!existsSync(posterOut)) {
    console.log(`Poster → ${name}.jpg`)
    run([
      '-y',
      '-ss', '1',
      '-i', input,
      '-frames:v', '1',
      '-vf', "scale='min(1280,iw)':-2:flags=bicubic",
      '-q:v', '4',
      posterOut
    ])
  } else {
    console.log(`Poster exists, skip → ${name}.jpg`)
  }
}

console.log('Done generating previews and posters.')
