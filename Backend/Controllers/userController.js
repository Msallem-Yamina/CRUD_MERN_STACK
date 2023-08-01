const UserModel =  require ('../Models/user');

// Add User
exports.AddUser = async (req, res) => {
    // req de postman 
    // console.log(req.body)

    const userObj = {
       name : req.body.name,
       password : req.body.password,
       email : req.body.email
     },
     user = new UserModel(userObj);
     try {
       const userAdded = await user.save();
       return res.status(200).json({ userAdded });
      } catch (error) {
       return res.status(400).json({ error });
    }
}

// Show Users 
exports.ShowUsers = async (req, res) => {
    try {
      // Récupérez tous les contacts depuis la base de données
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

// Update User By ID
exports.UpdateUser = async (req, res) => {
    const  id = req.params.id,
           updatedUser = req.body;
    try {
    // Find the User by ID and update its fields
    const result = await UserModel.findByIdAndUpdate(id, updatedUser);

    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user: result });
  } catch (error) {
    res.status(400).json({ error });
  }
}

// Delete User By ID
exports.DeleteUser = async (req, res) => {
    const  id = req.params.id;
    //  console.log(id)
   try {
     // Find the user by ID and delete it
     const deletedUser= await UserModel.findByIdAndDelete(id);
 
     if (!deletedUser) {
       return res.status(404).json({ error: 'User not found' });
     }
 
     res.status(200).json({ message: 'User deleted successfully' });
   } catch (error) {
     res.status(400).json({ error });
   }
 }