import React, { Component } from 'react';
import SpecialitiesService from './SpecialitiesService';
import DepartmentsService from '../departments/DepartmentsService';

const specialitiesService = new SpecialitiesService();
const departmentsService = new DepartmentsService();

class SpecialitiesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      specialities: [],
      departments: [],
    };
    this.handleDelete = this.handleDelete.bind(this);


  }
  componentDidMount() {
    var self = this;
    specialitiesService.getSpecialities().then(function (result) {
      console.log(result);
      self.setState({ specialities: result.data })
    });
    departmentsService.getDepartments().then(function(result) {
      self.setState({departments: result.data})
  }
  )
  }

  handleDelete(e, id) {

    var self = this;
    specialitiesService.deleteSpeciality({ id: id }).then(() => {
      var newArr = self.state.specialities.filter(function (obj) {
        return obj.id !== id;
      });

      self.setState({ specialities: newArr })
    });

  }

  render() {
    return (
      <div className="specialities--list">
        <div className='container info'>
          <div className='row'>
            <div className='col-10'>
              <h1>Специальности</h1>
            </div>
            <div className='col-2'>
              <a className="btn btn-primary" href={"/speciality"}> Добавить специальность</a>
            </div>
          </div>
        </div>
        <div className='container info'>
          <table className="table">
            <thead key="thead">
              <tr>
                <th>#</th>
                <th>Название</th>
                <th>Рублей/час</th>
                <th>Макс. разряд</th>
                <th>% за рязряд</th>
                <th>% за год стажа</th>
                <th>% премии</th>
                <th>Отдел</th>
              </tr>
            </thead>

            <tbody>
              {this.state.specialities.map(c =>

                <tr key={c.id}>
                  <td>{c.id} </td>
                  <td>{c.name}</td>
                  <td>{c.hourly_rate}</td>
                  <td>{c.max_qualification_level}</td>
                  <td>{c.max_ql_percent}</td>
                  <td>{c.year_experience_percent}</td>
                  <td>{c.premium_percent}</td>
                  <td>{this.state.departments.map(d => 
                    (c.department === d.id) ? d.name : ''
                    )}</td>
                  <td>
                    <a href={"/speciality/" + c.id} className="btn btn-warning"> Изменить</a>
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

export default SpecialitiesList;