This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Video Optimization

This project uses MP4 and WebM video formats for optimal browser compatibility. To convert your videos:

1. Place your MP4/MOV files in the `/public/video` directory
2. Run the video conversion script:

```bash
# Basic usage - standard quality
./convert-videos.sh

# For higher quality (larger files)
./convert-videos.sh 20 

# For smaller files (lower quality, scaled down to 50%)
./convert-videos.sh 40 0.5
```

The script will:
- Convert videos to WebM format with VP9 codec (better compression)
- Create optimized versions named `original-filename-compressed.webm`
- Automatically scale down 4K videos to more web-friendly sizes
- Handle memory limitations for large files

### Video Player Implementation

Always implement the video player with both WebM and MP4 sources for maximum compatibility:

```jsx
<video controls>
  <source src="/video/filename-compressed.webm" type="video/webm" />
  <source src="/video/filename.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
