export const sanitizeParams = (value: unknown) => {
  if (Array.isArray(value)) {
    value = value[0]
  }

  const raw = String(value ?? "").trim()
    .replace(/[-_]+/g, " ")
    .replace(/[^a-zA-Z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  return raw
}

export const hyphenateParam = (value: unknown) => {
  if (Array.isArray(value)) {
    value = value[0]
  }

  const raw = String(value ?? "").trim()
    .replace(/[-_]+/g, " ")
    .replace(/[^a-zA-Z0-9 ]+/g, " ")
    .replace(/\s+/g, "-")
    .trim()

  return raw
}