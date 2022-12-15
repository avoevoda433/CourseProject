import React, { Component } from 'react';
import DepartmentsService from './DepartmentsService';

const departmentsService = new DepartmentsService();

class DepartmentsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      departments: [],
    };
    this.handleDelete = this.handleDelete.bind(this);


  }
  componentDidMount() {
    var self = this;
    departmentsService.getDepartments().then(function (result) {
      console.log(result);
      self.setState({ departments: result.data })
    });
  }

  handleDelete(e, id) {

    var self = this;
    departmentsService.deleteDepartment({ id: id }).then(() => {
      var newArr = self.state.departments.filter(function (obj) {
        return obj.id !== id;
      });

      self.setState({ departments: newArr })
    });

  }

  render() {
    return (
      <div className="departments--list">
        <div className='container info'>
          <div className='row'>
            <div className='col-10'>
              <h1>Отделы</h1>
            </div>
            <div className='col-2'>
              <a className="btn btn-primary" href={"/department"}> Добавить отдел</a>
            </div>
          </div>
        </div>
        <div className='container info'>
          <table className="table">
            <thead key="thead">
              <tr>
                <th>#</th>
                <th>Название</th>
              </tr>
            </thead>

            <tbody>
              {this.state.departments.map(c =>

                <tr key={c.id}>
                  <td>{c.id} </td>
                  <td>{c.name}</td>
                  <td>
                    <a href={"/department/" + c.id} className="btn btn-warning"> Изменить</a>
                    <button onClick={(e) => this.handleDelete(e, c.id)} className="btn btn-danger"> Удалить</button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DepartmentsList;