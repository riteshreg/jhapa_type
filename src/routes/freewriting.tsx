import Carret from "@/components/carret";
import useFreeWritingHook from "@/hooks/useFreeWritinghook";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/freewriting")({
  component: () => <FreeWriting />,
});

const FreeWriting = () => {
  const { englishWords, nepaliWords } = useFreeWritingHook();

  return (
    <div className="md:px-10 mt-10 flex-col">
      <div className="text-3xl flex gap-x-2">
        {nepaliWords}
        <Carret />
      </div>

      <div className="mt-10">
        <textarea
          className="min-h-40 w-full border-green-200 border"
          value={englishWords}
        />
      </div>
    </div>
  );
};
