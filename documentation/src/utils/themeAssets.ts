export type DKFDSTheme = 'default' | 'virkdk' | 'borgerdk'

const themeLoaders: Record<DKFDSTheme, () => Promise<string>> = {
  default: async () => (await import('../../../node_modules/dkfds/dist/css/dkfds.css?url')).default,
  virkdk: async () =>
    (await import('../../../node_modules/dkfds/dist/css/dkfds-virkdk.css?url')).default,
  borgerdk: async () =>
    (await import('../../../node_modules/dkfds/dist/css/dkfds-borgerdk.css?url')).default,
}

const themeUrlCache: Partial<Record<DKFDSTheme, string>> = {}

export async function resolveThemeUrl(theme: DKFDSTheme): Promise<string> {
  if (!themeUrlCache[theme]) {
    themeUrlCache[theme] = await themeLoaders[theme]()
  }

  return themeUrlCache[theme] as string
}
