"use client";

const CounterDisplayer = ({ count }: { count: number }) => {
  return <h3 className="text-2xl">Count: {count}</h3>;
};

export default CounterDisplayer;
