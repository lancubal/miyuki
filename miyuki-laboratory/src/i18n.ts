// TODO replace with something real
export const t = (key: string, params?: Record<string, string | number | undefined>) => {
  const dict: Record<string, string> = {
    chapterTitle: "Capítulo {number}: {title}",
    lessons: "Lecciones",
    appendix: "Apéndice",
    appendixCta: "¿Querés saber más?",
    appendixLink: "Consultá el apéndice de este capítulo",
  };

  let text = dict[key] ?? key;

  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, String(v));
    });
  }

  return text;
};
