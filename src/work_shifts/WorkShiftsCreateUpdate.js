import React, { Component } from 'react';
import WorkShiftsService from './WorkShiftsService';

const workShiftsService = new WorkShiftsService();

class WorkShiftsCreateUpdate extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.number = React.createRef();
        this.hours_count = React.createRef();
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params && params.pk) {
            workShiftsService.getWorkShift(params.pk).then((c) => {
                this.number.current.value = c.number;
                this.hours_count.current.value = c.hours_count;
            })
        }
    }

    handleCreate() {
        workShiftsService.createWorkShift(
            {
                "number": this.number.current.value,
                "hours_count": this.hours_count.current.value,
            }
        ).then(() => {
            alert("Смена добавлена");
        }).catch(() => {
            alert('There was an error! Please re-check your form.');
        });
    }

    handleUpdate(pk) {
        workShiftsService.updateWorkShift(
            {
                "id": pk,
                "number": this.number.current.value,
                "hours_count": this.hours_count.current.value,
            }
        ).then((result) => {
            console.log(result);
            alert("Смена обновлена");
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
                    <h2>Управление сменами</h2>
                </div>
                <div className='card-body'>
                    <form className="row g-3 needs-validation" noValidate onSubmit={this.handleSubmit}>
                        <div className="col-6">
                            <label htmlFor="validationCustom04" className="form-label">Номер</label>
                            <input type="number" ref={this.number} className="form-control" id="validationCustom04" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="validationCustom05" className="form-label">Количество рабочих часов</label>
                            <input type="number" ref={this.hours_count} className="form-control" id="validationCustom05" required />
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

export default WorkShiftsCreateUpdate;