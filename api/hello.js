    // Gunakan export ES Modules yang eksplisit
export default function handler(req, res) {
    res.status(200).json({ 
      message: "Ini berhasil!",
      timestamp: new Date().toISOString()
    });
  }