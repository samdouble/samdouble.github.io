import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import { useElementSize } from '@custom-react-hooks/use-element-size';
import Icon from 'components/Icon';
import { LanguageContext } from 'services/contexts';
import { Category } from 'utils/types';

type ProjectsGridTileProps = {
  project: Category;
};

function ProjectsGridTile({
  project,
}: ProjectsGridTileProps) {
  const [setRef, size] = useElementSize();

  const { t } = useTranslation();

  const language = useContext(LanguageContext);

  const imagePositionY = (size.width < 230) ? -8 : -18;

  return (
    <Card
      key={project.id}
      ref={setRef}
      style={{
        cursor: 'auto',
        maxWidth: '18rem',
      }}
    >
      <Card.Img
        variant="top"
        src={project.mainImage}
        style={{
          objectPosition: `0 ${imagePositionY}px`,
        }}
      />
      <Card.Body
        style={{
          marginBottom: 35,
          position: 'relative',
        }}
      >
        <div>
          {
            project.techs?.map(tech => (
              <Icon
                key={tech}
                name={`tech-${tech}`}
                style={{
                  height: 20,
                  margin: '-5px 5px 0 0',
                  width: 20,
                }}
              />
            ))
          }
        </div>
        <Card.Title>{project.translation.find(tr => tr.language === language)?.title}</Card.Title>
        <Card.Text>
          {project.translation.find(tr => tr.language === language)?.description}
        </Card.Text>
        <Link
          style={{
            position: 'absolute',
            bottom: -20,
          }}
          to={`/category/${project.id}`}
        >
          <Button
            variant="primary"
          >
            {t('seeMore')}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectsGridTile;
