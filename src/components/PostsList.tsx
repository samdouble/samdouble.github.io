import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from 'components/Icon';
import { LanguageContext } from 'services/contexts';
import { Category, Post } from 'utils/types';
import content from 'content.json';
import ScoreToStars from './ScoreToStars';
import './PostsList.css';

type PostsListProps = {
  posts: Post[];
  showScore?: boolean;
  showSeeMore?: boolean;
};

function PostsList({
  posts,
  showScore = false,
  showSeeMore = false,
}: PostsListProps) {
  const { t } = useTranslation();

  const language = useContext(LanguageContext);

  return (
    <table>
      <tbody>
        {
          posts
            .filter(post => post.translation.some(tr => tr.language === language))
            .sort((postA, postB) => (postA.date < postB.date ? 1 : -1))
            .map((post: Post) => {
              const postLanguageInfo = post?.translation.find(tr => tr.language === language);
              const postCategory = content.categories.find(cat => cat.id === post?.category);

              const postCategories: Category[] = [];
              for (let currentCategory = postCategory; currentCategory;) {
                postCategories.push(currentCategory as Category);
                const parentCategory = content.categories.find(cat => cat.id === currentCategory?.parent);
                currentCategory = parentCategory;
              }

              return (
                <tr
                  key={post.id}
                >
                  <td width={180}>
                    <div
                      style={{
                        position: 'relative',
                      }}
                    >
                      <Link
                        to={`/post/${post.id}`}
                      >
                        <img
                          alt={postLanguageInfo?.title}
                          height={100}
                          src={post.mainImage}
                          style={{
                            objectFit: 'cover',
                          }}
                          width={160}
                        />
                      </Link>
                      <div
                        style={{
                          bottom: 5,
                          float: 'right',
                          marginTop: 15,
                          position: 'absolute',
                          right: 20,
                        }}
                      >
                        {
                          postCategories
                            .map(category => (
                              <Link
                                className="post-category-icon"
                                key={category.id}
                                to={`/category/${category.id}`}
                              >
                                <Icon
                                  name={category.icon}
                                  size="sm"
                                />
                              </Link>
                            ))
                            .reverse()
                        }
                      </div>
                    </div>
                  </td>
                  <td
                    style={{
                      textAlign: 'left',
                      verticalAlign: 'top',
                    }}
                  >
                    <Link
                      style={{
                        color: 'black',
                        fontSize: 16,
                        textDecoration: 'none',
                      }}
                      to={`/post/${post.id}`}
                    >
                      <h4>{postLanguageInfo?.title}</h4>
                    </Link>
                    <div
                      style={{
                        color: 'gray',
                      }}
                    >
                      {new Date(post.date).toISOString().split('T')[0]}
                    </div>
                    {
                      showScore && post.score && (
                        <div>
                          <ScoreToStars
                            score={post.score}
                          />
                        </div>
                      )
                    }
                  </td>
                </tr>
              );
            })
        }
        {
          showSeeMore && (
            <tr>
              <td
                colSpan={2}
                style={{
                  borderBottom: 'none',
                  textAlign: 'center',
                }}
                width={180}
              >
                <Link to="/posts">
                  {t('seeMore')}
                </Link>
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}

export default PostsList;
