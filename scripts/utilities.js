const projectTabs = document.querySelectorAll('.project-tabs li');
const projects = document.querySelectorAll('.projects');

export const selectTabs = () => {
  projectTabs.forEach((tab, i) => {

    tab.addEventListener('click', () => {

      projectTabs.forEach((tab, index) => {
        tab.classList.remove('is-active');
        projects[index].classList.remove('appear')
      });

      tab.classList.add('is-active');
      projects[i].classList.add('appear');
      // console.log(projects[i])
    })
  })
}