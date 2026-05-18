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

export function fileToBase64Payload(file: File): Promise<{
  fileName: string;
  mimeType: string;
  base64: string;
}> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = String(reader.result);
      const base64 = result.split(",")[1];

      resolve({
        fileName: file.name,
        mimeType: file.type,
        base64,
      });
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}