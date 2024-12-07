import { Layout } from "../../layout";

const AboutPage = () => (
  <Layout>
    <div className="flex flex-col items-start justify-start px-6 md:px-16 my-12 mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-start text-gray-800 md:text-3xl">
        About us
      </h1>
      <p className="text-black text-sm leading-relaxed whitespace-normal text-left md:text-left">
        Welcome to the About Page. Here you can find more information about our
        application and its features.
      </p>
      <p className="text-black text-sm leading-relaxed whitespace-normal text-left md:text-left">
        Our application is designed to help users manage their tasks efficiently
        and effectively.
      </p>
      <p className="text-black text-sm leading-relaxed whitespace-normal text-left md:text-left">
        We are constantly working to improve the user experience and add new
        features. Stay tuned for updates!
      </p>
    </div>
  </Layout>
);

export default AboutPage;
