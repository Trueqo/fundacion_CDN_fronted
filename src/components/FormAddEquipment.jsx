import React from 'react'
import { Formik } from 'formik'
import { createDevice, getDevices } from '../Service/createDevice'


const FormAddEquipment = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Equipo añadido correctamente')
    }



    return (
        <div className='bg-white p-4 rounded-xl overflow-y-auto w-[75%] mb-[2rem]'>
            <Formik
                initialValues={{
                    nombre: '',
                    serie: '',
                    precinto: 0,
                    proveedor: '',
                    placa: '',
                    marca: '',
                    modelo: '',
                    ubicacion: '',
                    dateNow: '',
                    buyDate: '',
                    vidaUtil: 0,
                    dRespuestos: false,
                    seFabrica: false,
                    existeMejorTecnologia: false,
                    nivelDeCriticidad: 1,
                    cumpleNecesidadesActuales: false,
                    inspeccionVisual: 22,
                    haSidoRepadado: false,
                    nivelDeCarga: 0,
                    cumpleMantenimiento: false,
                    regimenTrabajo: 0,
                    incidentesOEventos: false,
                    cumpleParametrosParaAtencion: false,
                    valorHistorico: 0,
                    costoReparaciones: 0,
                    costoEquipoNuevo: 0,
                }}
                onSubmit={(datos) => {
                    console.log(datos)
                    alert('Equipo añadido correctamente')
                    createDevice(datos).then(res => {
                        console.log(res)
                    }).then(err => {
                        console.log(err)
                    })
                    getDevices().then(res => {
                        console.log(res)
                    })
                }}
            >
                {({ handleSubmit, values, handleChange, handleBlur }) => (
                    <form onSubmit={handleSubmit} className="gap-x-2 gap-y-1 overflow-y-auto">

                        <div className='grid grid-cols-4 gap-2 pb-4'> {/* primer div */}
                            <div className="flex flex-col">
                                <label htmlFor='nombre'>Nombre del equipo</label>
                                <input
                                    type='text'
                                    id='nombre'
                                    name='nombre'
                                    placeholder='nombre del equipo'
                                    value={values.nombre}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border border-black px-1'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='precinto'>Precinto del equipo</label>
                                <input
                                    type='precinto'
                                    id='precinto'
                                    name='precinto'
                                    placeholder='Precinto'
                                    value={values.precinto}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border border-black px-1'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='serie'>Serial del equipo</label>
                                <input
                                    type='text'
                                    id='serie'
                                    name='serie'
                                    placeholder='Serial del equipo'
                                    value={values.serie}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border border-black px-1'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='proveedor'>Proveedor del equipo</label>
                                <input
                                    type='text'
                                    id='proveedor'
                                    name='proveedor'
                                    placeholder='Proveedor del equipo'
                                    value={values.proveedor}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border border-black px-1'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='placa'>Placa del equipo</label>
                                <input
                                    type='text'
                                    id='placa'
                                    name='placa'
                                    placeholder='Placa del equipo'
                                    value={values.placa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border border-black px-1'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='marca'>Marca del equipo</label>
                                <input
                                    type='text'
                                    id='marca'
                                    name='marca'
                                    placeholder='marca del equipo'
                                    value={values.marca}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border border-black px-1'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='modelo'>Modelo del equipo</label>
                                <input
                                    type='text'
                                    id='modelo'
                                    name='modelo'
                                    placeholder='modelo del equipo'
                                    value={values.modelo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border border-black px-1'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='ubicacion'>Ubicacion del equipo</label>
                                <input
                                    type='text'
                                    id='ubicacion'
                                    name='ubicacion'
                                    placeholder='ubicacion del equipo'
                                    value={values.ubicacion}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border border-black px-1'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='datenow'>Fecha Actual</label>
                                <input
                                    type='text'
                                    id='datenow'
                                    name='datenow'
                                    placeholder='Fecha Actual'
                                    value={values.datenow}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border border-black px-1'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='buyDate'>Fecha de compra</label>
                                <input
                                    type='text'
                                    id='buyDate'
                                    name='buyDate'
                                    placeholder='Fecha de compra'
                                    value={values.buyDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border border-black px-1'
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='vidaUtil'>vida util del equipo</label>
                                <input
                                    type='text'
                                    id='vidaUtil'
                                    name='vidaUtil'
                                    placeholder='vida util del equipo'
                                    value={values.vidaUtil}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border border-black px-1'
                                />
                            </div>

                        </div>

                        <div className='grid grid-cols-4 '> {/* segundo div */}
                            <div className="flex flex-col border border-gray-500 text-center">

                                <label htmlFor='dRespuestos'>¿Disponibilidad de respuestos?</label>
                                <div className='flex justify-center gap-x-2'>
                                    <label htmlFor="dRespuestos">No</label>
                                    <input
                                        type="checkbox"
                                        id="dRespuestos"
                                        name="dRespuestos"
                                        className='text-center'
                                        value={values.dRespuestos}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className='flex justify-center gap-x-2'>
                                    <label htmlFor="dRespuestos">Sí</label>
                                    <input
                                        type="checkbox"
                                        id="dRespuestos"
                                        name="dRespuestos"
                                        value={values.dRespuestos}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col  border border-gray-500 text-center">

                                <label htmlFor='seFabrica'>¿Todavía se fabrica?</label>
                                <div className='flex justify-center gap-x-2'>
                                    <label htmlFor="seFabrica">No</label>
                                    <input
                                        type="checkbox"
                                        id="seFabrica"
                                        name="seFabrica"
                                        value={values.seFabrica}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className='flex justify-center gap-x-2'>
                                    <label htmlFor="seFabrica">Sí</label>
                                    <input
                                        type="checkbox"
                                        id="seFabrica"
                                        name="seFabrica"
                                        value={values.seFabrica}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col border border-gray-500 text-center ">

                                <label htmlFor='existeMejorTecnologia'>¿Existe mejor tecnología?</label>

                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="existeMejorTecnologia">Sí</label>
                                    <input type="radio" id="existeMejorTecnologia" name="existeMejorTecnologia" value="1"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="existeMejorTecnologia">No</label>
                                    <input type="radio" id="existeMejorTecnologia" name="existeMejorTecnologia" value="0"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col border border-gray-500 text-center">
                                    <label htmlFor='nivelDeCriticidad'>Nivel de criticidad</label>
                                <div className='flex justify-center gap-x-2'>
                                    <label htmlFor="nivelDeCriticidad">Baja</label>
                                    <input type="radio" id="nivelDeCriticidad" name="nivelDeCriticidad" value="1"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className='flex justify-center gap-x-2'>
                                    <label htmlFor="nivelDeCriticidad">Media</label>
                                    <input type="radio" id="nivelDeCriticidad" name="nivelDeCriticidad" value="2"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className='flex justify-center gap-x-2'>
                                    <label htmlFor="nivelDeCriticidad">Alta</label>
                                    <input type="radio" id="nivelDeCriticidad" name="nivelDeCriticidad" value="3"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col border border-gray-500 text-center">

                                <label htmlFor='cumpleNecesidadesActuales'>¿El equipo cumple las necesidades actuales?</label>
                                <div className='flex justify-center gap-x-2'>
                                    <label htmlFor="cumpleNecesidadesActuales">No</label>
                                    <input
                                        type="checkbox"
                                        id="cumpleNecesidadesActuales"
                                        name="cumpleNecesidadesActuales"
                                        value={values.cumpleNecesidadesActuales}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>

                                <div className='flex justify-center gap-x-2'>
                                    <label htmlFor="cumpleNecesidadesActuales">Sí</label>
                                    <input
                                        type="checkbox"
                                        id="cumpleNecesidadesActuales"
                                        name="cumpleNecesidadesActuales"
                                        value={values.cumpleNecesidadesActuales}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col border border-gray-500 text-center">
                                <label htmlFor='inspeccionVisual'>Inspeccion visual</label>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="inspeccionVisual">Bueno</label>
                                    <input type="radio" id="inspeccionVisual" name="inspeccionVisual" value="1"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </div>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="inspeccionVisual">Regular</label>
                                    <input type="radio" id="inspeccionVisual" name="inspeccionVisual" value="2"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </div>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="inspeccionVisual">Malo</label>
                                    <input type="radio" id="inspeccionVisual" name="inspeccionVisual" value="3"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </div>
                            </div>

                            {/* Ha sido reparado */}
                            <div className="flex flex-col border border-gray-500 text-center">
                                <label htmlFor='haSidoRepadado'>¿Ha sido reparado?</label>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="haSidoRepadado">Sí</label>
                                    <input type="radio" id="haSidoRepadado" name="haSidoRepadado" value="1"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </div>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="haSidoRepadado">No</label>
                                    <input type="radio" id="haSidoRepadado" name="haSidoRepadado" value="0"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </div>
                            </div>
                            {/* Nivel de carga de trabajo */}
                            <div className="flex flex-col border border-gray-500 text-center">
                                <label htmlFor='nivelDeCarga'>nivel de carga de trabajo</label>
                                <input
                                    type='nivelDeCarga'
                                    id='nivelDeCarga'
                                    name='nivelDeCarga'
                                    placeholder='Nivel de carga de trabajo'
                                    value={values.nivelDeCarga}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border text-center mx-[2rem] py-1 border-gray-500'
                                />
                            </div>

                            <div className="flex flex-col border border-gray-500 text-center">
                                <label htmlFor='cumpleMantenimiento'>¿El equipo cumple con los mantenimientos?</label>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="cumpleMantenimiento">Sí</label>
                                    <input type="radio" id="cumpleMantenimiento" name="cumpleMantenimiento" value="1"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </div>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="cumpleMantenimiento">No</label>
                                    <input type="radio" id="cumpleMantenimiento" name="cumpleMantenimiento" value="0"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </div>
                            </div>

                            <div className="flex flex-col border border-gray-500 text-center">
                                <label htmlFor='incidentesOEventos'>¿Se han presentados incidentes o eventos?</label>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="incidentesOEventos">Sí</label>
                                    <input type="radio" id="incidentesOEventos" name="incidentesOEventos" value="1"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </div>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="incidentesOEventos">No</label>
                                    <input type="radio" id="incidentesOEventos" name="incidentesOEventos" value="0"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </div>
                            </div>

                            <div className="flex flex-col border border-gray-500 text-center">
                                <label htmlFor='cumpleParametrosParaAtencion'>¿Cumple parametros para la atención?</label>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="cumpleParametrosParaAtencion">Sí</label>
                                    <input type="radio" id="cumpleParametrosParaAtencion" name="cumpleParametrosParaAtencion" value="1"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </div>
                                <div className='flex flex-row gap-x-2 justify-center'>
                                    <label htmlFor="cumpleParametrosParaAtencion">No</label>
                                    <input type="radio" id="cumpleParametrosParaAtencion" name="cumpleParametrosParaAtencion" value="0"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                </div>
                            </div>

                            <div className="flex flex-col border border-gray-500 text-center pt-4">
                                <label htmlFor='valorHistorico'>Valor historico</label>
                                <input
                                    type='valorHistorico'
                                    id='valorHistorico'
                                    name='valorHistorico'
                                    placeholder='valor historico'
                                    value={values.valorHistorico}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border text-center mx-[2rem] py-1 border-gray-500'
                                />
                            </div>

                            <div className="flex flex-col border text-center pt-4 mb-2 border-gray-500">
                                <label htmlFor='costoReparaciones'>Costo en reparaciones</label>
                                <input
                                    type='costoReparaciones'
                                    id='costoReparaciones'
                                    name='costoReparaciones'
                                    placeholder='costoReparaciones'
                                    value={values.costoReparaciones}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border text-center mx-[2rem] py-1 border-gray-500'
                                />
                            </div>

                            <div className="flex flex-col border text-center pt-4 mb-2 border-gray-500 pb-4">
                                <label htmlFor='costoEquipoNuevo'>Costo equipoNuevo</label>
                                <input
                                    type='costoEquipoNuevo'
                                    id='costoEquipoNuevo'
                                    name='costoEquipoNuevo'
                                    placeholder='costoEquipoNuevo'
                                    value={values.costoEquipoNuevo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='border text-center mx-[2rem] py-1 border-gray-500'
                                />
                            </div>
                        </div>


                        <div className='flex items-center justify-center '>
                            <button
                                type='submit'
                                className='mt-2 bg-[#3c7791] rounded-[0.2rem] px-6 py-2'
                            >
                                Añadir equipo
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default FormAddEquipment