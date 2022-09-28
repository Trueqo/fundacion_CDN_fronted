import React, { useEffect, useState } from 'react'
import { utils, read, writeFile } from "xlsx";
import ButtonLoadData from '../components/ButtonLoadData';
import Axios from '../Service/Axios';

const Matriz = () => {

    const sendDataMultipleDevices = async (data) => {
        try {
            const response = await Axios.post('https://fundacion-cdn.vercel.app/createmultipledevices', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const res = response.data
            console.log("soy respuesta del nuevo axios ", res)
        } catch (error) {
            console.log("jueputa no funcioné",error)
            console.log(data)
        }
    }

    const payload = {
        data: [],
        columnas: [],
        codeColumnas: [],
        name: '',
        file: false
    }

    const [data, setData] = useState(payload);
    useEffect(() => {
        if (data.file) {
            console.log("data: ", data)
        }
        console.log("else", data)
    }, [data]);

    function handleFile(event) {

        const target = event.target

        const name = target.name

        if (name === 'file') {
            let reader = new FileReader()
            reader.readAsArrayBuffer(target.files[0])
            reader.onloadend = (e) => {

                const dataBinary = new Uint8Array(e.target.result);
                const workbook = read(dataBinary, { type: 'array' });
                const wsname = workbook.SheetNames[0];
                const ws = workbook.Sheets[wsname];

                const allData = utils.sheet_to_json(ws, { header: 1 });
                const columnas = allData.slice(0, 1)
                const data = allData.slice(1)
                const codeColumnas = make_cols(ws["!ref"])


                //Configuracion del payload para en enviar al redux
                payload.data = data;
                payload.codeColumnas = codeColumnas;
                payload.columnas = columnas;
                payload.file = true;
                payload.name = name
                console.log("Holaa ", data)
                console.log(payload)
                setData(payload)
                sendDataMultipleDevices(payload.data)
                console.log("Soy payload: ", payload.data)
            }
        }
    }



    function make_cols(refstr) {
        let o = [],
            C = utils.decode_range(refstr).e.c + 1;
        for (var i = 0; i < C; ++i) o[i] = { name: utils.encode_col(i), key: i };
        return o;
    };

    console.log(data.file)

    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-[4rem]'>
            <h1 className='text-[#3c7791] text-[3rem] mx-auto'>
                Cargar masiva de equipos
            </h1>
            <div>
                {data.file ?
                    <table className="table-zebra table-compact w-full ">
                        <thead className=' font-Roboto'>
                            <tr className=' w-full'>
                                {data.file ?
                                    data.columnas[0].map((c, index) => (
                                        <th className='bg-PrimarioColor2 text-black font-extrabold' key={index}>{c}</th>
                                    ))
                                    : <th>No hay</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {data.file ?

                                data.data.map((r, i) => (
                                    <tr className='hover' key={i}>
                                        {data.columnas[0].map((c, index) => (
                                            <td key={index}>{r[index]}</td>
                                        ))}
                                    </tr>
                                ))

                                : <tr>
                                    <td>no hay</td>
                                </tr>
                            }

                        </tbody>
                    </table>
                    : <div>
                        <ButtonLoadData handleFile={handleFile} />

                    </div>
                }
            </div>
        </div>
    )
}

export default Matriz