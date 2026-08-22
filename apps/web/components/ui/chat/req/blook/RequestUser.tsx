import { Input } from "@/components/shadcn/ui/input/input";
import { Mic, Send } from "lucide-react";
import { useState } from "react";

function RequestUser({ SendMes }: { SendMes: (value: string) => void }) {
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center w-2/3 mx-auto bg-foreground rounded-full p-1 ">
      <Input
        className="border-none shadow-none focus-visible:ring-0 focus-visible:border-transparent text-white"
        placeholder="Ask anything"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            SendMes(value);
            setValue("");
          }
        }}
      />
      <div className="gap-1 flex items-center">
        <Mic className="text-white" />
        <Send
          className="bg-accent rounded-full p-1 h-full text-white"
          size={"30"}
          onClick={() => {
            SendMes(value);
            setValue("");
          }}
        />
      </div>
    </div>
  );
}

export default RequestUser;
