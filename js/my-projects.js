
function main()
{
    fetch( "https://github.com/kanthonye/web-protfolio-2.0/blob/master/js/projects.json" )
    .then( (response) => response.json() )
    .then((json) => {
        alert( json );
        //projects = json;
    });
}

// var projects = [];
// function write_links( proj )
// {
//     for (n = 0; n < proj.links.length; n++)
//     {
//         document.write( "                 <a href=\""+ proj.links[ n ].url +"\" class=\"elem fa fa-"+ proj.links[ n ].icon +"\"></a> \n" );
//     }
// }
// function write_tools( proj )
// {
//     for (n = 0; n < proj.skills.length; n++)
//     {
//         document.write( "              <li class=\"elem\"><div class=\"point\"></div>"+ proj.skills[ n ] +"</li>\n" );
//     }
// }
// function write_my_projects()
// {
//     for (i = 0; i < projects.length; i++)
//     {
//         var proj = projects[ i ];

//         document.write( "<div class=\"reveal project\">" );
//         document.write( "    <div class=\"area-image\">" );
//         document.write( "        <a class=\"row-1\" target=\"_blank\" href=\""+ proj.url +"\">" );
//         document.write( "            <img class=\"image circle\" src=\""+ proj.img +"\" onerror=\"this.src='img/no-image.png'\" />");
//         document.write( "        </a>" );
//         document.write( "    </div>" );
//         document.write( "    <article class=\"area-article\">" );
//         document.write( "        <div class=\"area-date\">" );
//         document.write( "           <time class=\"date\" datetime=\"2011-11\" >" );
//         document.write( "               "+ proj.date.start.month +"-"+ proj.date.start.year +"<span style=\"width:20px\"></span>:<span style=\"width:20px\"></span>"+ proj.date.end.month +"-"+ proj.date.end.year );
//         document.write( "           </time>" );
//         document.write( "        </div>" );
//         document.write( "        <div class=\"row-2\">" );
//         document.write( "            <article class=\"title\"><p>"+ proj.title +"</p></article>" );
//         document.write( "            <article class=\"detail\">" );
//         document.write( "                <div class=\"description\">"+ proj.discription +"</div>" );
//         document.write( "            </article>" );
//         document.write( "            <div class=\"footer\">" );
//         document.write( "              <ul class=\"tools\">\n" );
//             write_tools( proj ); 
//         document.write( "              </ul>\n" );
//         document.write( "              <div class=\"links\">" );
//             write_links( proj ); 
//         document.write( "              </div>" );
//         document.write( "            </div>" );
//         document.write( "        </div>" );
//         document.write( "    </article>" );
//         document.write( "</div>" );
//     }
// }


// function AddProjects( _title, _date, _skills, _links, _url, _img, _discription )
// {
//     projects.push
//     ( 
//         { 
//               title:       _title
//             , date:        _date
//             , skills:      _skills
//             , links:       _links
//             , discription: _discription
//             , url:         _url
//             , img:         _img 
//         } 
//     );
// }

// AddProjects
// ( 
//     "Solo Indie Game Development: Engine & Programming"
// ,   {start:{ month: "Jan", year:  "2024" }, end:{ month: "Present", year:  "" }}
// ,   [ "C++", "GLSL", "Vulkan API", "Data Structure & Algorithm", "Vector Mathematics", "vscode", "xcode" ]
// ,   [ { icon: "github", url: "https://github.com/kanthonye/KEGE" } ]
// ,   "https://github.com/kanthonye/KEGE"
// ,   "img/Screenshot-2023-11-04-at-1.36.21-PM.png"
// ,   `
// <h3> Project Goal: </h3>
// <ul>
//     <li> Continue developing my prototype functional game engine and leverage the Vulkan API for improved performance and potential future expansion. </li>
// </ul>

// <h3> Key Activities: </h3>

// <ul>
//     <li> Learn the Vulkan API. </li>
//     <li> Reimplement core graphics components using Vulkan (e.g., vertex-buffer, index-buffer, command-buffer, texture image, shader pipelines etc). </li>
//     <li> Exploring developing a scripting system (scripting language, virtual machine, compiler). </li>
// </ul>

// <h3> Outcomes: </h3>

// <ul>
//     <li> Gained advanced knowledge of the Vulkan API and its application in game engine development. </li>
//     <li> Enhanced the engine's graphics capabilities by leveraging Vulkan's low-level control and potential performance benefits. </li>
//     <li> Explored scripting system development, gaining valuable experience in language design and virtual machine implementation. </li>
// </ul>
// `
// );

// AddProjects
// ( 
//     "E-Commerce Shopping Store"
// ,   {start:{ month: "June", year:  "2023" }, end:{ month: "June", year:  "2023" }}
// ,   [ "React", "JavaScript", "CSS", "HTML", "VSCode" ]
// ,   [ { icon: "github", url: "https://github.com/kanthonye/e-commerce-web-app/tree/main" } ]
// ,   "https://github.com/kanthonye/e-commerce-web-app/tree/main"
// ,   "img/project-e-comm.png"
// ,   `
// <h3> Project Goal: </h3>
// <ul>
//     <li> Develop and a user-friendly e-commerce platform specifically catering to the fashion market. </li>
// </ul>

// <h3> Target Audience: </h3>

// <ul>
//     <li> Fashion-conscious consumers seeking a convenient and stylish online shopping experience.. </li>
// </ul>

// <h3> Key Activities: </h3>

// <ul>
//     <li> Seamless User Experience: Create an intuitive and visually appealing platform for browsing, searching, and purchasing products. This could include high-resolution product images, detailed descriptions, and user-friendly navigation. </li>
//     <li> (Optional) Advanced Features: Consider incorporating features like size recommendations, wishlists, customer reviews, loyalty programs, or influencer partnerships to enhance the shopping experience. </li>
// </ul>

// <h3> Outcomes: </h3>

// <ul>
//     <li> Gain valuable experience in e-commerce platform selection, feature development, and user experience design. </li>
// </ul>
// `
// );

// AddProjects
// ( 
//     "Solo Indie Game Development: Engine & Programming"
// ,   {start:{ month: "Jan", year:  "2017" }, end:{ month: "June", year:  "2021" }}
// ,   [ "C++", "GLSL", "OpenGL 4.1 API with GLFW Library", "Data Structure & Algorithm", "Vector Mathematics", "xcode" ]
// ,   [ { icon: "github", url: "https://github.com/kanthonye/KEGE" } ]
// ,   "https://github.com/kanthonye/KEGE"
// ,   "img/Screenshot-2023-11-04-at-1.36.21-PM.png"
// ,   `
// <h3> Project Goal: </h3>
// <ul>
//     <li> Develop a prototype functional game engine with a focus on core functionalities and utilize it to create a basic, playable game as a solo indie developer. </li>
// </ul>

// <h3> Key Activities: </h3>

// <ul>
//     <li> Learn core game development concepts (rendering, physics, game loop, audio, animation, and memory management). </li>
//     <li> Implement core functionalities within the engine (game loop, rendering, scene management, input handling, collision detection, etc) </li>
//     <li> Build an entity-component-system for representing entities in the scene. </li>
//     <li> Build a level-of-detail quad-tree terrain to support both flat-terrain and spherical-terrain for planetary rendering. </li>
//     <li> Develop an immediate mode graphical-user-interface (GUI) library. </li>
//     <li> (Optional) Explored additional features like audio, menus, level design, atmospheric scattering, water rendering, custom scripting system and virtual machine, etc. </li>
// </ul>

// <h3> Outcomes: </h3>

// <ul>
// <li> Honed software development skills through the development process. </li>
// <li> Gained valuable experience in solo game development and the software development lifecycle. </li>
// </ul>
// `
// );

// AddProjects
// ( 
//     "My Web Portfolio"
// ,   {start:{ month: "Oct", year:  "2019" },end:{ month: "Oct", year:  "2019" }}
// ,   [ "Javascript", "HTML", "CSS" ]
// ,   [ { icon: "github", url: "https://github.com/kanthonye/web-protfolio-2.0" } ]
// ,   "https://github.com/kanthonye/web-protfolio-2.0"
// ,   "img/site-img.png"
// ,   "I designed and developed my personal web portfolio using HTML, CSS, and JavaScript. The portfolio showcases my skills and experience as a software engineer, featuring an intuitive user interface and a clean, modern design. Leveraging my expertise in front-end web development, I incorporated responsive design techniques and optimized the site for performance and usability across a variety of devices. Additionally, I utilized JavaScript to add interactive elements and animations, creating a dynamic and engaging user experience. This project not only highlights my technical abilities in web development, but also serves as a showcase of my personal brand and professional accomplishments."
// );

// AddProjects
// ( 
//     "Programming Language Interpreter"
// ,   {start:{ month: "Mar", year:  "2019" }, end:{ month: "May", year:  "2019" }}
// ,   [ "C++", "Data Structure & Algorithm", "OOP" ]
// ,   [ { icon: "github", url: "https://github.com/kanthonye/school-projects/tree/master/qc/CS316/Interpreter" } ]
// ,   "https://github.com/kanthonye/school-projects/tree/master/qc/CS316/Interpreter"
// ,   "img/proj-interpreter-316.png"
// ,   "As part of my coursework in the Principles of Programming Languages course at Queen College, I undertook an ambitious project to develop a Programming Language Interpreter in C++. While my peers opted to code the project in Java, I chose to differentiate myself by taking on the challenge of developing the application in C++. The project comprised four distinct stages, each building on the previous one. In the first stage, I designed and built a DFA (Deterministic Finite Automaton) to support the type-free programming language, similar to Python and JavaScript. In the second stage, I developed a parser to effectively parse instructions from the programming language. In the third stage, I implemented an interpreter to accurately interpret the parsed instructions. Finally, in the fourth and final stage, I extended the application to support array allocation and index operations, demonstrating my strong aptitude for complex problem-solving and programming."
// );

// AddProjects
// ( 
//     "interactive 3D scene (Christmas Theme)"
// ,   {start:{ month: "Dec", year:  "2018" }, end:{ month: "Dec", year:  "2018" }}
// ,   [ "C++" , "OpenGL API", "Data Structure & Algorithm", "Vector Mathematics" ]
// ,   [ { icon: "github", url: "https://github.com/kanthonye/school-projects/blob/master/qc/CS368/Basic3DInteractEnvironment.cpp" } ]
// ,   "https://github.com/kanthonye/school-projects/blob/master/qc/CS368/Basic3DInteractEnvironment.cpp"
// ,   "img/simple-scene.gif"
// ,   "As part of my coursework in the Intro to Computer Graphics course at Queens College, I undertook a challenging project to create an interactive 3D scene with a Christmas theme. This project served as the final project for the course and was one of my favorite assignments during the semester. Using my prior experience in 3D graphics programming with modern OpenGL, which I had gained on my own before taking the course, I designed and developed the project using the OpenGL Graphics API version 2.1 and programming language C++. The project required the application of the concepts learned throughout the course to create a 2D or 3D scene from scratch. In my project, I created a fully-realized 3D scene featuring a snowman, table, chairs, rotating ceiling fan, and a free-moving 3D camera that allowed users to explore the scene from any angle. Notably, all objects in the scene were manually created, demonstrating my strong aptitude for hands-on design and development." +
//     "\n" +
//     "Note: all object in the scene were built manually." 
// );

// AddProjects
// ( 
//     "3D Graphics Programming Projects"
// ,   {start:{ month: "Oct", year:  "2014" }, end:{ month: "June", year:  "2016" }}
// ,   [ "C++", "GLSL", "Vulkan API", "Data Structure & Algorithm", "Vector Mathematics" ]
// ,   [ { icon: "github", url: "https://github.com/kanthonye/KEGE" } ]
// ,   "https://github.com/kanthonye/KEGE"
// ,   "img/Screenshot-2023-11-04-at-1.36.21-PM.png"
// ,   `
// <h3> Project Goal: </h3>

// <ul> 
//     <li> Learn 3D graphics programming fundamentals using the modern OpenGL API (e.g., OpenGL 4.5 with GLFW library). </li>
// </ul>

// <h3> Key Activities: </h3>

// <ul>
//     <li> Learn the modern OpenGL API (e.g., OpenGL 4.5 with GLFW library). </li>
//     <li> Learn GLSL (OpenGL shader programming language). </li>
//     <li> Build a basic graphics vector math library (e.g., for vector operations and matrix transformations) </li>
//     <li> Build an .obj file loader and a .dae file loader for loading 3D models into the program. </li>
//     <li> Create interactive demos showcasing functionalities like rotating objects, applying textures, lighting effects, particle system editor, terrain rendering with height maps, and 3d object animation. </li>
// </ul>

// <h3> Outcomes: </h3>

// <ul>
//     <li> Honed my C/C++ software development skills. </li>
//     <li> Gained valuable insights in linear algebra and vector calculus. </li>
// <ul>
// `
// );
