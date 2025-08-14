export default (req, res) => {
    res.status(200).json({ 
      message: "Halo dari Vercel!",
      timestamp: new Date().toISOString()
    });
  };