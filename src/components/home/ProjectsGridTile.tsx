import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useElementSize } from '@custom-react-hooks/use-element-size';
import Icon from 'components/Icon';
import { LanguageContext } from 'services/contexts';
import { Category } from 'utils/types';
import './ProjectGridTile.css';

type ProjectsGridTileProps = {
  project: Category;
};

function ProjectsGridTile({
  project,
}: ProjectsGridTileProps) {
  const [setRef, size] = useElementSize();
  const navigate = useNavigate();

  const language = useContext(LanguageContext);

  const imagePositionY = (size.width < 230) ? -8 : -15;

  return (
    <Card
      className="project-grid-tile"
      key={project.id}
      onClick={() => {
        navigate(`/category/${project.id}`);
      }}
      ref={setRef}
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
      </Card.Body>
    </Card>
  );
}

export default ProjectsGridTile;
