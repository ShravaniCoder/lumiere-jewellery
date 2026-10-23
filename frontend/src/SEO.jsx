import { Helmet } from 'react-helmet-async'
const SITE = import.meta.env.VITE_SITE_URL || 'https://www.example.com'
export default function SEO({title='Jewellery, Elevated',description='Discover refined fashion jewellery at Lumière. Shop earrings, rings, bracelets and necklaces.',path='/',image='/og-image.jpg',type='website'}) {
 const fullTitle = title.includes('Lumière') ? title : `${title} | Lumière`
 const canonical = `${SITE}${path}`
 return <Helmet>
  <title>{fullTitle}</title><meta name="description" content={description}/>
  <link rel="canonical" href={canonical}/>
  <meta name="robots" content="index, follow, max-image-preview:large"/>
  <meta property="og:type" content={type}/><meta property="og:site_name" content="Lumière"/>
  <meta property="og:title" content={fullTitle}/><meta property="og:description" content={description}/>
  <meta property="og:url" content={canonical}/><meta property="og:image" content={`${SITE}${image}`}/>
  <meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content={fullTitle}/>
  <meta name="twitter:description" content={description}/><meta name="twitter:image" content={`${SITE}${image}`}/>
  <script type="application/ld+json">{JSON.stringify({
   '@context':'https://schema.org','@type':'Organization',name:'Lumière',url:SITE,
   description:'Contemporary women’s fashion jewellery',sameAs:[]
  })}</script>
 </Helmet>
}
