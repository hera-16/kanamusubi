// lib/mock.ts
// 型定義：イベント1件分。後でSupabaseの型に置き換えても差分が少ないよう最小限にしています。
export type EventItem = {
  id: string;         // URL等で使う一意なID（本番ではUUIDなど）
  title: string;      // イベント名
  venue?: string;     // 会場（省略可）
  starts_on: string;  // 開催日（ISO文字列 "YYYY-MM-DD"）。※日付だけ扱う
};

// 動作確認用に1件だけ。後の章で件数を増やし、並び替え・フィルタを体験。
export const mockEvents: EventItem[] = [
  { id: "e1", title: "サンプルイベント", venue: "Online", starts_on: "2025-09-01" }
];
