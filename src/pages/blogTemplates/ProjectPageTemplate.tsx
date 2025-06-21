import CategoriesList from 'components/CategoriesList';
import Icon from 'components/Icon';
import PostsList from 'components/PostsList';
import { Category, Post } from 'utils/types';
import content from 'content.json';

export type ProjectPageTemplateProps = {
  category?: Category;
};

const ProjectPageTemplate: React.FC<ProjectPageTemplateProps> = ({
  category,
}) => {
  const subCategories = (content.categories as Category[])
    .filter(cat => cat.parent === category?.id);

  const latestPosts = (content.posts as Post[])
    .filter(post => post.category === category?.id);

  return (
    <>
      <div
        style={{
          float: 'left',
          width: '65%',
        }}
      >
        <CategoriesList categories={subCategories} />
        <PostsList
          posts={latestPosts}
          showScore
        />
      </div>
      <div
        style={{
          backgroundColor: '#e5e5e5',
          borderRadius: 3,
          float: 'right',
          padding: 10,
          width: '30%',
        }}
      >
        <div><b>Technologies</b></div>
        <br />
        <div>
          {
            category?.techs?.map(tech => (
              <Icon
                key={tech}
                name={`tech-${tech}`}
                style={{
                  height: 40,
                  margin: '-5px 5px 0 0',
                  width: 40,
                }}
              />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default ProjectPageTemplate;
