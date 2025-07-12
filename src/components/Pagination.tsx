import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import './Pagination.css';

type PaginationItemProps = {
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: (value: number) => void;
  text: string;
  value: number;
}

function PaginationItem({
  isActive,
  isDisabled,
  onClick,
  text,
  value,
}: PaginationItemProps) {
  return (
    <div
      className={clsx("pagination-item", {
        active: isActive,
        disabled: isDisabled,
        tiltable: !isDisabled && !isActive,
      })}
      key={value}
      onClick={() => {
        if (!isActive && !isDisabled) {
          onClick(value);
        }
      }}
    >
      {text}
    </div>
  )
}

type PaginationProps = {
  currentPage: number;
  getUrl: (page: number) => string;
  nbPages: number;
};

export default function Pagination({
  currentPage,
  getUrl,
  nbPages,
}: PaginationProps) {
  const navigate = useNavigate();

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

  return (
    <div className="pagination">
      <PaginationItem
        isDisabled={currentPage === 1}
        onClick={() => navigate(getUrl(1))}
        text="&lt;&lt;"
        value={1}
      />
      <PaginationItem
        isDisabled={currentPage === 1}
        onClick={() => navigate(getUrl(currentPage - 1))}
        text="&lt;"
        value={currentPage - 1}
      />
      {
        pagesArray
          .map((value, index) => {
            if (value === currentPage) {
              return (
                <PaginationItem
                  key={value}
                  isActive
                  onClick={() => navigate(getUrl(value))}
                  text={value.toString()}
                  value={value}
                />
              )
            }
            return (
              <>
                {
                  !pagesArray.includes(value - 1)
                  && value > 1
                  && pagesArray.includes(pagesArray[index - 1] + 1)
                  && (
                    <PaginationItem
                      key={value}
                      isDisabled
                      onClick={() => navigate(getUrl(value))}
                      text="..."
                      value={value}
                    />
                  )
                }
                <PaginationItem
                  key={value}
                  onClick={() => navigate(getUrl(value))}
                  text={value.toString()}
                  value={value}
                />
                {
                  !pagesArray.includes(value + 1)
                  && value < nbPages
                  && (
                    <PaginationItem
                      key={value}
                      isDisabled
                      onClick={() => navigate(getUrl(value))}
                      text="..."
                      value={value}
                    />
                  )
                }
              </>
            )
          })
      }
      <PaginationItem
        isDisabled={currentPage === nbPages}
        onClick={() => navigate(getUrl(currentPage + 1))}
        text="&gt;"
        value={currentPage + 1}
      />
      <PaginationItem
        isDisabled={currentPage === nbPages}
        onClick={() => navigate(getUrl(nbPages))}
        text="&gt;&gt;"
        value={nbPages}
      />
    </div>
  );
};
