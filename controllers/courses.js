// array
let courses = [
  {
    id: 1,
    courseId: "DT162G",
    courseName: "Javascript-baserad webbutveckling",
    coursePeriod: 1,
  },
  {
    id: 2,
    courseId: "IK060G",
    courseName: "Projektledning",
    coursePeriod: 1,
  },
  {
    id: 3,
    courseId: "DT071G",
    courseName: "Programmering i C#.NET",
    coursePeriod: 2,
  },
  {
    id: 4,
    courseId: "DT148G",
    courseName: "Webbutveckling för mobila enheter",
    coursePeriod: 2,
  },
  { id: 5, courseId: "DT102G", courseName: "ASP.NET med C#", coursePeriod: 3 },
  {
    id: 6,
    courseId: "IG021G",
    courseName: "Affärsplaner och kommersialisering",
    coursePeriod: 3,
  },
  {
    id: 7,
    courseId: "DT069G",
    courseName: "Multimedia för webben",
    coursePeriod: 4,
  },
  {
    id: 8,
    courseId: "DT080G",
    courseName: "Självständigt arbete",
    coursePeriod: 4,
  },
];

// funktion för att hämta
export const getCourses = (req, res) => {
  res.send(courses);
};
// skapa
export const createCourse = (req, res) => {
  const course = {
    //   +1 för id
    id: courses.length + 1,
    courseId: req.body.courseId,
    courseName: req.body.courseName,
    coursePeriod: req.body.coursePeriod,
  };

  courses.push(course);

  res.send(`Course with name ${course.courseName} added to the database!`);
};

// singel
export const getSingle = (req, res) => {
  const { id } = req.params;

  // hitta kurs parseInt pga courseId
  const findCourse = courses.find((course) => course.id === parseInt(id));

  res.send(findCourse);
};

// radera
export const deleteCourse = (req, res) => {
  const { id } = req.params;

  // filtrera ut de element som inte har medskickat id.
  courses = courses.filter((course) => course.id != id);

  res.send(`Course with the id ${id} deleted from database.`);
};

// uppdatera
export const updateCourse = (req, res) => {
  const { id } = req.params;
  const { courseId, courseName, coursePeriod } = req.body;

  // hitta
  const updateCourse = courses.find((course) => course.id === parseInt(id));
  // uppdatera
  if (courseId) updateCourse.courseId = courseId;
  if (courseName) updateCourse.courseName = courseName;
  if (coursePeriod) updateCourse.coursePeriod = coursePeriod;

  res.send(`Course with id ${id} is updated`);
};
