# Video Handling in GrowMat Academy

## Video Files

This project includes video files that are too large for Git. We use two approaches to handle them:

1. **For development**: Video files are stored locally and excluded from Git using `.gitignore`
2. **For production**: Video files should be hosted on a CDN or directly on the server

## Video Formats

For best compatibility across browsers, we use both MP4 and WebM formats:

```tsx
<video>
  <source src="/video/filename.webm" type="video/webm" />
  <source src="/video/filename.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Converting Videos

To convert MP4 to WebM format for better web compatibility:

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus output.webm
```

## Compressing Videos

To compress large videos:

```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 -crf 28 -preset medium output.mp4
```

## Video Hosting Options

1. **Vercel Hosting**: Videos under 50MB can be stored in the `/public` directory
2. **CDN**: For larger files, use a CDN service like Cloudflare, BunnyCDN, or jsDelivr
3. **YouTube/Vimeo**: Embed videos from these platforms for the best performance

## Current Videos

The project uses these main videos:

- `/public/video/hero-compressed.mp4` and `.webm` - Hero section video
- `/public/video/obsah-compressed.mp4` and `.webm` - System intro video
