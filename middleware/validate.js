
export const validate = (schema) => (req, res, next) =>{
      try{
            schema.parse(req.body);
            next();
      } catch(error){
            const errorMessage = error.issues.map((err) => err.message);
            res.status(400).json({message: errorMessage.join(', ') });
      }
};