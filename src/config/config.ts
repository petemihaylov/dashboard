import { z } from "zod";

const appConfigJson = {
  app: {
    name: "Diving Center Arapya",
    icon: {
      light: "./svgs/app-icon-light.svg",
      dark: "./svgs/app-icon-dark.svg",
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
