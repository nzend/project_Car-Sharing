export const splitStringIntoTextAndNumber = inputString => {
  const regex = /([^:]+)(?::\s*)?(\d+)?/;
  const match = inputString.match(regex);

  if (match) {
    const text = match[1].trim();
    const number = match[2] ? parseInt(match[2], 10) : null;
    if (!number) {
      return { text: inputString, number: null };
    }
    return { text: text + ':', number };
  } else {
    return { text: inputString, number: null };
  }
};
