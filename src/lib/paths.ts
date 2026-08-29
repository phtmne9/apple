/**
 * Prefixes a root-relative path with the configured base path (import.meta.env.BASE_URL),
 * so links work both at the domain root (demo deploy) and under a subpath
 * (handoff deploy at ile-alatau.kz/siversapple/).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${cleanBase}${path}`;
}

export function pagePath(locale: string, slug = ''): string {
  return withBase(`/${locale}/${slug ? `${slug}/` : ''}`);
}
