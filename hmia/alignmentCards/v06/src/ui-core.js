// Tiny DOM + string helpers shared by all renderers and app

export const norm = v => (v ?? '').toString().trim();
export const isNonEmpty = v => norm(v).length > 0;
export const isHttpUrl = s => /^https?:\/\//i.test(norm(s));
export const toArray = v => Array.isArray(v) ? v : (v == null ? [] : [v]);

export function block(label, content) {
  const wrap = document.createElement('div');
  wrap.className = 'kv';
  const l = document.createElement('span');
  l.className = 'label'; l.textContent = label;
  const v = document.createElement('div');
  v.className = 'value';
  if (content instanceof Node) v.appendChild(content);
  else v.textContent = (content ?? '').toString();
  wrap.append(l, v);
  return wrap;
}

export function addWithRef(parent, label, obj, key, { refSuffix = 'ref', placeholder } = {}) {
  const s = norm(obj?.[key]);
  const has = isNonEmpty(s);
  if (!has && placeholder == null) return false;

  const node = block(label, has ? s : String(placeholder ?? ''));
  const r = norm(obj?.[key + refSuffix]);
  if (isHttpUrl(r) && has) {
    const valueEl = node.querySelector('.value');
    valueEl.append(' (');
    const a = document.createElement('a');
    a.href = r; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'ref';
    valueEl.appendChild(a);
    valueEl.append(')');
  }
  parent.appendChild(node);
  return true;
}

export function renderQuadSection(parent, {
  title, obj, fields, labelSuffix = '', refSuffix = 'ref',
  onlyWhenAny = true, placeholder
}) {
  if (!obj || typeof obj !== 'object') return false;
  const hasAny = fields.some(f => isNonEmpty(obj?.[f.key]));
  if (onlyWhenAny && !hasAny) return false;
  const h5 = document.createElement('h5');
  h5.textContent = title;
  parent.appendChild(h5);
  fields.forEach(f => addWithRef(parent, `${f.label}${labelSuffix}`, obj, f.key, { refSuffix, placeholder }));
  return true;
}

export function prettifyKey(k) {
  return k.replace(/([A-Z])/g, ' $1')
          .replace(/_/g, ' ')
          .replace(/\s+/g, ' ')
          .replace(/\bref\b/i, 'ref')
          .replace(/^\w/, c => c.toUpperCase());
}

export function showFatal(message, { details = '', debug = false, triedUrl = '' } = {}) {
  const host = document.getElementById('card-grid-container') || document.body;
  host.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.style.cssText = `border:1px solid #e0b4b4;background:#fff6f6;color:#912d2b;
    padding:16px;border-radius:10px;max-width:900px;margin:24px auto;`;
  const h = document.createElement('div');
  h.style.cssText = 'font-weight:700;margin-bottom:8px;';
  h.textContent = 'Unable to load this deck';
  const p = document.createElement('div'); p.textContent = message;
  wrap.append(h, p);
  if (triedUrl) {
    const small = document.createElement('div');
    small.style.cssText = 'margin-top:6px;color:#555;font-size:12px;word-break:break-all;';
    small.textContent = `Tried: ${triedUrl}`;
    wrap.appendChild(small);
  }
  if (debug && details) {
    const pre = document.createElement('pre');
    pre.style.cssText = 'white-space:pre-wrap;background:#fff;border:1px dashed #f0c9c9;padding:10px;border-radius:8px;margin-top:10px;';
    pre.textContent = details;
    wrap.appendChild(pre);
  }
  host.appendChild(wrap);
}
