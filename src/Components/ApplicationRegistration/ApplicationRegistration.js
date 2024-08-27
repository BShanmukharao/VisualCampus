import React from 'react';
import { useState, useMemo, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ApplicationRegistration.css'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';


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
    {
        type: "4",
        particulars: "roja",
        amount: 290,
        concess: 420,
        netfee: 150
    },
    {
        type: "5",
        particulars: "sravani",
        amount: 240,
        concess: 100,
        netfee: 120
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
                header: 'TYPE',
                size: 150,
            },
            {
                accessorKey: 'particulars',
                header: 'PARTICULARS',
                size: 150,
            },
            {
                accessorKey: 'amount',
                header: 'AMOUNT -RS',
                size: 150,
            },
            {
                accessorKey: 'concess',
                header: 'CONCESS -RS',
                size: 150,
            },
            {
                accessorKey: 'netfee',
                header: 'NET FEE -RS',
                size: 150,
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data,
    });

    /*
    <div className="application-registration-table">
          <MaterialReactTable table={table} />
    </div>
    */

    return (
        <div className='applicationRegistration-bg-container'>
            <h1 className='application-registration-main-heading'>APPLICATION REGISTRATION</h1>
            <div className='container-fluid application-registration-container'>
                <form className='row application-registration-form-bg-container mb-5'>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>TODAY DATE</label><br />
                        <input type='text' className="input-filed" value={getTodayData} onChange={() => { }} />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>ACTION</label><br />
                        <input type='text' className="input-filed" />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>CLASS</label><br />
                        <select className="input-filed">
                            <option selected value="nursary">NURSARY</option>
                            <option value="L.K.G">L.K.G</option>
                            <option value="U.K.G">U.K.G</option>
                            <option value="class-1">CLASS-1</option>
                            <option value="class-2">CLASS-2</option>
                            <option value="class-3">CLASS-3</option>
                            <option value="class-4">CLASS-4</option>
                            <option value="class-5">CLASS-5</option>
                            <option value="class-6">CLASS-6</option>
                            <option value="class-7">CLASS-7</option>
                            <option value="class-8">CLASS-8</option>
                            <option value="class-9">CLASS-9</option>
                            <option value="class-10">CLASS-10</option>
                        </select>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>STUDENT NAME</label><br />
                        <input type='text' className="input-filed" />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>D.O.B</label><br />
                        <input type='date' className="input-filed" />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>FATHER NAME</label><br />
                        <input type='text' className="input-filed" />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>MOTHER NAME</label><br />
                        <input type='text' className="input-filed" />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>SEX</label><br />
                        <select className="input-filed">
                            <option selected value="male">MALE</option>
                            <option value="female">FEMALE</option>
                        </select>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>GUARDIAN</label><br />
                        <input type='text' className="input-filed" />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>CASTE</label><br />
                        <select className="input-filed">
                            <option selected value="general">GENERAL</option>
                            <option value="obc">OBC</option>
                            <option value="sc">SC</option>
                            <option value="st">ST</option>
                            <option value="other">OTHERS</option>
                        </select>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>ADDRESS</label><br />
                        <input type='text' className="input-filed" />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>RELIGION</label><br />
                        <select className="input-filed">
                            <option selected value="hinduism">HINDUSIM</option>
                            <option value="christianity">CHRISTIANITY</option>
                            <option value="sikhism">SIKHISM</option>
                            <option value="buddhism">BUDDHISM</option>
                            <option value="jainism">JAINISM</option>
                            <option value="islam">ISLAM</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>MARKS (%)</label><br />
                        <input type='text' className="input-filed" />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>MODE</label><br />
                        <select className="input-filed">
                            <option selected value="cash">CASH</option>
                            <option value="online">ONLINE</option>
                        </select>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>FEE GROUP</label><br />
                        <input type='text' className="input-filed" />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>REGN (#)</label><br />
                        <input type='text' className="input-filed" />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>ISSUE DATE</label><br />
                        <input type='date' className="input-filed" />
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                        <label className='input-label'>RECEIPT (#)</label><br />
                        <input type='text' className="input-filed" />
                    </div>
                </form>

                <div className="application-registration-table">
                    
                </div>
            </div>
        </div>
    )
}

export default ApplicationRegistration

