import { redirect } from "next/navigation"

export default function Page() {
  // Situs "Kas Ganespic" adalah satu file HTML statis di /public
  redirect("/index.html")
}
