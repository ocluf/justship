Hanji is a designless command line user interface builder for nodejs+typescript.
by [@_alexblokh](https://twitter.com/_alexblokh)

You can implement prompts by extending `Prompt` class   
Below is an example of how to implement `Select` with utility `SelectData` bundle provided from the library   
I will provide more view agnostic datasets to make implementing custom views like `input` a breath    
```typescript
import color from "kleur";
import { ITerminal, Prompt, render, SelectData } from "hanji";

export class Select extends Prompt<{ index: number; value: string }> {
  private readonly data: SelectState<{ label: string; value: string }>;
  private readonly spinner: () => string;
  private timeout: NodeJS.Timer | undefined;

  constructor(items: string[]) {
    super();
    this.on("attach", (terminal) => terminal.toggleCursor("hide"));
    this.on("detach", () => clearInterval(this.timeout));

    this.data = new SelectState(
      items.map((it) => ({ label: it, value: `${it}-value` }))
    );
    this.data.bind(this);
  }

  render(status: "idle" | "submitted" | "aborted"): string {
    if (status === "submitted" || status === "aborted") {
      return "";
    }

    let text = "";
    this.data.items.forEach((it, idx) => {
      text +=
        idx === this.data.selectedIdx
          ? `${color.green("❯ " + it.label)}`
          : `  ${it.label}`;
      text += idx != this.data.items.length - 1 ? "\n" : "";
    });

    return text;
  }

  result() {
    return {
      index: this.data.selectedIdx,
      value: this.data.items[this.data.selectedIdx]!.value!,
    };
  }
}

 const { status, data } = await render(
  new Select(["user1", "user2", "user3", "user4"])
);
if (status === "aborted") return;
console.log(data);
// { index: 0, value: 'users1' }
```
