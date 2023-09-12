import Head from "next/head";

export function generateMetadata() {
  return {
    title: "About Page",
    description: "About Page description",
    openGraph: {
      title: "This is for sharing",
      description: "Sharing description",
      url: "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons",
      image: "",     
    },
    alternates: {
      canonical: "https://alikidi.com",
    },
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
