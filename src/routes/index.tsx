import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura Weather" },
      { name: "description", content: "weather app" },
      { property: "og:title", content: "aura" },
      { property: "og:description", content: "Aura Weather" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/index.html"
      title="Aura Weather"
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", border: 0 }}
    />
  );
}
