"use client";
import { useNotifier } from "@/app/contexts/NotifierContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";

const ShowContext = () => {
  const { toast } = useNotifier();
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="flex h-1/2 w-1/2 flex-col items-center justify-center gap-y-10">
        <CardHeader>
          <CardTitle className="text-3xl">Toast using Context</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => {
              toast({
                title: "Hi there!",
                description: "Toast Create through Context API",
                action: (
                  <ToastAction altText="Goto schedule to undo">
                    Undo
                  </ToastAction>
                ),
              });
              console.log("Toast Create through Context API");
            }}
          >
            Click Me
          </Button>
        </CardContent>
        <CardFooter className="w-full flex-row items-center justify-between"></CardFooter>
      </Card>
    </div>
  );
};

export default ShowContext;
