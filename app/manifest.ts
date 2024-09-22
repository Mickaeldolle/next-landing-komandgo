import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Komandgo',
    short_name: 'Kom&GO',
    description: 'Site vitrine komandgo',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#000',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo_blanc_bgremove.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo512plain.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}