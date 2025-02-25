import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';
import Icon from 'components/Icon';
import { RootState } from 'store';
import { Category, Post } from 'utils/types';
import content from 'content.json';
import './PostsList.css';

interface PostsListProps {
  posts: Post[];
}

function PostsList({
  posts,
}: PostsListProps) {
  const { t } = useTranslation();

  const { language } = useSelector((state: RootState) => state.language);

  return (
    <Table>
      <tbody>
        {
          posts
            .sort((postA, postB) => postA.date < postB.date ? 1 : -1)
            .map(post => {
              const postLanguageInfo = post?.translation.find(tr => tr.language === language);
              const postCategory = content.categories.find(cat => cat.id === post?.category);

              const postCategories: Category[] = [];
              for (let currentCategory = postCategory; currentCategory;) {
                postCategories.push(currentCategory as Category);
                const parentCategory = content.categories.find(cat => cat.id === currentCategory?.parent);
                currentCategory = parentCategory;
              }

              return (
                <tr key={post.id}>
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
                          width={160}
                          style={{
                            objectFit: 'cover',
                          }}
                        />
                      </Link>
                      <div
                        style={{
                          bottom: 5,
                          float: 'right',
                          marginTop: 15,
                          position: 'absolute',
                          right: 5,
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
                      {post.date}
                    </div>
                  </td>
                </tr>
              );
            })
        }
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
      </tbody>
    </Table>
  );
}

export default PostsList;
