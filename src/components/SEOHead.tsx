import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
  ogType?: "website" | "article";
  ogImage?: string;
}

const SEOHead = ({
  title,
  description,
  canonical,
  schema,
  ogType = "website",
  ogImage,
}: SEOHeadProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={ogType} />
    {canonical && <meta property="og:url" content={canonical} />}
    {ogImage && <meta property="og:image" content={ogImage} />}
    {ogImage && <meta name="twitter:card" content="summary_large_image" />}
    {ogImage && <meta name="twitter:image" content={ogImage} />}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {schema && (
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    )}
  </Helmet>
);

export default SEOHead;
