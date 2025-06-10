async function loadConfig() {
  const theme = await import("./theme.mjs");

  if (new Date().getHours() < 18) {
    theme.setLightTheme();
  } else {
    theme.setDarkTheme();
  }
}

loadConfig();
