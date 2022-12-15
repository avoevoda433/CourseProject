import React, { Component } from 'react';
import EmployeeShiftsService from './EmployeeShiftsService';
import EmployeesService from '../employees/EmployeesService';
import WorkShiftsService from '../work_shifts/WorkShiftsService';

const employeeShiftsService = new EmployeeShiftsService();
const employeesService = new EmployeesService();
const workShiftsService = new WorkShiftsService();

class EmployeeShiftsCreateUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            work_shifts: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.employee = React.createRef();
        this.working_shift = React.createRef();
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params && params.pk) {
            employeeShiftsService.getEmployeeShift(params.pk).then((c) => {
                this.employee.current.value = c.employee;
                this.work_shift.current.value = c.work_shift;
            })
        }
        var self = this;
        employeesService.getEmployees().then(function (result) {
            console.log(result);
            self.setState({ employees: result.data })
        });
        workShiftsService.getWorkShifts().then(function (result) {
            console.log(result);
            self.setState({ work_shifts: result.data })
        });
    }

    handleCreate() {
        employeeShiftsService.createtEmployeeShift(
            {
                "employee": this.employee.current.value,
                "working_shift": this.working_shift.current.value,
            }
        ).then(() => {
            alert("Добавлено");
        }).catch(() => {
            alert('There was an error! Please re-check your form.');
        });
    }

    handleUpdate(pk) {
        employeeShiftsService.updatetEmployeeShift(
            {
                "id": pk,
                "employee": this.employee.current.value,
                "working_shift": this.working_shift.current.value,
            }
        ).then((result) => {
            console.log(result);
            alert("Обновлено");
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
                    <h2>Управление сотрудниками и сменами</h2>
                </div>
                <div className='card-body'>
                    <form className="row g-3 needs-validation" noValidate onSubmit={this.handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="validationCustom05" className="form-label">Сотрудник</label>
                            <select className="form-select" ref={this.employee} id="validationCustom05" required>
                                <option selected disabled>Выбрать...</option>
                                {this.state.employees.map(c =>
                                    <option value={c.id}>{c.surname} {c.name} {c.patronymic}</option>
                                )}
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="validationCustom06" className="form-label">Смена</label>
                            <select className="form-select" ref={this.working_shift} id="validationCustom06" required>
                                <option selected disabled>Выбрать...</option>
                                {this.state.work_shifts.map(c =>
                                    <option value={c.id}>{c.number}</option>
                                )}
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit" value="Submit">Добавить</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EmployeeShiftsCreateUpdate;