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
}
