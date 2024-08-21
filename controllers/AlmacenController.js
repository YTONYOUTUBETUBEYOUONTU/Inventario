import { almacenModel } from "../models/almacenModel.js";

const getAll = async (req, res) => {
    try {
        const response = await almacenModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


const getAlmacenById = async (req, res) => {
    const { id } = req.params;
    try {
        const almacen = await almacenModel.getAlmacenById(id);
        if (almacen) {
            res.json(almacen);
        } else {
            res.status(404).json({ message: 'Almacén no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar almacén por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createAlmacen = async (req, res) => {
    const { nombre, ubicacion } = req.body;
    try {
        const newAlmacen = await almacenModel.createAlmacen(nombre, ubicacion);
        res.status(201).json(newAlmacen);
    } catch (error) {
        console.error('Error al registrar almacén:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const updateAlmacen = async (req, res) => {
    const { id } = req.params;
    const { nombre, ubicacion } = req.body;
    try {
        const updatedAlmacen = await almacenModel.updateAlmacen(id, nombre, ubicacion);
        if (updatedAlmacen) {
            res.json(updatedAlmacen);
        } else {
            res.status(404).json({ message: 'Almacén no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar almacén por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteAlmacen = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAlmacen = await almacenModel.deleteAlmacen(id);
        if (deletedAlmacen) {
            res.json({ message: 'Almacén eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Almacén no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar almacén por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


const getUbicacionByIdAlmacen = async (req, res) => {
    const { id } = req.params;
    try {
        const almacen = await almacenModel.getUbicacionByIdAlmacen(id);
        if (almacen) {
            res.json(almacen);
        } else {
            res.status(404).json({ message: 'Almacén no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar ubicación del almacén por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const almacenController = {
    getAll,
    getAlmacenById,
    createAlmacen,
    updateAlmacen,
    deleteAlmacen,
    getUbicacionByIdAlmacen
};
