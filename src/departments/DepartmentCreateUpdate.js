import React, { Component } from 'react';
import DepartmentsService from './DepartmentsService';

const departmentsService = new DepartmentsService();

class DepartmentsCreateUpdate extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameRef = React.createRef();
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    if (params && params.pk) {
      departmentsService.getDepartment(params.pk).then((c) => {
        this.nameRef.current.value = c.name;
      })
    }
  }

  handleCreate() {
    departmentsService.createDepartment(
      {
        "name": this.nameRef.current.value,
      }
    ).then(() => {
      alert("Отдел добавлен");
    }).catch(() => {
      alert('There was an error! Please re-check your form.');
    });
  }

  handleUpdate(pk) {
    departmentsService.updateDepartment(
      {
        "id": pk,
        "name": this.nameRef.current.value,
      }
    ).then((result) => {
      console.log(result);
      alert("Отдел обновлен");
    }).catch(() => {
      alert('There was an error! Please re-check your form.');
    });
  }

  handleSubmit(event) {
    const { match: { params } } = this.props;

    if (params && params.pk) {
      this.handleUpdate(params.pk);
    }
    else {
      this.handleCreate();
    }

    event.preventDefault();
  }

  render() {
    return (
      <div className='card form'>
        <div className='card-body'>
          <h2>Управление отделами</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="card-body">
            <label>
              Название:</label>
            <input className="form-control" type="text" ref={this.nameRef} />
            <input className="btn btn-primary" type="submit" value="Добавить" />
          </div>
        </form>
      </div>
    );
  }
}

export default DepartmentsCreateUpdate;