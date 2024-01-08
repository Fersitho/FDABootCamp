
export const getMovies = (req,res) => {
    try {
        console.log('Hola esto es getMovies')
        // const events = await Events.find();
    
        return res.status(200).json({
          status: "Success",
          message: "Eventos listados",
          error: null,
        });
      } catch (error) {
        console.log(error)
        res.status(404).json({
          status: "Failed",
          message: "Error listando eventos",
          error: error,
        });
      }
    
}

 