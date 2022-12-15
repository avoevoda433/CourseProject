import React, { Component } from 'react';
import SpecialitiesService from './SpecialitiesService';
import DepartmentsService from '../departments/DepartmentsService';

const specialitiesService = new SpecialitiesService();
const departmentsService = new DepartmentsService();

class SpecialitiesCreateUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {departments: []}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameRef = React.createRef();
        this.hourly_rate = React.createRef();
        this.max_qualification_level = React.createRef();
        this.max_ql_percent = React.createRef();
        this.year_experience_percent = React.createRef();
        this.premium_percent = React.createRef();
        this.department = React.createRef();
    }

    componentDidMount() {
        var self = this;
        const { match: { params } } = this.props;
        if (params && params.pk) {
            specialitiesService.getSpeciality(params.pk).then((c) => {
                this.nameRef.current.value = c.name;
                this.hourly_rate.current.value = c.hourly_rate;
                this.max_qualification_level.current.value = c.max_qualification_level;
                this.max_ql_percent.current.value = c.max_ql_percent;
                this.year_experience_percent.current.value = c.year_experience_percent;
                this.premium_percent.current.value = c.premium_percent;
                this.department.current.value = c.department;
            })
        }
        departmentsService.getDepartments().then(function(result) {
            self.setState({departments: result.data})
        }
        )
    }

    handleCreate() {
        specialitiesService.createSpeciality(
            {
                "name": this.nameRef.current.value,
                "hourly_rate": this.hourly_rate.current.value,
                "max_qualification_level": this.max_qualification_level.current.value,
                "max_ql_percent": this.max_ql_percent.current.value,
                "year_experience_percent": this.year_experience_percent.current.value,
                "premium_percent": this.premium_percent.current.value,
                "department": this.department.current.value
            }
        ).then(() => {
            alert("Специальность добавлена");
        }).catch(() => {
            alert('There was an error! Please re-check your form.');
        });
    }

    handleUpdate(pk) {
        specialitiesService.updateSpeciality(
            {
                "id": pk,
                "name": this.nameRef.current.value,
                "hourly_rate": this.hourly_rate.current.value,
                "max_qualification_level": this.max_qualification_level.current.value,
                "max_ql_percent": this.max_ql_percent.current.value,
                "year_experience_percent": this.year_experience_percent.current.value,
                "premium_percent": this.premium_percent.current.value,
                "department": this.department.current.value
            }
        ).then((result) => {
            console.log(result);
            alert("Специальность обновлена");
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
                    <h2>Управление специальностями</h2>
                </div>
                <div className='card-body'>
                <form className="row g-3 needs-validation" novalidate onSubmit={this.handleSubmit}>
                    <div class="col-md-8">
                        <label htmlFor="validationCustom01" className="form-label">Название</label>
                        <input type="text" ref={this.nameRef} className="form-control" id="validationCustom01" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="validationCustom02" className="form-label">Рублей/час</label>
                        <input type="number" step="0.01" ref={this.hourly_rate} className="form-control" id="validationCustom02" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="validationCustom010" className="form-label">Макс. разряд</label>
                        <input type="number" ref={this.max_qualification_level} className="form-control" id="validationCustom010" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom03" className="form-label">% за разряд</label>
                        <input type="number" step="0.01" ref={this.max_ql_percent} className="form-control" id="validationCustom03" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom04" className="form-label">% за год стажа</label>
                        <input type="number" step="0.01" ref={this.year_experience_percent} className="form-control" id="validationCustom04" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom05" className="form-label">% премии</label>
                        <input type="number" step="0.01" ref={this.premium_percent} className="form-control" id="validationCustom05" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="validationCustom06" className="form-label">Отдел</label>
                        <select className="form-select" ref={this.department} id="validationCustom06" required>
                            <option selected disabled defaultValue="">Выбрать...</option>
                            {this.state.departments.map(c => 
                                <option value={c.id}>{c.name}</option>
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

export default SpecialitiesCreateUpdate;