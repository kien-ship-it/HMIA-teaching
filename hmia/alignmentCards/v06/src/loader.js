// Fetch raw deck text from GitHub raw (or import local default.js)

export async function loadText({ user, file }) {
  if (!user) {
    try {
      const module = await import('../data/default.js');
      return { status: 'ok-local', module };
    } catch (e) {
      return { status: 'parse-error', reason: 'local-default-failed', error: e };
    }
  }

  const url = `https://raw.githubusercontent.com/${user}/alignment-cards/refs/heads/main/${file}.js`;
  try {
    const resp = await fetch(url, { cache: 'no-store' });
    if (!resp.ok) {
      return { status: 'not-found', httpStatus: resp.status, httpStatusText: resp.statusText, sourceUrl: url };
    }
    const text = await resp.text();
    return { status: 'ok-remote', text, sourceUrl: url };
  } catch (e) {
    return { status: 'network-error', error: e, sourceUrl: url };
  }
}
