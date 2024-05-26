export default function Pagination({ meta, setFetchPage }) {
  const prevPage = () => {
    setFetchPage(prev => prev - 1);
    window.scrollTo(0, 0);
  };
  const nextPage = () => {
    setFetchPage(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      {!meta?.isFirstPage && meta?.previousPage !== 1 && (
        <div className="flex">
          <button
            className="rounded-3xl bg-neutral-300 p-4 text-xs font-semibold shadow-xl sm:p-4 sm:text-sm"
            onClick={() => setFetchPage(1)}
          >
            First Page
          </button>
        </div>
      )}

      {meta?.previousPage && (
        <buttton
          onClick={prevPage}
          className="flex size-12 cursor-pointer items-center justify-center rounded-full shadow-xl sm:size-14"
        >
          {meta?.previousPage}
        </buttton>
      )}

      <button className="size-12 cursor-default rounded-full bg-brand text-white sm:size-14">
        {meta?.currentPage}
      </button>
      {!meta?.isLastPage && (
        <button
          onClick={nextPage}
          className="size-12 rounded-full  shadow-xl sm:size-14"
        >
          {meta?.nextPage}
        </button>
      )}
    </div>
  );
}
