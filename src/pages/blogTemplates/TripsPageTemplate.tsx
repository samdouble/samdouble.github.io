import CategoriesList from 'components/CategoriesList';
import PostsList from 'components/PostsList';
import { Category, Post } from 'utils/types';
import content from 'content.json';

export type TripsPageTemplateProps = {
  category?: Category;
};

const TripsPageTemplate: React.FC<TripsPageTemplateProps> = ({
  category,
}) => {
  const subCategories = (content.categories as Category[])
    .filter(cat => cat.parent === category?.id);

  const latestPosts = (content.posts as Post[])
    .filter(post => post.category === category?.id);

  return (
    <>
      <div>
        <CategoriesList categories={subCategories} />
        <PostsList
          posts={latestPosts}
          showScore
        />
      </div>
    </>
  );
}

export default TripsPageTemplate;
