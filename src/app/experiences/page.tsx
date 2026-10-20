import fs from "fs";
import path from "path";
import Link from "next/link";
export default async function Page() {{
  const folder = path.join(
    process.cwd(),
    "src/app/experiences"
  );

  const files = fs
    .readdirSync(folder)
    .filter(
      (file) =>
        file.startsWith("experience") &&
        file.endsWith(".tsx") &&
        file !== "page.tsx"
    );

  const experiences = await Promise.all(
    files.map(async (file) => {
      const module = await import(`./${file}`);

      return module.default;
    })
  );

  return (
      
    <main>
      <div className="w-full min-h-screen bg-transparent text-[var(--foreground)] px-4 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Mes expériences</h1>
          </header>
          {experiences.toReversed().map((Experience, index) => (
            <Experience key={files[index]} />
          ))}
        </div>
      </div>
    </main>
  );
}
}