import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { RootState } from 'store';
import { Category } from 'utils/types';

interface CategoriesListProps {
  categories: Category[];
}

function CategoriesList({
  categories,
}: CategoriesListProps) {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <Table>
      <tbody>
        {
          categories
            .sort((categoryA, categoryB) => {
              if (categoryA.date && categoryB.date) return categoryA.date < categoryB.date ? 1 : -1;
              if (categoryA.date) return 1;
              return -1;
            })
            .map(category => {
              const categoryLanguageInfo = category?.translation.find(t => t.language === language);
              return (
                <tr key={category.id}>
                  <td width={180}>
                    <Link
                      to={`/category/${category.id}`}
                    >
                      <img
                        alt={categoryLanguageInfo?.title}
                        height={100}
                        src={category.mainImage}
                        width={160}
                      />
                    </Link>
                  </td>
                  <td>
                    <Link
                      style={{
                        color: 'black',
                        fontSize: 24,
                        textDecoration: 'none',
                      }}
                      to={`/category/${category.id}`}
                    >
                      {categoryLanguageInfo?.title}
                    </Link>
                    <div
                      style={{
                        color: 'gray',
                      }}
                    >
                      {category.date}
                    </div>
                  </td>
                </tr>
              );
            })
        }
      </tbody>
    </Table>
  );
}

export default CategoriesList;
