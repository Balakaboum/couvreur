import { mkdir, copyFile } from "node:fs/promises";

const routes = ["confidentialite", "mentions-legales"];

for (const route of routes) {
  const directory = `dist/${route}`;

  await mkdir(directory, { recursive: true });
  await copyFile("dist/index.html", `${directory}/index.html`);

  console.log(`Page générée : /${route}/`);
}
