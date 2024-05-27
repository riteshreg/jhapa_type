import TypingArea from "@/components/TypingArea";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});


function Index() {
  return (
    <div className="p-2">
      <TypingArea />
    </div>
  );
}
