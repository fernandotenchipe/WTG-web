export async function sendToAppsScript(payload: Record<string, unknown>) {
  const url = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

  if (!url) {
    throw new Error("Falta NEXT_PUBLIC_APPS_SCRIPT_URL");
  }

  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  return true;
}