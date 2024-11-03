import { useState } from 'react';

import Sidebar from "./components/sidebar";
import NoProject from './components/no-project';
import ProjectForm from './components/project/project-form';
import Project from './components/project/project';

function App() {
  const [projects, setProjects] = useState({
    projects: [],
    selectedProjectId: undefined,
    tasks: []
  });

  const handleAddProject = (project) => {
    setProjects(prevProjects => {
      const updatedProjects = { ...prevProjects };

      if (!project.id) {
        project.id = self.crypto.randomUUID().toString();
      }

      updatedProjects.projects = [...updatedProjects.projects, project];
      updatedProjects.selectedProjectId = project.id;

      return updatedProjects;
    });
  }

  const handleClickAddProject = () => {
    setProjects(prevProjects => {
      return {
        ...prevProjects,
        selectedProjectId: null
      }
    })
  }

  const handleCancelAddProject = () => {
    setProjects(prevProjects => {
      return {
        ...prevProjects,
        selectedProjectId: prevProjects.projects.length > 0 ? prevProjects.projects[0].id : undefined
      }
    })
  }

  const handleSelectProject = (id) => {
    setProjects(prevProjects => {
      return {
        ...prevProjects,
        selectedProjectId: id
      }
    })
  };

  const handleRemoveProject = (id) => {
    setProjects(prevProjects => {
      return {
        ...prevProjects,
        projects: prevProjects.projects.filter(project => project.id !== id),
        selectedProjectId: undefined
      }
    })
  }

  const handleAddTask = (name) => {
    setProjects(prevProjects => {
      return {
        ...prevProjects,
        tasks: [
          {
            id: self.crypto.randomUUID().toString(),
            name,
            projectId: prevProjects.selectedProjectId
          },
          ...prevProjects.tasks
        ]
      }
    })
  };

  const handleRemoveTask = (id) => {
    setProjects(prevProjects => {
      return {
        ...prevProjects,
        tasks: [...prevProjects.tasks.filter(task => task.id !== id)]
      }
    })
  }

  let content = <NoProject onClickCreate={handleClickAddProject} />

  if (projects.selectedProjectId === null) {
    content = <ProjectForm
      onSave={handleAddProject}
      onCancel={handleCancelAddProject} />
  }

  if (projects.selectedProjectId) {
    content = <Project
      project={projects.projects.find(p => p.id === projects.selectedProjectId)}
      onRemoveProject={handleRemoveProject}
      tasks={projects.tasks.filter(t => t.projectId === projects.selectedProjectId)}
      onAddTask={handleAddTask}
      onRemoveTask={handleRemoveTask} />
  }

  return (
    <div className="h-screen flex pt-8">
      <Sidebar
        projects={projects.projects}
        selectedProjectId={projects.selectedProjectId}
        onClickCreate={handleClickAddProject}
        onSelectProject={handleSelectProject} />
      <main className='w-full overflow-auto px-8 pt-14'>
        {content}
      </main>
    </div>
  );
}

export default App;
