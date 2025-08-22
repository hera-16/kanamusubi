// app/events/[eventId]/page.tsx
// - フォルダ名 [eventId] の「角括弧」は“動的セグメント”の約束（URLの変数）。
// - Next.js は URL の /events/◯◯ の ◯◯ を params.eventId に入れてくれる。
import Link from "next/link";
import { mockEvents } from "../../../lib/mock";

// ▼ 引数の型注釈：{ params }: { params: { eventId: string } }
// - 左の { params } は “分割代入”（オブジェクトから必要なキーだけ取り出す）。
// - 右の { params: { eventId: string } } は TypeScript の型。
export default function EventDetail({ params }: { params: { eventId: string } }) {
  const event = mockEvents.find((e) => e.id === params.eventId);
  if (!event) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <p>イベントが見つかりませんでした。</p>
        <Link href="/events" className="underline">一覧へ</Link>
      </main>
    );
  }
  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/events" className="underline text-sm">&larr; 一覧へ</Link>
      <h1 className="text-2xl font-bold mt-2">{event.title}</h1>
      <p className="opacity-70">{event.venue ?? "-"}</p>
      {/* 後半で予約枠を /events/[eventId]/slots に実装予定 */}
    </main>
  );
}
