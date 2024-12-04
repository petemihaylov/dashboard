import { z } from "zod";

const appConfigJson = {
  app: {
    name: "Diving Center Arapya",
    icon: {
      light: "app/light-icon.svg",
      dark: "app/dark-icon.svg",
    },
  },
};

const config = z
  .object({
    app: z.object({
      name: z.string(),
      icon: z.object({
        light: z.string(),
        dark: z.string(),
      }),
    }),
  })
  .parse(appConfigJson);

export default config;
