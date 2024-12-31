import {useTranslations} from "next-intl";
import {Skeleton} from "@/components/ui/skeleton";
import MainBox from "@/app/[locale]/_components/main-box";
import Header from "@/app/[locale]/_components/header";
import TopMenu from "@/app/[locale]/_components/top-menu";

export default  function Page() {
  const t = useTranslations("main");
  return (
      <main className="h-screen sm:p-16 font-[family-name:var(--font-geist-sans)]">
        <div className="p-2 w-full h-full flex flex-col gap-2 items-center sm:items-start">
            <Header />
            <section className={"w-full h-full flex items-center justify-center flex-col gap-2"}>
              <TopMenu />
              <MainBox className={"w-full h-full"}/>
            </section>
        </div>
      </main>
  );
}
