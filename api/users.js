import db from '../../lib/db';

export default async (req, res) => {
  try {
    const users = await db.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data' });
  }
};