
var projects = [];
function write_links( proj )
{
    for (n = 0; n < proj.links.length; n++)
    {
        document.write( "                 <a href=\""+ proj.links[ n ].url +"\" class=\"elem fa fa-"+ proj.links[ n ].icon +"\"></a> \n" );
    }
}
function write_tools( proj )
{
    for (n = 0; n < proj.skills.length; n++)
    {
        document.write( "              <li class=\"elem\"><div class=\"point\"></div>"+ proj.skills[ n ] +"</li>\n" );
    }
}
function write_my_projects()
{
    for (i = 0; i < projects.length; i++)
    {
        var proj = projects[ i ];
        var k = i % 2;
        if ( k == 0 )
        {
            document.write( "<div class=\"reveal project\">" );
        }
        else 
        {
            document.write( "<div class=\"reveal project-r\">" );
        }
        document.write( "    <div class=\"area-image\">" );
        document.write( "        <a class=\"row-1\" target=\"_blank\" href=\""+ proj.url +"\">" );
        document.write( "            <img class=\"image circle\" src=\""+ proj.img +"\" onerror=\"this.src='img/no-image.png'\" />");
        document.write( "        </a>" );
        document.write( "    </div>" );
        document.write( "    <article class=\"area-article\">" );
        document.write( "        <div class=\"area-date\">" );
        document.write( "           <time class=\"date\" datetime=\"2011-11\" >" );
        document.write( "               "+ proj.date.month +"-"+ proj.date.year );
        document.write( "           </time>" );
        document.write( "        </div>" );
        document.write( "        <div class=\"row-2\">" );
        document.write( "            <article class=\"title\"><p>"+ proj.title +"</p></article>" );
        document.write( "            <article class=\"detail\">" );
        document.write( "                <p class=\"description\">"+ proj.discription +"</p>" );
        document.write( "            </article>" );
        document.write( "            <div class=\"footer\">" );
        document.write( "              <ul class=\"tools\">\n" );
            write_tools( proj ); 
        document.write( "              </ul>\n" );
        document.write( "              <div class=\"links\">" );
            write_links( proj ); 
        document.write( "              </div>" );
        document.write( "            </div>" );
        document.write( "        </div>" );
        document.write( "    </article>" );
        document.write( "</div>" );
    }
}


function AddProjects( _title, _date, _skills, _links, _url, _img, _discription )
{
    projects.push
    ( 
        { 
              title:       _title
            , date:        _date
            , skills:      _skills
            , links:       _links
            , discription: _discription
            , url:         _url
            , img:         _img 
        } 
    );
}

AddProjects
( 
    "Solo Indie Game Development: Engine & Programming"
,   { month: "Jan", year:  "2017" }
,   [ "C++", "GLSL", "Vulkan API", "Data Structure & Algorithm", "Vector Mathematics" ]
,   [ { icon: "github", url: "https://github.com/kanthonye/KEGE" } ]
,   "https://github.com/kanthonye/KEGE"
,   "img/Screenshot-2023-11-04-at-1.36.21-PM.png"
,   "This project involved the creation of a game engine using C++ and a range of related technologies. To handle input from the system, an application object was created to manage the engine object, which in turn was responsible for managing scene objects. An abstract graphics object was created to handle all graphics commands and to create graphics objects such as vertex-buffers, index-buffers, textures, and graphics-pipelines. One notable aspect of the project was the implementation of a pool-managing system using C++ templates to store data of any kind. The project also involved the creation of a Vulkan graphics object and a vector math library, both of which were used extensively throughout the development process. <br/><br/>Other key components of the project included the creation of a scene object, an Entity Component System (ECS) to manage scene entities, and the development of various graphics-related features such as graphics-pipelines, mesh objects, material objects, and a graphical user interface (GUI). Overall, this project provided a comprehensive and flexible game engine capable of supporting a wide range of game development needs. Skills required for this project: C++, Vulkan API, Data Structure & Algorithm, Vector Mathematics, Memory Management, OPP."
);

AddProjects
( 
    "E-Commerce Shopping Store"
,   { month: "June", year:  "2023" }
,   [ "React", "JavaScript", "CSS", "HTML" ]
,   [ { icon: "github", url: "https://github.com/kanthonye/e-commerce-web-app/tree/main" } ]
,   "https://github.com/kanthonye/e-commerce-web-app/tree/main"
,   "img/project-e-comm.png"
,   `
<strong>Project Goal:</strong>
<br/><br/>
Develop a prototype functional game engine with a focus on core functionalities and utilize it to create a basic, playable game as a solo indie developer.

<br/><br/>
<strong>Key Activities:</strong>
<br/><br/>

As a testament to my expertise in React.js and my commitment to continuous learning, I proudly present my latest project—a comprehensive, feature-rich e-commerce online store. Crafted from scratch using React.js in the renowned Visual Studio Code (VSCode) editor, this project allowed me to put my skills to the test and further expand my knowledge in web development.
<br/><br/>
The primary motivation behind embarking on this ambitious endeavor was to challenge myself and push the boundaries of my React.js skills. By single-handedly developing a full-fledged e-commerce website, I honed my abilities in component-based architecture, state management, and React Router, among other vital concepts.
<br/><br/>
With this project, I successfully created an end-to-end e-commerce solution that includes key features such as product listings, shopping cart functionality, secure payment processing, and user account management. The project showcases my ability to integrate complex systems and deliver a cohesive and intuitive user experience.
<br/><br/>
By featuring my full-fledged e-commerce online store project in my web portfolio, I aim to highlight my proficiency in React.js, as well as my determination to take on challenging projects and continuously expand my skills. It stands as a testament to my passion for web development and my commitment to delivering high-quality, impactful solutions.
<br/><br/>
Explore the project, experience the immersive shopping journey, and witness the culmination of my efforts in creating a remarkable e-commerce online store powered by React.js, CSS, and HTML.
`
);

AddProjects
( 
    "Solo Indie Game Development: Engine & Programming"
,   { month: "Jan", year:  "2017" }
,   [ "C++", "GLSL", "Vulkan API", "Data Structure & Algorithm", "Vector Mathematics" ]
,   [ { icon: "github", url: "https://github.com/kanthonye/KEGE" } ]
,   "https://github.com/kanthonye/KEGE"
,   "img/Screenshot-2023-11-04-at-1.36.21-PM.png"
,   "This project involved the creation of a game engine using C++ and a range of related technologies. To handle input from the system, an application object was created to manage the engine object, which in turn was responsible for managing scene objects. An abstract graphics object was created to handle all graphics commands and to create graphics objects such as vertex-buffers, index-buffers, textures, and graphics-pipelines. One notable aspect of the project was the implementation of a pool-managing system using C++ templates to store data of any kind. The project also involved the creation of a Vulkan graphics object and a vector math library, both of which were used extensively throughout the development process. <br/><br/>Other key components of the project included the creation of a scene object, an Entity Component System (ECS) to manage scene entities, and the development of various graphics-related features such as graphics-pipelines, mesh objects, material objects, and a graphical user interface (GUI). Overall, this project provided a comprehensive and flexible game engine capable of supporting a wide range of game development needs. Skills required for this project: C++, Vulkan API, Data Structure & Algorithm, Vector Mathematics, Memory Management, OPP."
);

AddProjects
( 
    "My Web Portfolio"
,   { month: "Oct", year:  "2019" }
,   [ "Javascript", "HTML", "CSS" ]
,   [ { icon: "github", url: "https://github.com/kanthonye/web-protfolio-2.0" } ]
,   "https://github.com/kanthonye/web-protfolio-2.0"
,   "img/site-img.png"
,   "I designed and developed my personal web portfolio using HTML, CSS, and JavaScript. The portfolio showcases my skills and experience as a software engineer, featuring an intuitive user interface and a clean, modern design. Leveraging my expertise in front-end web development, I incorporated responsive design techniques and optimized the site for performance and usability across a variety of devices. Additionally, I utilized JavaScript to add interactive elements and animations, creating a dynamic and engaging user experience. This project not only highlights my technical abilities in web development, but also serves as a showcase of my personal brand and professional accomplishments."
);

AddProjects
( 
    "Programming Language Interpreter"
,   { month: "May", year:  "2019" }
,   [ "C++", "Data Structure & Algorithm", "OOP" ]
,   [ { icon: "github", url: "https://github.com/kanthonye/school-projects/tree/master/qc/CS316/Interpreter" } ]
,   "https://github.com/kanthonye/school-projects/tree/master/qc/CS316/Interpreter"
,   "img/proj-interpreter-316.png"
,   "As part of my coursework in the Principles of Programming Languages course at Queen College, I undertook an ambitious project to develop a Programming Language Interpreter in C++. While my peers opted to code the project in Java, I chose to differentiate myself by taking on the challenge of developing the application in C++. The project comprised four distinct stages, each building on the previous one. In the first stage, I designed and built a DFA (Deterministic Finite Automaton) to support the type-free programming language, similar to Python and JavaScript. In the second stage, I developed a parser to effectively parse instructions from the programming language. In the third stage, I implemented an interpreter to accurately interpret the parsed instructions. Finally, in the fourth and final stage, I extended the application to support array allocation and index operations, demonstrating my strong aptitude for complex problem-solving and programming."
);

AddProjects
( 
    "interactive 3D scene (Christmas Theme)"
,   { month: "Dec", year:  "2018" }
,   [ "C++" , "OpenGL API", "Data Structure & Algorithm", "Vector Mathematics" ]
,   [ { icon: "github", url: "https://github.com/kanthonye/school-projects/blob/master/qc/CS368/Basic3DInteractEnvironment.cpp" } ]
,   "https://github.com/kanthonye/school-projects/blob/master/qc/CS368/Basic3DInteractEnvironment.cpp"
,   "img/simple-scene.gif"
,   "As part of my coursework in the Intro to Computer Graphics course at Queens College, I undertook a challenging project to create an interactive 3D scene with a Christmas theme. This project served as the final project for the course and was one of my favorite assignments during the semester. Using my prior experience in 3D graphics programming with modern OpenGL, which I had gained on my own before taking the course, I designed and developed the project using the OpenGL Graphics API version 2.1 and programming language C++. The project required the application of the concepts learned throughout the course to create a 2D or 3D scene from scratch. In my project, I created a fully-realized 3D scene featuring a snowman, table, chairs, rotating ceiling fan, and a free-moving 3D camera that allowed users to explore the scene from any angle. Notably, all objects in the scene were manually created, demonstrating my strong aptitude for hands-on design and development." +
    "\n" +
    "Note: all object in the scene were built manually." 
);

AddProjects
( 
    "Realtime Continuous LOD Quadtrees Terrain Rendering"
,   { month: "Sep", year:  "2016" }
,   [ "C++", "GLSL", "OpenGL API", "Data Structure & Algorithm", "Vector Mathematics" ]
,   [ ]
,   "proj-url"
,   "img/landscape-0.png"
,   "I undertook a complex project focused on creating Realtime Continuous LOD Quadtrees Terrain Rendering. The project involved the use of various technical skills, including C++, GLSL, OpenGL API, Data Structures & Algorithms, Vector Mathematics, and OOP. The primary objective was to take a square grid mesh, along with a height map, and use the image data to displace the vertex position height component. I then implemented a quadtree-based LOD algorithm to subdivide the grid mesh into smaller squares based on the viewer's position. This was achieved by including and excluding vertex indices from the grid mesh, creating a dynamic and highly interactive terrain rendering system. Overall, this project showcased my expertise in various programming languages, data structures, and algorithms, as well as my ability to work on complex projects in the field of computer graphics and game development.." 
);


AddProjects
( 
    "Vector Math Library"
,   { month: "Oct", year:  "2014" }
,   [ "C++", "Linear Alegbra", "Vector Calculus" ]
,   [ ]
,   "proj-url"
,   "img/coding-clipart.jpg"
,   "I designed and built a Vector Math Library that has been instrumental in my work. The library was developed using C++, Linear Algebra, and Vector Calculus, and is designed to simplify and optimize complex mathematical calculations involving vectors. The library provides a range of functions, including vector addition, subtraction, dot product, cross product, and normalization, among others. The library has been designed to be efficient and easy to use, with a clear and intuitive API that simplifies the process of working with vectors. Overall, this project showcases my expertise in C++ programming, as well as my ability to design and develop complex software systems for use in 3D projects.." 
);
