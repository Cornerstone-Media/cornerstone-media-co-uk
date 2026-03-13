import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
  breadcrumbName?: string;
}

const SEOHead = ({ title, description, canonical, schema, breadcrumbName }: SEOHeadProps) => {
  // Auto-generate BreadcrumbList for non-homepage pages
  const isInnerPage = canonical && canonical !== "https://cornerstone-media.co.uk/";
  const pageName = breadcrumbName || title.split("|")[0]?.trim() || title;

  const breadcrumbSchema = isInnerPage
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://cornerstone-media.co.uk/" },
          { "@type": "ListItem", position: 2, name: pageName, item: canonical },
        ],
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
