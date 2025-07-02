export const cx = (
  ...classRequests: (string | false | null | undefined)[]
): string => {
  let classNames = "";

  for (const className of classRequests) {
    classNames += className ? className + " " : "";
  }
  return classNames;
};
