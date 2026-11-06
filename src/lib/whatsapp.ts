const WHATSAPP_BASE_URL = "https://wa.me/";

/** Returns digits-only E.164-compatible input, or null when not configured. */
export function normalizeWhatsAppNumber(
  phoneNumber: string | null | undefined,
): string | null {
  if (!phoneNumber || phoneNumber.includes("PLACEHOLDER")) {
    return null;
  }

  const normalized = phoneNumber.replace(/\D/g, "");

  return normalized.length >= 7 && normalized.length <= 15 ? normalized : null;
}

export function buildWhatsAppLink(
  phoneNumber: string | null | undefined,
  message: string,
): string | null {
  const normalizedNumber = normalizeWhatsAppNumber(phoneNumber);

  if (!normalizedNumber || !message.trim()) {
    return null;
  }

  return `${WHATSAPP_BASE_URL}${normalizedNumber}?text=${encodeURIComponent(message.trim())}`;
}
