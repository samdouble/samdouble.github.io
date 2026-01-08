export const getPaginationPageNumbers = (currentPage: number, nbPages: number) => {
  const pagesArray: number[] = [];

  if (nbPages <= 10) {
    pagesArray.push(...Array.from({ length: nbPages }, (_, index) => index + 1));
  } else {
    const minPage = Math.max(1, currentPage - 2);
    const maxPage = Math.min(nbPages, currentPage + 2);
    const quarter = Math.floor(nbPages / 4);
    const half = Math.floor(nbPages / 2);
    const threeQuarters = Math.ceil(3 * nbPages / 4);
    pagesArray.push(
      ...Array
        .from(
          new Set([
            ...Array.from({ length: maxPage - minPage + 1 }, (_, index) => index + minPage),
            quarter,
            half,
            threeQuarters,
          ])
        )
        .sort((a, b) => a < b ? -1 : 1),
    );
  }
  console.log('getPaginationPageNumbers', currentPage, nbPages, pagesArray);
  return pagesArray;
};
