import React from 'react'
import {  Table } from 'react-bootstrap';
const TableCom = ({ data }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>website</th>
                    <th>Company Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.company.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default TableCom