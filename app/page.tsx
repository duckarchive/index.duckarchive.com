import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        <span className={title()}>Скоро тут буде</span>
        <span className={title({ color: "green" })}>&nbsp;щось&nbsp;</span>
        <br />
        <span className={title()}>грандіозне</span>
      </div>
    </section>
  );
}
