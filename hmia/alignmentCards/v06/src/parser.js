// Turn raw text into a value (ESM namespace or JSON object)

export async function parseDeck({ text, sourceUrl }) {
  // if loader gave a module already, skip this; caller can bypass
  if (typeof text !== 'string') {
    return { status: 'parse-error', reason: 'no-text' };
  }

  // try ESM first
  try {
    const blobURL = URL.createObjectURL(new Blob([text], { type: 'application/javascript' }));
    try {
      const mod = await import(blobURL);
      return { status: 'ok', value: mod };
    } finally {
      URL.revokeObjectURL(blobURL);
    }
  } catch (esmErr) {
    // maybe it's JSON
    const looksJsonish = /^\s*[\[{]/.test(text);
    if (looksJsonish) {
      try {
        const obj = JSON.parse(text);
        return { status: 'ok', value: obj };
      } catch (jsonErr) {
        return { status: 'parse-error', reason: 'invalid-json', error: jsonErr, sourceUrl };
      }
    }
    return { status: 'parse-error', reason: 'invalid-esm', error: esmErr, sourceUrl };
  }
}
