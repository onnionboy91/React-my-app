import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css';

const EmployeesList = () => {
    return (
        <li className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </li>
    )
}

export default EmployeesList;