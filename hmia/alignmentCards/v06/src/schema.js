// Shared config, aliases, and small type docs

export const VERSION = '0.6';

// Canonical quad roles
export const CANON_ROLES = ['human', 'organizational', 'professional', 'machine'];
export const CANON_QUAD = new Set(CANON_ROLES);

// Default labels used by renderers
export const DEFAULT_FIELDS = [
  { key: 'human',          label: 'Humans' },
  { key: 'organizational', label: 'Organizations' },
  { key: 'professional',   label: 'Experts' },
  { key: 'machine',        label: 'Machine' },
];

// Top-level field alias map (deck-level)
export const CARD_FIELD_MAP = {
  title: 'name',
  label: 'name',
  desc: 'definition',
  definition: 'definition',
  category: 'category',
  categories: 'category',
  expand: 'expand',
  expanded: 'expand',
  failures: 'failureModes',
  failureModes: 'failureModes',

  // occasional top-level role aliases
  expert: 'professional',
  experts: 'professional',
  pro: 'professional',
  prof: 'professional',
  professionals: 'professional',
};

// Role aliases (works for nested blocks and top-level)
export const ROLE_KEY_MAP = {
  // human
  human: 'human', person: 'human', people: 'human', persons: 'human', humans: 'human',
  // organizational
  organizational: 'organizational', organization: 'organizational',
  organisations: 'organizational', org: 'organizational', orgs: 'organizational',
  // professional
  professional: 'professional', expert: 'professional', experts: 'professional',
  pro: 'professional', pros: 'professional', prof: 'professional', professionals: 'professional',
  // machine
  machine: 'machine', ai: 'machine', model: 'machine', system: 'machine',
};

export const REF_SUFFIX = 'ref';

// Keys that renderers consider “known” (to keep out of “Other fields”)
export const KNOWN_TOP_KEYS = new Set([
  'name','category','__cats','definition',
  'human','organizational','professional','machine',
  'expand','failureModes','researchQuestions','__raw',
  // common refs
  'humanref','organizationalref','professionalref','machineref'
]);
