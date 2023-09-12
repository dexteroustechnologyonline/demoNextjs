import Head from "next/head";

const title = "About Page Title";
const description = "About Page description";
const url = "https://alikidi.com";
const image = "https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=1024x1024&w=is&k=20&c=-AdIwLn-nIYlgctc95CZuJHnkku_ia-f8A8m2LFwl2A=";
export function generateMetadata() {
  return {
    title: "About Page",
    description: "About Page description",
    openGraph: {
      title: title,
      description: description,
      url: url,
      image: "",
      siteName: "Alikidi.com",
      images: [
        {
          url: image,
          width: 800,
          height: 600,
        },
        {
          url: image,
          width: 1800,
          height: 1600,
          alt: "Legato Designs",
        },
      ],
      type: "website",

    },
    twitter: {
      card: "alikidi",
      title: title,
      description: description,
      creator: "Dexterous Texhnology",
      images: [image],
    },
    alternates: {
      canonical: "https://alikidi.com",
    },
    manifest: "https://nextjs.org/manifest.json",
  };
}

const About = () => {
  return (
    <>
      <main>Welcome to About Page configuration</main>
    </>
  );
};

export default About;
