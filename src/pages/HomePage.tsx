import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectsGrid from 'components/home/ProjectsGrid';
import PostsList from 'components/PostsList';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import { LanguageContext } from 'services/contexts';
import { Post } from 'utils/types';
import content from 'content.json';
import './styles.css';

function HomePage() {
  const { t } = useTranslation();

  const language = useContext(LanguageContext);

  const latestPosts = (content.posts as Post[])
    .filter(post => post.translation?.some(tr => tr.language === language))
    .filter(post => !post.hideFromMainFeed)
    .filter(post => !post.isHidden)
    .sort((postA, postB) => (postA.date < postB.date ? 1 : -1))
    .slice(0, 5);

  return (
    <div className="page-container page-container--fluid">
      <div className="page-row">
        <div className="page-col page-col--main-wide">
          <h2>{t('projects')}</h2>
          <ProjectsGrid />
          <br />
        </div>
        <div className="page-col page-col--side-narrow">
          <div
            style={{
              marginBottom: 20,
            }}
          >
            <h2>{t('blog')}</h2>
            <PostsList
              posts={latestPosts}
              showSeeMore
            />
            <h2>{t('elsewhereInternet')}</h2>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
