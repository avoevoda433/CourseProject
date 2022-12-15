import React, { Component } from 'react';
import SpecialitiesService from '../specialities/SpecialitiesService';
import EmployeesService from './EmployeesService';

const specialitiesService = new SpecialitiesService();
const employeesService = new EmployeesService();

class EmployeeCreateUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {specialities: []}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.name = React.createRef();
        this.surname = React.createRef();
        this.patronymic = React.createRef();
        this.phone = React.createRef();
        this.residential_address = React.createRef();
        this.registration_address = React.createRef();
        this.personal_account = React.createRef();
        this.premium = React.createRef();
        this.speciality = React.createRef();
    }

    componentDidMount() {
        var self = this;
        const { match: { params } } = this.props;
        if (params && params.pk) {
            employeesService.getEmployee(params.pk).then((c) => {
                this.name.current.value = c.name;
                this.surname.current.value = c.surname;
                this.patronymic.current.value = c.patronymic;
                this.phone.current.value = c.phone;
                this.residential_address.current.value = c.residential_address;
                this.registration_address.current.value = c.registration_address;
                this.personal_account.current.value = c.personal_account;
                this.premium.current.value = c.premium;
                this.speciality.current.value = c.speciality;
            })
        }
        specialitiesService.getSpecialities().then(function(result) {
            self.setState({specialities: result.data})
        }
        )
    }

    handleCreate() {
        employeesService.createtEmployee(
            {
                "name": this.name.current.value,
                "surname": this.surname.current.value,
                "patronymic": this.patronymic.current.value,
                "phone": this.phone.current.value,
                "residential_address": this.residential_address.current.value,
                "registration_address": this.registration_address.current.value,
                "personal_account": this.personal_account.current.value,
                "premium": this.premium.current.checked,
                "speciality": this.speciality.current.value
            }
        ).then(() => {
            alert("Сотрудник добавлен");
        }).catch(() => {
            alert('There was an error! Please re-check your form.');
        });
    }

    handleUpdate(pk) {
        employeesService.updatetEmployee(
            {
                "id": pk,
                "name": this.name.current.value,
                "surname": this.surname.current.value,
                "patronymic": this.patronymic.current.value,
                "phone": this.phone.current.value,
                "residential_address": this.residential_address.current.value,
                "registration_address": this.registration_address.current.value,
                "personal_account": this.personal_account.current.value,
                "premium": this.premium.current.checked,
                "speciality": this.speciality.current.value
            }
        ).then((result) => {
            console.log(result);
            alert("Сотрудник обновлен");
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
                    <h2>Управление сотрудниками</h2>
                </div>
                <div className='card-body'>
                <form className="row g-3 needs-validation" novalidate onSubmit={this.handleSubmit}>
                    <div class="col-md-12">
                        <label htmlFor="validationCustom01" className="form-label">Фамилия</label>
                        <input type="text" ref={this.surname} className="form-control" id="validationCustom01" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label htmlFor="validationCustom02" className="form-label">Имя</label>
                        <input type="text" ref={this.name} className="form-control" id="validationCustom02" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label htmlFor="validationCustom03" className="form-label">Отчество</label>
                        <input type="text" ref={this.patronymic} className="form-control" id="validationCustom03" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom04" className="form-label">Телефон</label>
                        <input type="number" ref={this.phone} className="form-control" id="validationCustom04" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom05" className="form-label">Лицевой счет</label>
                        <input type="number" ref={this.personal_account} className="form-control" id="validationCustom05" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom06" className="form-label">Адрес прописки</label>
                        <input type="text" ref={this.residential_address} className="form-control" id="validationCustom06" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom07" className="form-label">Адрес проживания</label>
                        <input type="text" ref={this.registration_address} className="form-control" id="validationCustom07" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-8">
                        <label htmlFor="validationCustom06" className="form-label">Специальность</label>
                        <select className="form-select" ref={this.speciality} id="validationCustom06" required>
                            <option selected disabled defaultValue="">Выбрать...</option>
                            {this.state.specialities.map(c => 
                                <option value={c.id}>{c.name}</option>
                            )}
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-check">
                            <input type="checkbox" ref={this.premium} className="form-check-input" id="validationCustom08"/>
                            <label htmlFor="validationCustom08" className="form-check-label">Премия</label>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
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

export default EmployeeCreateUpdate;