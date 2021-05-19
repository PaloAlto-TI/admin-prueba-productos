const Project = require("../models/Project.js");
const projectCTRL = {};


projectCTRL.createProject = async(req, res) =>{
  const { name, description, priority, deliverydate } = req.body;

  try {
    let newProject = await Project.create(
      {
        name,
        description,
        priority,
        deliverydate,
      },
      {
        fields: ["name", "description", "priority", "deliverydate"],
      }
    );

    if (newProject) {
      return res.json({
        message: "Project created successfully!.",
        data: newProject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong...",
      data: {},
    });
  }
}

projectCTRL.getProjects = async(req, res) => {
  try {
    const projects = await Project.findAll();

    res.json({
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
}

projectCTRL.getOneProject = async(req, res) =>{
  const { id } = req.params;

  const project = await Project.findOne({
    where: {
      id,
    },
  });

  res.json(project);
}

projectCTRL.updateProject = async(req, res) =>{
  const id = req.params.id;

  const num = await Project.update(req.body, {
    where: { id: id },
  });

  if (num == 1) {
    res.send({
      message: "Project updated successfull!",
    });
  } else {
    res.send({
      message: `Cannot update Project with id=${id}. Maybe Project was not found or req.body is empty!`,
    });
  }
}

module.exports = projectCTRL;
