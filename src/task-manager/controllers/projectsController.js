const Project = require("../models/project");

const getProjects = async (req, res) => {
  try {
    const Projects = await Project.find();
    res.status(200).json(Projects);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las proyectos" });
  }
};

const createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ error: "Error al crear la proyecto" });
  }
};

const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar la proyecto" });
  }
};

const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "proyecto eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la proyecto" });
  }
};

module.exports = { getProjects, createProject, updateProject, deleteProject };
