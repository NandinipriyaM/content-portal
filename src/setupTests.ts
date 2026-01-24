// // // import '@testing-library/jest-dom'

// // // // Polyfill TextEncoder/TextDecoder for Jest
// // // // Use dynamic import from util
// // // import { TextEncoder as TE, TextDecoder as TD } from 'node:util'

// // // // @ts-ignore: Tell TS to ignore global type issues
// // // ;(globalThis as any).TextEncoder = TE
// // // ;(globalThis as any).TextDecoder = TD
// // import '@testing-library/jest-dom'

// // // Polyfill TextEncoder/TextDecoder for Jest
// // class TextEncoderPolyfill {
// //   encode(str: string) {
// //     return new Uint8Array([...str].map(c => c.charCodeAt(0)))
// //   }
// // }

// // class TextDecoderPolyfill {
// //   decode(bytes: Uint8Array) {
// //     return String.fromCharCode(...bytes)
// //   }
// // }

// // // Assign to globalThis
// // (globalThis as any).TextEncoder = TextEncoderPolyfill
// // (globalThis as any).TextDecoder = TextDecoderPolyfill
// import '@testing-library/jest-dom'

// // Polyfill TextEncoder/TextDecoder for Jest
// class TextEncoderPolyfill {
//   encode(str: string) {
//     return new Uint8Array([...str].map(c => c.charCodeAt(0)))
//   }
// }

// class TextDecoderPolyfill {
//   decode(bytes: Uint8Array) {
//     return String.fromCharCode(...bytes)
//   }
// }

// // Assign **instances** to globalThis
// ;(globalThis as any).TextEncoder = new TextEncoderPolyfill()
// ;(globalThis as any).TextDecoder = new TextDecoderPolyfill()
import '@testing-library/jest-dom'

// Polyfill TextEncoder/TextDecoder for Jest
// These must be **classes**, not instances
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
