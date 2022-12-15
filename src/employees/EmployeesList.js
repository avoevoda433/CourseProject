import React, { Component } from 'react';
import EmployeesService from './EmployeesService';
import SpecialitiesService from '../specialities/SpecialitiesService';

const employeesService = new EmployeesService();
const specialitiesService = new SpecialitiesService();

class EmployeesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      specialities: [],
    };
    this.handleDelete = this.handleDelete.bind(this);


  }
  componentDidMount() {
    var self = this;
    employeesService.getEmployees().then(function (result) {
      console.log(result);
      self.setState({ employees: result.data })
    });
    specialitiesService.getSpecialities().then(function (result) {
      console.log(result);
      self.setState({ specialities: result.data })
    });
  }

  handleDelete(e, id) {

    var self = this;
    employeesService.deletetEmployee({ id: id }).then(() => {
      var newArr = self.state.employees.filter(function (obj) {
        return obj.id !== id;
      });

      self.setState({ employees: newArr })
    });

  }

  render() {
    return (
      <div className="employees--list">
        <div className='container info'>
          <div className='row'>
            <div className='col-10'>
              <h1>Сотрудники</h1>
            </div>
            <div className='col-2'>
              <a className="btn btn-primary" href={"/employee"}> Добавить сотрудника</a>
            </div>
          </div>
        </div>
        <div className='container info'>
          <table className="table">
            <thead key="thead">
              <tr>
                <th>#</th>
                <th>ФИО</th>
                <th>Телефон</th>
                <th>Прописка</th>
                <th>Проживание</th>
                <th>Счет</th>
                <th>Специальность</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map(c =>

                <tr key={c.id}>
                  <td>{c.id} </td>
                  <td>{c.surname} {c.name} {c.patronymic}</td>
                  <td>{c.phone}</td>
                  <td>{c.residential_address}</td>
                  <td>{c.registration_address}</td>
                  <td>{c.personal_account}</td>
                  <td>{this.state.specialities.map(d => 
                    (c.speciality === d.id) ? d.name : ''
                    )}</td>
                  <td>
                    <a href={"/employee/" + c.id} className="btn btn-warning"> Изменить</a>
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

export default EmployeesList;