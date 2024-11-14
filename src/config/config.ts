import { z } from "zod";

const appConfigJson = {
  app: {
    name: "Diving Center Arapya",
    icon: {
      light: "assets/svgs/app-icon-light.svg",
      dark: "assets/svgs/app-icon-dark.svg",
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
