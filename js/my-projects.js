
const renderProject = ( project ) => {
    return `
    <div class="reveal project">
        <div class="area-image">
            <a class="row-1" target="_blank" href="${project.link.url}">
                <img class="image circle" src="${project.image}" onerror="this.src='img/no-image.png'" />
            </a>
        </div>
        <article class="area-article">
            <div class="area-date">
                <time class="date" datetime="2011-11" >
                    ${project.dates.start.month} - ${project.dates.start.year} : ${project.dates.end.month} - ${project.dates.end.year}
                </time>
            </div>
            <div class="row-2">
                <article class="title"><p>${project.title}</p></article>
                <article class="detail">
                    <div class="description">
                        <h3> Project Goal: </h3>
                        <ul>
                            ${project.description.goal.map((goal) => `<li>${goal}</li>`).join('')}
                        </ul>

                        <h3> Key Activities: </h3>

                        <ul>
                            ${project.description.activity.map((activity) => `<li>${activity}</li>`).join('')}
                        </ul>

                        <h3> Outcomes: </h3>

                        <ul>
                            ${project.description.outcome.map((outcome) => `<li>${outcome}</li>`).join('')}
                        </ul>
                    </div>
                </article>
                <h4> Technologies: </h4>
                <div class="footer">
                    <ul class="tools">
                        ${project.skills.map( skill => `<li>${skill}</li>` ).join('')}
                    </ul>
                    <div class="links">
                    ${
                        ( project.link.demo )
                        ? `<a href="${ project.link.demo }" target="_blank" class="tiny_text elem">demo</a>`
                        : 
                        (
                            ( project.link.url )
                            ? `<a href="${ project.link.url }" target="_blank" class="tiny_text elem fa fa-${project.link.icon}">source code</a>`
                            : `<div />`
                        ) 
                    }
                    </div>
                    
                </div>
            </div>
        </article>
    </div>
    `;
}

function renderProjects()
{
    projects_element = document.getElementById( 'my-projects' );
    projects_element.innerHTML = '';
    
    fetch( 'js/projects.json' )
    .then(response => response.json())
    .then(projects => 
    {
        projects.map(project => 
        {
            projects_element.innerHTML += renderProject( project );
        });
    })
    .catch(error => console.log('Error fetching the JSON file:', error));
}
