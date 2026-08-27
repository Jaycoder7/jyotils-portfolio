# Adding photographs

The photography archive is intentionally local and data-driven. This is the simplest, fastest setup for a portfolio-sized collection and keeps the original files in your Git repository.

1. Export a web-ready copy of the photograph as `.webp` or `.avif`.
2. Use an sRGB color profile and remove private GPS metadata before publishing.
3. For this high-resolution archive, aim for 3000-4000 px on the longest edge and roughly 1-3 MB per image. Do not upscale smaller originals.
4. Save it in `public/photography/` using a lowercase descriptive filename, for example `athens-after-rain.webp`.
5. Add an entry to `app/photography/photos.ts` with the file path, title, location, year, pixel dimensions, and useful alt text.

Example:

```ts
{
  src: '/photography/athens-after-rain.webp',
  title: 'After the Rain',
  location: 'Athens, Georgia',
  year: '2026',
  width: 1600,
  height: 2000,
  alt: 'A quiet Athens street reflecting evening light after rainfall',
}
```

The order in the array controls the constellation placement. Portrait and landscape dimensions automatically preserve each photograph's natural shape.

Constellation thumbnails use Next.js image delivery at quality 95. The expanded lightbox deliberately bypasses further optimization and serves the high-resolution archive file directly, preventing an extra compression pass when visitors inspect a photograph.

If the archive grows beyond roughly 100 photographs or you want to update it without code, migrate the same fields to a media service such as Cloudinary and a CMS such as Sanity. The page structure can stay the same.
