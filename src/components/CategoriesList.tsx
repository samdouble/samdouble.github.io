import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from 'services/contexts';
import { Category } from 'utils/types';

type CategoriesListProps = {
  categories: Category[];
}

export default function CategoriesList({
  categories,
}: CategoriesListProps) {
  const language = useContext(LanguageContext);

  return (
    <table>
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
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </Link>
                  </td>
                  <td
                    style={{
                      verticalAlign: 'top',
                    }}
                  >
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
    </table>
  );
}
