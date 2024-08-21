import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM almacen ORDER BY id_almacen ASC");
    return rows;
};

const getAlmacenById = async (id) => {
    try {
        const query = 'SELECT * FROM almacen WHERE id_almacen = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const createAlmacen = async (nombre, ubicacion) => {
    try {
        const query = 'INSERT INTO almacen (nombre, ubicacion) VALUES ($1, $2) RETURNING *';
        const values = [nombre, ubicacion];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const updateAlmacen = async (id, nombre, ubicacion) => {
    try {
        const query = 'UPDATE almacen SET nombre = $1, ubicacion = $2 WHERE id_almacen = $3 RETURNING *';
        const values = [nombre, ubicacion, id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteAlmacen = async (id) => {
    try {
        const query = 'DELETE FROM almacen WHERE id_almacen = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};


const getUbicacionByIdAlmacen = async (id) => {
    try {
        const query = 'SELECT ubicacion FROM almacen WHERE id_almacen = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

export const almacenModel = {
    findAll, 
    getAlmacenById,
    createAlmacen, 
    updateAlmacen,
    deleteAlmacen,
    getUbicacionByIdAlmacen,
};
