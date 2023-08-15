type Nav = "nav.github" | "nav.code-review" | "nav.projects";
type Footer =
  | "footer.copy"
  | "footer.why-copy"
  | "footer.light-mode"
  | "footer.dark-mode";

type Home = `home.${HomeHeader | HomeFunFacts | HomeSkillset}`;

type HomeHeader = "h1-big" | "h1-small";

type HomeFunFacts = `fun-facts.${
  | "1"
  | "2.outside-link"
  | "2.inside-link"
  | "3"
  | "4"
  | "5.outside-brackets"
  | "5.inside-brackets"}`;

type HomeSkillset = "skillset.title" | "skillset.6";

type Projects = `projects.${
  | "title"
  | "h1"
  | "h2.websites"
  | `websites.${1}.${"title" | "description"}`
  | "h2.applications"
  | "list.typescript-template.description"
  | "list.rough-edit.description"
  | "list.promotion-checker.description"
  | "list.fpts.description"
  | "list.todo-rs.description"}`;

type Meta = "meta.testing";

export type Section = Nav | Footer | Home | Projects | Meta;
