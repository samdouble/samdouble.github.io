import { useElementSize } from '@custom-react-hooks/use-element-size';
import ProjectsGridTile from 'components/home/ProjectsGridTile';
import { Category } from 'utils/types';
import content from 'content.json';

function ProjectsGrid() {
  const [setRef, size] = useElementSize();

  const projects = (content.categories as Category[])
    .filter(category => category.parent === 'projects')
    .sort((categoryA, categoryB) => (categoryA.date! < categoryB.date! ? 1 : -1));

  const {
    width: projectGridWidth,
  } = size;
  const projectGridTemplateColumns = (projectGridWidth < 800)
    ? '32% 32% 32%'
    : '24% 24% 24% 24%';

  return (
    <div
      ref={setRef}
      style={{
        columnGap: 10,
        display: 'grid',
        gridTemplateColumns: projectGridTemplateColumns,
        gridTemplateRows: 'auto auto auto',
        rowGap: 15,
      }}
    >
      {
        projects.map(project => (
          <ProjectsGridTile
            key={project.id}
            project={project}
          />
        ))
      }
    </div>
  );
}

export default ProjectsGrid;
