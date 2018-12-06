export function invertColor(hex: string, bw: boolean): string {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  let r = parseInt(hex.slice(0, 2), 16)
  let g = parseInt(hex.slice(2, 4), 16)
  let b = parseInt(hex.slice(4, 6), 16)

  if (bw) {
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#ffffff'
  }

  let newr = (255 - r).toString(16)
  let newg = (255 - g).toString(16)
  let newb = (255 - b).toString(16)

  return `${padZero(newr)}${padZero(newg)}${padZero(newb)}`
}

export function padZero(str: string, len?: number) {
  len = len || 2

  let zeros = new Array(len).join('0')
  return (zeros + str).slice(-len)
}

export function randomHexColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
