import { useElementSize } from '@custom-react-hooks/use-element-size';
import ProjectsGridTile from 'components/home/ProjectsGridTile';
import { Category } from 'utils/types';
import content from 'content.json';

function ProjectsGrid() {
  const [setRef, size] = useElementSize();

  const projects = (content.categories as Category[])
    .filter(category => category.parent === 'projects')
    .filter(category => !category.isHidden)
    .sort((categoryA, categoryB) => (categoryA.date! < categoryB.date! ? 1 : -1));

  const {
    width: projectGridWidth,
  } = size;
  let projectGridTemplateColumns = '24% 24% 24% 24%';
  if (projectGridWidth < 600) {
    projectGridTemplateColumns = '48% 48%';
  } else if (projectGridWidth < 900) {
    projectGridTemplateColumns = '32% 32% 32%';
  }
  console.log(projectGridWidth, projectGridTemplateColumns);

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
