import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="sr-only">MOOD MNKY Agent Builder</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Meet the{" "}
        <a
          href="/your-internal-link"  // Replace with your actual link if needed
          className="font-bold hover:underline"
        >
          MNKY COLLECTIVE
        </a>{" "}
        choose your {" "}
        <a
          href="/your-other-link"  // Replace with your actual link if needed
          className="font-bold hover:underline"
        >
          AGENT
        </a>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
