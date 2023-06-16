const getPopulations = (req, res) => {
  res.json(
    {
      message: 'Ini data populasi',
    },
  );
};

const getPopulationById = (req, res) => {
  res.json(
    {
      message: `Ini data populasi dari kota ${req.params.id}`,
      data: {
        id: req.params.id,
      },
    },
  );
};

const postPopulations = (req, res) => {
  const { name } = req.body;
  res.json(
    {
      message: 'kirim data populasi',
      data: {
        name,
      },
    },
  );
};

const putPopulations = (req, res) => {
  res.json(
    {
      message: 'ubah data populasi',
    },
  );
};

const deletePopulations = (req, res) => {
  res.json(
    {
      message: 'hapus data populasi',
    },
  );
};

module.exports = {
  getPopulations,
  getPopulationById,
  postPopulations,
  putPopulations,
  deletePopulations,
};
