type Nav = "nav.github" | "nav.code-review" | "nav.projects";
type Footer = "footer.copy" | "footer.why-copy";
type Home = HomeFunFacts | HomeHeader | HomeSkillset;

type HomeHeader = "home.h1-big" | "home.h1-small";

type HomeFunFacts =
  | "home.fun-facts.1"
  | "home.fun-facts.2.outside-link"
  | "home.fun-facts.2.inside-link"
  | "home.fun-facts.3"
  | "home.fun-facts.4"
  | "home.fun-facts.5.outside-brackets"
  | "home.fun-facts.5.inside-brackest";

type HomeSkillset = "home.skillset.title" | "home.skillset.6";

type Projects = `projects.${"title" | "header"}`;

export type Section = Nav | Footer | Home | Projects;
