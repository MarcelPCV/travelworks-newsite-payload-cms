/**
 * Strips attributes injected by browser extensions (e.g. ColorZilla's
 * cz-shortcut-listen) before React hydrates, avoiding hydration mismatches.
 */
const EXTENSION_BODY_ATTRS = ['cz-shortcut-listen'] as const

function stripExtensionAttributes(): void {
  for (const attr of EXTENSION_BODY_ATTRS) {
    document.body?.removeAttribute(attr)
    document.documentElement.removeAttribute(attr)
  }
}

stripExtensionAttributes()

if (typeof MutationObserver !== 'undefined' && document.body) {
  const observer = new MutationObserver(stripExtensionAttributes)
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: [...EXTENSION_BODY_ATTRS],
  })
}
