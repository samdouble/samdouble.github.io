import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';
import { RootState } from 'store';
import { Post } from 'utils/types';

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
              return (
                <tr key={post.id}>
                  <td width={180}>
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
                  </td>
                  <td>
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
