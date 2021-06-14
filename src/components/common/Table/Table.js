import React from 'react';
import {
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Chip
} from "@material-ui/core";
import ScheduleIcon from '@material-ui/icons/Schedule';

function TableComponent(props) {
    const data = [
        {
            id: 0,
            name: "Mark Otto",
            email: "ottoto@wxample.com",
            product: "ON the Road",
            price: "$25 224.2",
            date: "11 May 2017",
            city: "Otsego",
            status: "Sent"
        },
        {
            id: 1,
            name: "Jacob Thornton",
            email: "thornton@wxample.com",
            product: "HP Core i7",
            price: "$1 254.2",
            date: "4 Jun 2017",
            city: "Fivepointville",
            status: "Sent"
        },
        {
            id: 2,
            name: "Larry the Bird",
            email: "bird@wxample.com",
            product: "Air Pro",
            price: "$1 570.0",
            date: "27 Aug 2017",
            city: "Leadville North",
            status: "Pending"
        },
        {
            id: 3,
            name: "Joseph May",
            email: "josephmay@wxample.com",
            product: "Version Control",
            price: "$5 224.5",
            date: "19 Feb 2018",
            city: "Seaforth",
            status: "Declined"
        },
        {
            id: 4,
            name: "Peter Horadnia",
            email: "horadnia@wxample.com",
            product: "Let's Dance",
            price: "$43 594.7",
            date: "1 Mar 2018",
            city: "Hanoverton",
            status: "Sent"
        }
    ]

    const keys = Object.keys(data[0]).map(key => key.toUpperCase());
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {keys.map(key => (
                        <TableCell key={key}>
                            {key}
                        </TableCell>))}
                    <TableCell>ACTIONS</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(({ id, name, email, product, price, date, city, status }) => (
                    <TableRow key={id}>
                        <TableCell>#{id}</TableCell>
                        <TableCell>{name}</TableCell>
                        <TableCell>{email}</TableCell>
                        <TableCell>{product}</TableCell>
                        <TableCell>{price}</TableCell>
                        <TableCell>
                            <div style={{ display: "flex" }}>
                                <ScheduleIcon style={{ marginRight: "5px" }} /> {date}
                            </div>
                        </TableCell>
                        <TableCell>{city}</TableCell>
                        <TableCell>{status}</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TableComponent;