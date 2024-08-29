import React from 'react';
import { useEffect, useMemo } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ApplicationsRegistrationFee.css'
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
                <h1 className='application-registration-main-heading mb-0'>APPLICATION REGISTRATION</h1>
                <div className='container-fluid container-with-button pt-2'>
                    <div className='row'>
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
                            <select className="input-filed" defaultValue="NURSARY">
                                <option value="nursary">NURSARY</option>
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
                            <select className="input-filed" defaultValue="male">
                                <option value="male">MALE</option>
                                <option value="female">FEMALE</option>
                            </select>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>GUARDIAN</label><br />
                            <input type='text' className="input-filed" />
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 label-and-input'>
                            <label className='input-label'>CASTE</label><br />
                            <select className="input-filed" defaultValue="general">
                                <option value="general">GENERAL</option>
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
                            <select className="input-filed" defaultValue="hinduism">
                                <option value="hinduism">HINDUSIM</option>
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
                            <select className="input-filed" defaultValue="CASH">
                                <option value="cash">CASH</option>
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
                    </div>
                    <div className='buttons-container pt-4 pb-4'>
                        <button className='buttons btn btn-primary' type='button'>BACK</button>
                        <button className='buttons btn btn-success' type='button'>SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ApplicationRegistration

