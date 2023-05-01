type Nav = "nav.github" | "nav.code-review" | "nav.projects";
type Footer = "footer.copy" | "footer.why-copy";

type Home = `home.${HomeHeader | HomeFunFacts | HomeSkillset}`;

type HomeHeader = "h1-big" | "h1-small";

type HomeFunFacts = `fun-facts.${
  | "1"
  | "2.outside-link"
  | "2.inside-link"
  | "3"
  | "4"
  | "5.outside-brackets"
  | "5.inside-brackest"}`;

type HomeSkillset = "skillset.title" | "skillset.6";

type Projects = `projects.${"title" | "header"}`;

type Meta = "meta.testing" | "meta.testing-fallback";

export type Section = Nav | Footer | Home | Projects | Meta;
