import { z } from "zod";
import appConfigJson from "./config.app.json";

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
