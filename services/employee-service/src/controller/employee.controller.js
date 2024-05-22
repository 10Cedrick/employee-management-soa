const db = require('../models');
const Employee = db.Employee;

exports.create = (req, res) => {
    const employee = {
        name : req.body.name,
        firstName : req.body.firstName,
        phone : req.body.phone,
        address: req.body.address,
        email : req.body.email,
        hireDate : req.body.hireDate
    }


    Employee.create(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
}


exports.findAll = async (req, res) => {
    try{
        const all = await Employee.findAll();
        res.send(all);
    }catch (error){
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving employee."
        });
    }

}

exports.findOne = async (req, res) => {
    try{
        const employee = await Employee.findByPk(req.params.id);
        if(!employee){
            return res.status(404).send({ message: "Employee not found" });
        }
        res.send(employee);
    }catch(error){
        res.status(500).send({
            message: "Error retrieving employee with id=" + req.params.id
        })
    }
}

exports.update = (req, res) => {
    const id = req.params.id;
    const employee = {
        name : req.body.name,
        firstName : req.body.firstName,
        phone : req.body.phone,
        address: req.body.address,
        email : req.body.email,
        hireDate : req.body.hireDate
    }

    Employee.update(employee, {
        where: {id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message : "Employee updated successfully"
            });
        }else{
            res.send({
            message : `Cannot update Employee with id=${id}. Maybe employee was not found or employees is empty`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Employee with id=" + id
        });
    })
}


exports.delete = (req, res) => {
    const id = req.params.id
    Employee.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Employee was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete employee with id=${id}. Maybe employee was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete employee with id=" + id,
          });
        })
}