import { Message } from "@/assets/@types/Message";
import { P } from "@/components/custom/ui/typography/Typography";
import { Button } from "@/components/shadcn/ui/button/button";
import { Copy, RotateCcw, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react";

function ResponseUser({
  messages,
  loading,
}: {
  messages: Message[];
  loading: boolean;
}) {
  if (messages.length === 0) {
    return (
      <div className="flex h-full items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            How can I help you today?
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Ask questions, generate code, write content, translate text,
            brainstorm ideas, or solve problems.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Build a React dashboard",
              "Explain Docker simply",
              "Write a professional email",
              "Create a workout plan",
            ].map((item) => (
              <Button key={item} size={"sm"}>
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto flex w-4xl flex-col gap-6 py-6 ">
      {messages.map((message, index) =>
        message.role === "user" ? (
          <div key={index} className="flex justify-end">
            <div className="w-fit  rounded-2xl bg-primary px-4 py-3 text-primary-foreground">
              {message.content}
            </div>
          </div>
        ) : (
          <div key={index} className="space-y-3">
            <P>{message.content}</P>

            <div className="flex items-center ">
              <Button variant="ghost" size="icon-sm">
                <Copy className="size-4" />
              </Button>

              <Button variant="ghost" size="icon-sm">
                <ThumbsUp className="size-4" />
              </Button>

              <Button variant="ghost" size="icon-sm">
                <ThumbsDown className="size-4" />
              </Button>

              <Button variant="ghost" size="icon-sm">
                <RotateCcw className="size-4" />
              </Button>
            </div>
          </div>
        ),
      )}

      {loading && (
        <P className="animate-pulse text-muted-foreground">AI is thinking...</P>
      )}
    </div>
  );
}

export default ResponseUser;
