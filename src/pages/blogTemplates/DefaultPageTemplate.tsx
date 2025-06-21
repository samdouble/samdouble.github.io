import CategoriesList from 'components/CategoriesList';
import PostsList from 'components/PostsList';
import { Category, Post } from 'utils/types';
import content from 'content.json';

export type DefaultPageTemplateProps = {
  category?: Category;
};

const DefaultPageTemplate: React.FC<DefaultPageTemplateProps> = ({
  category,
}) => {
  const subCategories = (content.categories as Category[])
    .filter(cat => cat.parent === category?.id);

  const latestPosts = (content.posts as Post[])
    .filter(post => post.category === category?.id);

  return (
    <>
      <CategoriesList categories={subCategories} />
      <PostsList
        posts={latestPosts}
        showScore
      />
    </>
  );
}

export default DefaultPageTemplate;
