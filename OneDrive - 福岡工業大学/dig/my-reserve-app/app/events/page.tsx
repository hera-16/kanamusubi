// app/events/page.tsx
// ▼ import のポイント
// - default import（波括弧なし）: モジュールが「1つの主要な値」を輸出しているときに使う。
//   例) next/link のデフォルト輸出は <Link> コンポーネント → import Link from "next/link";
// - named import（波括弧あり）: そのモジュールが「名前付きで複数」輸出しているうちの1つを選ぶ。
//   例) lib/mock.ts で export const mockEvents ... と“名前付き”で出している → import { mockEvents } from "@/lib/mock";
// - "@/lib/mock" は tsconfig のパスエイリアス（4-5参照）。プロジェクトルートを指す。
import Link from "next/link";
import { mockEvents } from "../../lib/mock";

// ▼ export default function の意味
// - このファイルの「代表的な値（ここではReactコンポーネント）」を外に出す、という宣言。
// - Next.js は default export されたコンポーネントを “そのURLのページ” として扱う。
export default function EventsPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">イベント一覧</h1>
      {/* 配列を map で回して <li> を作る。key には一意な id を使う */}
      <ul className="space-y-2">
        {mockEvents.map((e) => (
          <li key={e.id}>
            {/* JSX 内で {} は “JavaScript式を埋め込む” という意味。e.id / e.title を表示している */}
            <Link href={`/events/${e.id}`} className="underline">
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
