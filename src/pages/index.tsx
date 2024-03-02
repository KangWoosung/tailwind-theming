/*  2024-03-02 22:58:46

아직 Next.js 를 공부하기 전이라, 컴포넌트 구조가 좀 엉성하고 러프하긴 하지만,
Tailwind.ThemChanger 전체 얼개는 이해할 수 있었다.

이건
"use client";
를 써야 에러가 안난다.
정확히는 아직 모르겠다. 얼릉 진도 나가서 Next.js 코스를 달려야 알 수 있게 될 듯.. 
일단 오류는 모두 잡았으니까, 이 프로젝트는 여기까지로 마감하자. 2024-03-02 23:17:41

*/
"use client";

import Card from "@/components/Card";
import CardOG from "@/components/CardOG";
import ThemeSelector from "@/components/ThemeSelector";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export type EachOption = {
  id: number;
  theme: string;
};

export const themeOptions = [
  { id: 1, theme: "light" },
  { id: 2, theme: "dark" },
  { id: 3, theme: "system" },
  { id: 4, theme: "purple" },
];

export default function Home() {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;
  const storedTheme = isLocalStorageAvailable
    ? localStorage.getItem("theme")
    : null;

  // const storedTheme = localStorage.getItem("theme");
  const [selectedTheme, setSelectedTheme] = useState<EachOption>(() => {
    return (
      themeOptions.find((option) => option.theme === storedTheme) ||
      themeOptions[0]
    );
  });

  useEffect(() => {
    themeOptions.map((option) => {
      document.body.classList.remove(option.theme);
    });

    document.body.classList.add(selectedTheme.theme);
  }, [selectedTheme]);

  const saveToStorage = (val: EachOption) => {
    localStorage.setItem("theme", val.theme);
  };

  return (
    <main
      className={`grid place-content-center min-h-screen p-24 ${poppins.className}`}
    >
      {/* <CardOG /> */}
      <ThemeSelector
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        saveToStorage={saveToStorage}
      />
      <Card />
    </main>
  );
}
