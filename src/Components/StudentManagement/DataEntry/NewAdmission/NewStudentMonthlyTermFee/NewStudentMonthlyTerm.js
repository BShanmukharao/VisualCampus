import React from 'react';
import { useEffect, useMemo } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewStudentMonthlyTerm.css'
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';

/*
<div className='application-registration-table-bg-container'>   
                <MaterialReactTable table={table}/>
            </div>
*/

const data = [
    {
        type: "1",
        particulars: "raju",
        amount: 100,
        concess: 120,
        netfee: 250
    },
    {
        type: "2",
        particulars: "ravi",
        amount: 130,
        concess: 100,
        netfee: 150
    },
    {
        type: "3",
        particulars: "kavi",
        amount: 100,
        concess: 90,
        netfee: 300
    },
];

function ApplicationRegistration() {

    const [getTodayData, setTodayDate] = React.useState('');

    useEffect(() => {

        const currentDate = new Date()

        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        const formattedDate = `${month}-${day}-${year}`;
        setTodayDate(formattedDate)
    }, []);

    const columns = useMemo(

        () => [
          {
            accessorKey: 'type',
            header: 'type'.toUpperCase(),
            size: 150,
          },
          {
            accessorKey: 'particulars',
            header: 'particulars'.toUpperCase(),
            size: 150,
          },
          {
            accessorKey: 'amount',
            header: 'amount'.toUpperCase(),
            size: 200,
          },
          {
            accessorKey: 'concess',
            header: 'concess'.toUpperCase(),
            size: 150,
          },
          {
            accessorKey: 'netfee',
            header: 'NET FEE',
            size: 150,
          },
        ],
        [],
      );

    const table = useMaterialReactTable({
        columns,
        data,
      });


    return (
        <div className='application-registration-bg-container'>
            <form className='application-registration-form-bg-container'>
                <h1 className='application-registration-main-heading mb-0'>NEW STUDENT MONTHLY FEE</h1>
                <div className='container-fluid container-with-button pt-2'>
                    <h1>Continue with another</h1>
                </div>
            </form>
        </div>
    )
}

export default ApplicationRegistration

