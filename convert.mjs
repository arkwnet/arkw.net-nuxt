import { readFile, writeFile } from "node:fs/promises"
import imagemin from "imagemin"
import imageminWebp from "imagemin-webp"
const dir = ["header", "works"]
main()

async function main() {
  for (let i = 0; i < dir.length; i++) {
    await imagemin(["./static/img/" + dir[i] + "/*.{jpg,png}"], {
      destination: "./static/img/" + dir[i] + "/",
      plugins: [imageminWebp({ quality: 100 })],
    })
  }
  const data = JSON.parse(await readFile("./static/history.json", "utf-8"))
  const latest = data.slice(0, 5)
  await writeFile(
    "./static/latest.json",
    JSON.stringify(latest, null, 2),
    "utf-8",
  )
}
