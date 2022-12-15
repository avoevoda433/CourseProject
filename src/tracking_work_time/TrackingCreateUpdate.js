import React, { Component } from 'react';
import WorkShiftsService from '../work_shifts/WorkShiftsService';
import TrackingService from './TrackingService';
import EmployeeShiftsService from '../employee_shifts/EmployeeShiftsService';
import EmployeesService from '../employees/EmployeesService';

const workShiftsService = new WorkShiftsService();
const trackingService = new TrackingService();
const employeeShiftsService = new EmployeeShiftsService();
const employeesService = new EmployeesService();

class TrackingCreateUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            tracking: [],
            work_shifts: [],
            employee_shifts: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.employee_info = React.createRef();
        this.hours = React.createRef();
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params && params.pk) {
            trackingService.getTrack(params.pk).then((c) => {
                this.employee_info.current.value = c.employee_info;
                this.hours.current.value = c.hours;
            })
        }
        var self = this;
        employeesService.getEmployees().then(function (result) {
            console.log(result);
            self.setState({ employees: result.data })
        });
        trackingService.getTracking().then(function (result) {
            console.log(result);
            self.setState({ tracking: result.data })
        });
        employeeShiftsService.getEmployeeShifts().then(function (result) {
            console.log(result);
            self.setState({ employee_shifts: result.data })
        });
        workShiftsService.getWorkShifts().then(function (result) {
            console.log(result);
            self.setState({ work_shifts: result.data })
        })
    }

    handleCreate() {
        trackingService.createTrack(
            {
                "employee_info": this.employee_info.current.value,
                "hours": this.hours.current.value,
            }
        ).then(() => {
            alert("Запись добавлена");
        }).catch(() => {
            alert('There was an error! Please re-check your form.');
        });
    }

    handleUpdate(pk) {
        trackingService.updateTrackt(
            {
                "id": pk,
                "employee_info": this.employee_info.current.value,
                "hours": this.hours.current.value,
            }
        ).then((result) => {
            console.log(result);
            alert("Запись обновлена");
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
                    <h2>Учет рабочего времени</h2>
                </div>
                <div className='card-body'>
                    <form className="row g-3 needs-validation" noValidate onSubmit={this.handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="validationCustom04" className="form-label">Сотрудник</label>
                            <select className="form-select" ref={this.employee_info} id="validationCustom04" required>
                                <option selected disabled>Выбрать...</option>
                                {this.state.employees.map(c =>
                                    <option value={c.id}>{c.surname} {c.name} {c.patronymic}</option>
                                )}
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-3">
                            <label htmlFor="validationCustom05" className="form-label">Количество отработанных часов</label>
                            <input type="number" ref={this.hours} className="form-control" id="validationCustom05" required />
                            <div className="valid-feedback">
                                Looks good!
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

export default TrackingCreateUpdate;