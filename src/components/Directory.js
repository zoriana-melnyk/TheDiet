import React from "react";

import './Directory.scss';


import { Table } from 'react-bootstrap';

function Directory() {
    return (
        <div className="Directory">
            <div className="Directory__mainBlock">
                <div className="Directory__mainBlock__info">
                    <h1 className="Directory__mainBlock__info__header pt-2">
                        Довідник
                    </h1>
                    <h2 className="Directory__mainBlock__info__text">
                        добової норми калорій для людини
                    </h2>
                </div>
                <div className="Directory__mainBlock__tableContainer">
                    <p className="Directory__mainBlock__tableContainer__tablerHeader">Фізіологічні потреби чоловіків</p>
                    <Table bordered className="Directory__mainBlock__tableContainer__table">
                        <thead className="Directory__mainBlock__tableContainer__table__head">
                            <tr>
                                <th>Група інтенсивності праці</th>
                                <th>Вікова група</th>
                                <th>Енергія</th>
                                <th>Білки</th>
                                <th>Жири</th>
                                <th>Вуглеводи</th>
                            </tr>
                        </thead>
                        <tbody className="Directory__mainBlock__tableContainer__table__body">
                            <tr>
                                <td>I</td>
                                <td>18-29</td>
                                <td>2450<br />
                                    2300<br />
                                    2100</td>
                                <td >67<br />
                                    63<br />
                                    58</td>
                                <td >68<br />
                                    64<br />
                                    58</td>
                                <td>392<br />
                                    368<br />
                                    336</td>
                            </tr>
                            <tr>
                                <td>II</td>
                                <td>30-39</td>
                                <td>2800<br />
                                    2650<br />
                                    2500</td>
                                <td>77<br />
                                    73<br />
                                    69</td>
                                <td>78<br />
                                    76<br />
                                    69</td>
                                <td>448<br />
                                    424<br />
                                    400</td>
                            </tr>
                            <tr>
                                <td>III</td>
                                <td>40-59</td>
                                <td>3300<br />
                                    3150<br />
                                    2950</td>
                                <td>
                                    91<br />
                                    87<br />
                                    81
                                </td>
                                <td>92<br />
                                    88<br />
                                    82</td>
                                <td>528<br />
                                    504<br />
                                    472</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p className="Directory__mainBlock__tableContainer__tablerHeader">Фізіологічні потреби жінок</p>
                    <Table bordered className="Directory__mainBlock__tableContainer__table">
                        <thead className="Directory__mainBlock__tableContainer__table__head">
                            <tr>
                                <th>Група інтенсивності праці</th>
                                <th>Вікова група</th>
                                <th>Енергія</th>
                                <th>Білки</th>
                                <th>Жири</th>
                                <th>Вуглеводи</th>
                            </tr>
                        </thead>
                        <tbody className="Directory__mainBlock__tableContainer__table__body">
                            <tr>
                                <td>I</td>
                                <td>18-29</td>
                                <td>2000<br />
                                    1900<br />
                                    1800</td>
                                <td >55<br />
                                    52<br />
                                    50</td>
                                <td >56<br />
                                    53<br />
                                    51</td>
                                <td>320<br />
                                    304<br />
                                    288</td>
                            </tr>
                            <tr>
                                <td>II</td>
                                <td>30-39</td>
                                <td>2200<br />
                                    2150<br />
                                    2100</td>
                                <td>61<br />
                                    59<br />
                                    58</td>
                                <td>62<br />
                                    60<br />
                                    59</td>
                                <td>352<br />
                                    344<br />
                                    336</td>
                            </tr>
                            <tr>
                                <td>III</td>
                                <td>40-59</td>
                                <td>2600<br />
                                    2550<br />
                                    2500</td>
                                <td>
                                    72<br />
                                    70<br />
                                    69
                                </td>
                                <td>73<br />
                                    71<br />
                                    70</td>
                                <td>416<br />
                                    408<br />
                                    400</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
export { Directory };