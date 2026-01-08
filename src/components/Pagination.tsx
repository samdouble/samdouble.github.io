import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { getPaginationPageNumbers } from 'utils/pagination';
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

  const pagesArray = getPaginationPageNumbers(currentPage, nbPages);

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
              <Fragment key={value}>
                {
                  !pagesArray.includes(value - 1)
                  && value > 1
                  && pagesArray.includes(pagesArray[index - 1] + 1)
                  && (
                    <PaginationItem
                      isDisabled
                      onClick={() => navigate(getUrl(value))}
                      text="..."
                      value={value}
                    />
                  )
                }
                <PaginationItem
                  onClick={() => navigate(getUrl(value))}
                  text={value.toString()}
                  value={value}
                />
                {
                  !pagesArray.includes(value + 1)
                  && value < nbPages
                  && (
                    <PaginationItem
                      isDisabled
                      onClick={() => navigate(getUrl(value))}
                      text="..."
                      value={value}
                    />
                  )
                }
              </Fragment>
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
