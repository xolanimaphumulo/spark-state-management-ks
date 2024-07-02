"use client";

import CounterDisplayer from "@/app/_components/CounterDisplayer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "double":
      return { count: state.count * 2 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
};
const UsingUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="flex h-1/2 w-1/2 flex-col items-center justify-center gap-y-10">
        <CardHeader>
          <CardTitle className="text-3xl">Counter App - useReducer</CardTitle>
        </CardHeader>
        <CardContent>
          <CounterDisplayer count={state.count} />
        </CardContent>
        <CardFooter className="w-full flex-row items-center justify-between">
          {[
            {
              label: "Increment",
              type: "increment",
            },
            {
              label: "Decrement",
              type: "decrement",
            },
            {
              label: "Double",
              type: "double",
            },
            {
              label: "Reset",
              type: "reset",
            },
          ].map((button) => (
            <Button
              key={button.label}
              onClick={() => dispatch({ type: button.type })}
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
export default UsingUseReducer;
