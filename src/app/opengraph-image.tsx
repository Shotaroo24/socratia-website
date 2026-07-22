import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const alt = 'Socratia Academy'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
// Cache the OG image at build time; no revalidation needed for a static brand image.
export const dynamic = 'force-static'
export const revalidate = false

// Font is read once per server process and cached in this module-level Promise.
// Uses the repo-vendored static weight-500 font (src/app/fonts/) rather than a
// node_modules internal path, so it doesn't break if the package layout changes.
// A static (non-variable) .woff file is used: satori does not interpolate
// variable font weight axes, and does not support the .woff2 signature.
const fontPromise = readFile(
  path.join(process.cwd(), 'src/app/fonts/cormorant-garamond-latin-500.woff')
)

export default async function Image() {
  const font = await fontPromise

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B1522',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{
          fontFamily: 'Cormorant Garamond',
          fontSize: '96px',
          fontWeight: 500,
          letterSpacing: '0.12em',
          color: '#E8DFD0',
        }}>
          SOCRATIA
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cormorant Garamond',
          data: font,
          weight: 500,
          style: 'normal',
        },
      ],
    }
  )
}
