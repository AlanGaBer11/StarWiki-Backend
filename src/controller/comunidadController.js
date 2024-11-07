const comunidadProcess = require("../process/comunidadProcess");

const getAllComunidades = async (req, res) => {
  try {
    const comunidades = await comunidadProcess.getAllComunidades();
    // Convertimos la imagen a Base64 si existe
    const comunidadesBase64Imagen = comunidades.map(comunidad => {
      if (comunidad.imagen) {
        comunidad.imagen = Buffer.from(comunidad.imagen).toString('base64');
      }
      return comunidad;
    });
    res.status(200).json(comunidadesBase64Imagen);
  } catch (error) {
    console.error('Error al obtener las comunidades', error);
    res.status(502).json({ error: 'Error al obtener las comunidades' });
  }
};

const getOneComunidad = async (req, res) => {
  try {
    const comunidad = await comunidadProcess.getOneComunidad(req.params.id);
    // Convertimos la imagen a Base64 si existe
    if (comunidad && comunidad.imagen) {
      comunidad.imagen = Buffer.from(comunidad.imagen).toString('base64');
    }
    res.status(200).json(comunidad);
  } catch (error) {
    console.error('Error al obtener la comunidad', error);
    res.status(500).json({ error: "Error al obtener la comunidad" });
  }
};

const createNewComunidad = async (req, res) => {
  try {
    const { tema, contenido, fecha, nombre_usuario, categoria } = req.body;
    let imagenBuffer = null;
    if (req.file) {
      imagenBuffer = req.file.buffer;
    }
    const comunidad = await comunidadProcess.createNewComunidad(
      tema,
      contenido,
      imagenBuffer,
      fecha,
      nombre_usuario,
      categoria
    );
    res.status(200).json(comunidad);
  } catch (error) {
    console.error('Error al crear una nueva comunidad', error);
    res.status(502).json({ error: 'Error al crear una nueva comunidad' });
  }
};

const updateOneComunidad = async (req, res) => {
  try {
    const { tema, contenido, fecha, nombre_usuario, categoria } = req.body;
    let imagenBuffer = req.body.imagen ? Buffer.from(req.body.imagen, 'base64') : null;
    
    const comunidad = await comunidadProcess.updateOneComunidad(
      tema,
      contenido,
      imagenBuffer,
      fecha,
      nombre_usuario,
      categoria,
      req.params.id
    );
    res.status(200).json(comunidad);
  } catch (error) {
    console.error('Error al actualizar la comunidad', error);
    res.status(500).json({ error: "Error al actualizar la comunidad" });
  }
};

const deleteOneComunidad = async (req, res) => {
  try {
    const comunidad = await comunidadProcess.deleteOneComunidad(req.params.id);
    res.status(200).json(comunidad);
  } catch (error) {
    console.error('Error al eliminar la comunidad', error);
    res.status(500).json({ error: "Error al eliminar la comunidad" });
  }
};

module.exports = {
  getAllComunidades,
  getOneComunidad,
  createNewComunidad,
  updateOneComunidad,
  deleteOneComunidad,
};
