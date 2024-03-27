import { Racing_Sans_One, Roboto_Condensed } from "next/font/google";

export const racing = Racing_Sans_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font--primary",
});
export const robotC = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font--secondary",
});
