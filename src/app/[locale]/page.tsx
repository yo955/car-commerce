import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <h1 className="text-4xl">{t("title")}</h1>
      <p className="text-4xl">{t("description")}</p>
    </div>
  );
}
