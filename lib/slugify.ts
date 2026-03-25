const CYRILLIC_TO_LATIN_MAP: Record<string, string> = {
  А: "a",
  а: "a",
  Б: "b",
  б: "b",
  В: "v",
  в: "v",
  Г: "g",
  г: "g",
  Д: "d",
  д: "d",
  Ђ: "dj",
  ђ: "dj",
  Е: "e",
  е: "e",
  Ж: "z",
  ж: "z",
  З: "z",
  з: "z",
  И: "i",
  и: "i",
  Ј: "j",
  ј: "j",
  К: "k",
  к: "k",
  Л: "l",
  л: "l",
  Љ: "lj",
  љ: "lj",
  М: "m",
  м: "m",
  Н: "n",
  н: "n",
  Њ: "nj",
  њ: "nj",
  О: "o",
  о: "o",
  П: "p",
  п: "p",
  Р: "r",
  р: "r",
  С: "s",
  с: "s",
  Т: "t",
  т: "t",
  Ћ: "c",
  ћ: "c",
  У: "u",
  у: "u",
  Ф: "f",
  ф: "f",
  Х: "h",
  х: "h",
  Ц: "c",
  ц: "c",
  Ч: "c",
  ч: "c",
  Џ: "dz",
  џ: "dz",
  Ш: "s",
  ш: "s",
};

function transliterateCyrillic(input: string) {
  return Array.from(input)
    .map((char) => CYRILLIC_TO_LATIN_MAP[char] ?? char)
    .join("");
}

export function slugifyBlogValue(input: string) {
  const transliterated = transliterateCyrillic(input || "");
  const ascii = transliterated
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "dj")
    .replace(/Đ/g, "dj");

  return ascii
    .toLowerCase()
    .trim()
    .replace(/['"`]+/g, "")
    .replace(/&/g, " i ")
    .replace(/[\s_/.,:;!?()[\]{}+=*<>|\\]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ensureUniqueSlug(baseSlug: string, existingSlugs: Iterable<string>) {
  const normalizedBase = slugifyBlogValue(baseSlug);
  if (!normalizedBase) return "";

  const used = new Set(
    Array.from(existingSlugs)
      .map((item) => slugifyBlogValue(item))
      .filter(Boolean)
  );

  if (!used.has(normalizedBase)) {
    return normalizedBase;
  }

  let counter = 2;
  let candidate = `${normalizedBase}-${counter}`;

  while (used.has(candidate)) {
    counter += 1;
    candidate = `${normalizedBase}-${counter}`;
  }

  return candidate;
}
