"use client";
import CounterDisplayer from "@/app/_components/CounterDisplayer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
const UsingUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="flex h-1/2 w-1/2 flex-col items-center justify-center gap-y-10">
        <CardHeader>
          <CardTitle className="text-3xl">Counter App - Use State</CardTitle>
        </CardHeader>
        <CardContent>
          <CounterDisplayer count={count} />
        </CardContent>
        <CardFooter className="w-full flex-row items-center justify-between">
          {[
            {
              label: "Increment",
              onClick: () => setCount(count + 1),
            },
            {
              label: "Decrement",
              onClick: () => setCount(count - 1),
            },
            {
              label: "Double",
              onClick: () => {},
            },
            {
              label: "Reset",
              onClick: () => setCount(0),
            },
          ].map((button) => (
            <Button
              key={button.label}
              onClick={button.onClick}
              size={"lg"}
              variant={"outline"}
            >
              {button.label}
            </Button>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};
export default UsingUseState;
