import User from "../models/userModel";
import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email } = req.body;
    const newUser = new User({ name, lastName, email });
    await newUser.save();
    res.status(201).json({
      message: "Usuario creado exitosamente",
      data: newUser,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Error al crear el usuario",
      error: error.message,
    });
  }
};

const getUsers = async (_: Request, res: Response) => {
  try {
    const users = await User.find({ isDeleted: true });
    res.status(200).json({
      message: "Usuarios obtenidos exitosamente",
      data: users,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Error al obtener los usuarios",
      error: error.message,
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado",
        error: true,
      });
    }
    res.status(200).json({
      message: "Usuario encontrado",
      data: user,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Error al obtener el usuario",
      error: error.message,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, lastName, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, lastName, email },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "Usuario no encontrado",
        error: true,
      });
    }

    res.status(200).json({
      message: "Usuario actualizado exitosamente",
      data: updatedUser,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Error al actualizar el usuario",
      error: error.message,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado",
        error: true,
      });
    }

    if (!user.isDeleted) {
      return res.status(200).json({
        message: "Usuario ya está inactivo",
        data: user,
        error: false,
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { isDeleted: false },
      { new: true }
    );

    res.status(200).json({
      message: "Usuario desactivado correctamente",
      data: updatedUser,
      error: false,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Error al desactivar el usuario",
      error: error.message,
    });
  }
};


export {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};