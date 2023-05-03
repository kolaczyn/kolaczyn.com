const TRUE = "true";

export const isBlogEnabled =
  import.meta.env.PUBLIC_FEATURE_TOGGLE_BLOG === TRUE;

export const isDarkModeEnabled =
  import.meta.env.PUBLIC_FEATURE_TOGGLE_DARK_MODE === TRUE;
