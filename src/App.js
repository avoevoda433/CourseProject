import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css';

import DepartmentsList from './departments/DepartmentsList'
import DepartmentsCreateUpdate from './departments/DepartmentCreateUpdate'
import SpecialitiesList from './specialities/SpecialitiesList';
import SpecialitiesCreateUpdate from './specialities/SpecialityCreateUpdate';
import EmployeesList from './employees/EmployeesList';
import EmployeeCreateUpdate from './employees/EmployeeCreateUpdate'
import WorkShiftsList from './work_shifts/WorkShiftsList';
import WorkShiftsCreateUpdate from './work_shifts/WorkShiftsCreateUpdate';
import EmployeeShiftsCreateUpdate from './employee_shifts/EmployeeShiftsCreateUpdate';
import TrackingList from './tracking_work_time/TrackingList';
import TrackingCreateUpdate from './tracking_work_time/TrackingCreateUpdate';

const BaseLayout = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#"><h2>Курсовой проект</h2></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/departments">Отделы</a>
          <a className="nav-item nav-link" href="/specialities">Специальности</a>
          <a className="nav-item nav-link" href="/employees">Сотрудники</a>
          <a className="nav-item nav-link" href="/work_shifts">Рабочие смены</a>
          <a className="nav-item nav-link" href="/tracking">Учет рабочего времени</a>
        </div>
      </div>
    </nav>

    <div className="content">
        <Route path="/departments" exact component={DepartmentsList} />
        <Route path="/department/:pk" component={DepartmentsCreateUpdate} />
        <Route path="/department/" exact component={DepartmentsCreateUpdate} />
        <Route path="/specialities" exact component={SpecialitiesList} />
        <Route path="/speciality/:pk" component={SpecialitiesCreateUpdate} />
        <Route path="/speciality/" exact component={SpecialitiesCreateUpdate} />
        <Route path="/employees" exact component={EmployeesList} />
        <Route path="/employee/:pk" component={EmployeeCreateUpdate} />
        <Route path="/employee/" exact component={EmployeeCreateUpdate} />
        <Route path="/work_shifts" exact component={WorkShiftsList} />
        <Route path="/work_shift/:pk" component={WorkShiftsCreateUpdate} />
        <Route path="/work_shift/" exact component={WorkShiftsCreateUpdate} />
        <Route path="/employee_shift/:pk" component={EmployeeShiftsCreateUpdate} />
        <Route path="/employee_shift/" exact component={EmployeeShiftsCreateUpdate} />
        <Route path="/tracking/" exact component={TrackingList} />
        <Route path="/track/:pk" component={TrackingCreateUpdate} />
        <Route path="/track/" exact component={TrackingCreateUpdate} />
    </div>

  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    );
  }
}

export default App;