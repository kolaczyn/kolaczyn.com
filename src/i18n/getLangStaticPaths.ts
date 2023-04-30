import { languages } from "./languages";

export const getLangStaticPaths = () =>
  languages.map((x) => ({ params: { lang: x.code } }));
