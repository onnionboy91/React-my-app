import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        return (
        <EmployeesListItem {...item}/>
        )
    })
    return (
        <li className="app-list list-group">
            {elements}
        </li>
    )
}

export default EmployeesList;