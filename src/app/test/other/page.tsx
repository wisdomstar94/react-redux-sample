"use client"

import { incrementByAmount } from "@/lib/features/counter";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";

export default function Page() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <h2>test/other</h2>
      </div>
      <div>
        count: { count }
      </div>
      <div className="flex flex-wrap gap-4">
        <button 
          className="inline-flex flex-wrap px-2 py-0.5 text-xs text-slate-500 cursor-pointer border border-slate-500 hover:bg-slate-100"
          onClick={() => {
            dispatch(incrementByAmount(101));
          }}
          >
          count 증가시키기
        </button>
      </div>
      <div>
        <Link href="/test/basic">
          /test/basic 페이지로 이동
        </Link>
      </div>
    </>
  );
}