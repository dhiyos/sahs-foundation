import { Helmet } from "react-helmet-async";
import { site } from "../lib/site";

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  fullTitle?: boolean;
}

export function Seo({
  title,
  description,
  path,
  image,
  fullTitle = false,
}: SeoProps) {
  const finalTitle = fullTitle ? title : `${title} · ${site.name}`;
  const url = `${site.url}${path}`;
  const ogImageRel = image ?? site.defaultOgImage;
  const ogImage = ogImageRel.startsWith("http")
    ? ogImageRel
    : `${site.url}${ogImageRel}`;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
