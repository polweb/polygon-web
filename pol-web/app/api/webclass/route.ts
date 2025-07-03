import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url =
    "https://tpuwcwebsv.pu-toyama.ac.jp/webclass/informations.php/api/listForGuest?_=1751525518089";

  const response = await fetch(url, {
    headers: {
      accept: "application/json, text/javascript, */*; q=0.01",
      "accept-language": "ja,en;q=0.9,en-GB;q=0.8,en-US;q=0.7,ko;q=0.6",
      "x-requested-with": "XMLHttpRequest",
      // 必要に応じて他のヘッダーも追加
    },
    // referrerやcredentialsはNode.jsサーバーサイドfetchでは基本不要
    method: "GET",
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
