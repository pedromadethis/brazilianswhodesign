export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Who Makes Esports" />
      <meta
        name="description"
        content="Who Makes Esports is a place to showcase the work of Esports Professionals to the world."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://whomakesesports.com/" />
      <meta property="og:title" content="Who Makes Esports" />
      <meta
        property="og:description"
        content="Who Makes Esports is a place to showcase the work of Esports Professionals to the world."
      />
      <meta
        property="og:image"
        content="http://whomakesesports.com/img/preview.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://whomakesesports.com/" />
      <meta property="twitter:title" content="Who Makes Esports" />
      <meta
        property="twitter:description"
        content="Who Makes Esports is a place to showcase the work of Esports Professionals to the world."
      />
      <meta
        property="twitter:image"
        content="http://whomakesesports.com/img/preview.png"
      />
    </>
  );
}
