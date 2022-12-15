import React, { Component } from 'react';
import EmployeesService from '../employees/EmployeesService';
import TrackingService from './TrackingService';

const employeesService = new EmployeesService();
const trackingService = new TrackingService();

class TrackingList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            tracking: [],
        };
        this.handleDelete = this.handleDelete.bind(this);


    }
    componentDidMount() {
        var self = this;
        employeesService.getEmployees().then(function (result) {
            console.log(result);
            self.setState({ employees: result.data })
        });
        trackingService.getTracking().then(function (result) {
            console.log(result);
            self.setState({ tracking: result.data })
        });

    }

    handleDelete(e, id) {

        var self = this;
        trackingService.deletetTrack({ id: id }).then(() => {
            var newArr = self.state.tracking.filter(function (obj) {
                return obj.id !== id;
            });

            self.setState({ tracking: newArr })
        });

    }

    render() {
        return (
            <div className="work_shifts--list row">
                <div className='col-12'>
                    <div className='container info'>
                        <div className='row'>
                            <div className='col-10'>
                                <h1>Учет рабочего времени</h1>
                            </div>
                            <div className='col-2'>
                                <a className="btn btn-primary" href={"/track"}> Добавить запись</a>
                            </div>
                        </div>
                    </div>
                    <div className='container info'>
                        <table className="table">
                            <thead key="thead">
                                <tr>
                                    <th>#</th>
                                    <th>Сотрудник</th>
                                    <th>Количество часов</th>
                                    <th>Дата</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.tracking.map(c =>

                                    <tr key={c.id}>
                                        <td>{c.id} </td>
                                        <td>{this.state.employees.map(e =>
                                            (e.id === c.employee_info) ? e.surname : ''
                                            )}</td>
                                        <td>{c.hours}</td>
                                        <td>{c.date}</td>
                                        <td>
                                            <button onClick={(e) => this.handleDelete(e, c.id)} className="btn btn-danger"> Удалить</button>
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

export default TrackingList;