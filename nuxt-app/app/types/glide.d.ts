declare module '@glidejs/glide' {
  interface GlideOptions {
    [key: string]: unknown
  }

  export default class Glide {
    constructor(selector: string | Element, options?: GlideOptions)
    mount(extensions?: Record<string, unknown>): this
  }
}
