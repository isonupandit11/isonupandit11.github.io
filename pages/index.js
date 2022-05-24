import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "isonupandit11",
          description:
            "A passionate Full Stack Web Developer and Blockchain Developer.",
          image:
            "https://lh3.googleusercontent.com/QqkJ8xWn8s68kV6LUTvlkjNgtR96p-6bHiHYN51v0VhsmEfqtYzGmMXtxaxBW_KvC0uQYiQ_i7a0cT2qG9XNH0cuirEHe9Ctb8uuu3UDoMkEQLjpiN7GE8bwK9nHUHmS-fB8NE8PrMI=w2400",
          url: "https://isonupandit11.github.io/",
          keywords: [
            "isonupandit11",
            "Sonu Sharma",
            "@isonupandit11",
            "isonupandit11",
            "isonupandit11 followers",
            "isonupandit11 instagram",
            "isonupandit11 facebook",
            "isonupandit11 developer",
            "Portfolio",
            "isonupandit11 Portfolio ",
            "Sonu Sharma Portfolio",
          ],
        }}
      />{" "}
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <GithubProfileCard prof={githubProfileData} />{" "}
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
