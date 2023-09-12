const Login = () => {
  return <div>Login</div>;
};

export default Login;

export async function generateMetadata() {
  const meta = await getMetaApi("about");
  return {
    title: `${meta?.data?.page_name} | Legato Designs `,
    generator: "Legato Designs",
    applicationName: "Legato Designs",
    keywords: meta?.data?.meta_keywords?.split(","),
    authors: [
      { name: "Golden Infotech Ltd" },
      { name: "Golden Infotech Ltd", url: "https://goldeninfotech.com.bd/" },
    ],
    creator: "Golden Infotech Ltd",
    publisher: "Legato Designs",
    metadataBase: new URL("https://legatodesigns.com/"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: meta?.data?.og_title,
      description: meta?.data?.og_description,
      url: "https://legatodesigns.com/",
      siteName: "Legato Designs",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL_IMG_ALT}${meta?.data?.og_image}`,
          width: 800,
          height: 600,
        },
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL_IMG_ALT}${meta?.data?.meta_image}`,
          width: 1800,
          height: 1600,
          alt: "Legato Designs",
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.data?.og_title,
      description: meta?.data?.og_description,
      creator: "@goldeninfotech",
      images: [
        `${process.env.NEXT_PUBLIC_BASE_URL_IMG_ALT}${meta?.data?.og_image}`,
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/legato_fav.png",
      shortcut: "/legato_fav.png",
      apple: "/legato_fav.png",
      other: {
        rel: "/legato_fav",
        url: "/legato_fav.png",
      },
    },
    manifest: "https://nextjs.org/manifest.json",
  };
}
