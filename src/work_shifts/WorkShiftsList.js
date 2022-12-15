import React, { Component } from 'react';
import EmployeesService from '../employees/EmployeesService';
import WorkShiftsService from './WorkShiftsService';
import EmployeeShiftsService from '../employee_shifts/EmployeeShiftsService';

const employeesService = new EmployeesService();
const workShiftsService = new WorkShiftsService();
const employeeShiftsService = new EmployeeShiftsService();

class WorkShiftsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            work_shifts: [],
            employee_shifts: []
        };
        this.handleDelete1 = this.handleDelete1.bind(this);
        this.handleDelete2 = this.handleDelete2.bind(this);


    }
    componentDidMount() {
        var self = this;
        employeesService.getEmployees().then(function (result) {
            console.log(result);
            self.setState({ employees: result.data })
        });
        workShiftsService.getWorkShifts().then(function (result) {
            console.log(result);
            self.setState({ work_shifts: result.data })
        });
        employeeShiftsService.getEmployeeShifts().then(function (result) {
            console.log(result);
            self.setState({ employee_shifts: result.data })
        });
    }

    handleDelete1(e, id) {

        var self = this;
        workShiftsService.deleteWorkShift({ id: id }).then(() => {
            var newArr = self.state.work_shifts.filter(function (obj) {
                return obj.id !== id;
            });

            self.setState({ work_shifts: newArr })
        });

    }

    handleDelete2(e, id) {

        var self = this;
        employeeShiftsService.deletetEmployeeShift({ id: id }).then(() => {
            var newArr = self.state.work_shifts.filter(function (obj) {
                return obj.id !== id;
            });

            self.setState({ employee_shifts: newArr })
        });

    }

    render() {
        return (
            <div className="work_shifts--list row">
                <div className='col-6'>
                    <div className='container info'>
                        <div className='row'>
                            <div className='col-4'>
                                <h1>Рабочие смены</h1>
                            </div>
                            <div className='col-2'>
                                <a className="btn btn-primary" href={"/work_shift"}> Добавить смену</a>
                            </div>
                        </div>
                    </div>
                    <div className='container info'>
                        <table className="table">
                            <thead key="thead">
                                <tr>
                                    <th>#</th>
                                    <th>Номер смены</th>
                                    <th>Количество рабочих часов</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.work_shifts.map(c =>

                                    <tr key={c.id}>
                                        <td>{c.id} </td>
                                        <td>{c.number}</td>
                                        <td>{c.hours_count}</td>
                                        <td>
                                            <a href={"/work_shift/" + c.id} className="btn btn-warning"> Изменить</a>
                                            <button onClick={(e) => this.handleDelete1(e, c.id)} className="btn btn-danger"> Удалить</button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='container info'>
                        <div className='row'>
                            <div className='col-4'>
                                <h1>Смены и сотрудники</h1>
                            </div>
                            <div className='col-2'>
                                <a className="btn btn-primary" href={"/employee_shift"}> Добавить</a>
                            </div>
                        </div>
                    </div>
                    <div className='container info'>
                        <table className="table">
                            <thead key="thead">
                                <tr>
                                    <th>#</th>
                                    <th>Сотрудник</th>
                                    <th>Смена</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.employee_shifts.map(c =>

                                    <tr key={c.id}>
                                        <td>{c.id}</td>
                                        <td>{this.state.employees.map(e =>
                                            (e.id === c.employee) ? e.surname : ''
                                            )}</td>
                                        <td>{this.state.work_shifts.map(w =>
                                            (w.id === c.working_shift) ? w.number : ''
                                            )}</td>
                                        <td>
                                            <a href={"/work_shift/" + c.id} className="btn btn-warning"> Изменить</a>
                                            <button onClick={(e) => this.handleDelete2(e, c.id)} className="btn btn-danger"> Удалить</button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkShiftsList;