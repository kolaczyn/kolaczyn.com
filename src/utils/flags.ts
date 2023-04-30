const TRUE = "true";

export const isBlogEnabled =
  import.meta.env.PUBLIC_FEATURE_TOGGLE_BLOG === TRUE;
