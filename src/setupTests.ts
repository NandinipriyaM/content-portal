import '@testing-library/jest-dom'
class TextEncoderPolyfill {
  encode(input: string) {
    return new Uint8Array([...input].map(c => c.charCodeAt(0)))
  }
}

class TextDecoderPolyfill {
  decode(input: Uint8Array) {
    return String.fromCharCode(...input)
  }
}

// Assign classes to globalThis
;(globalThis as any).TextEncoder = TextEncoderPolyfill
;(globalThis as any).TextDecoder = TextDecoderPolyfill
