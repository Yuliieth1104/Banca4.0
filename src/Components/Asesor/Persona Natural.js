import React,{useState} from 'react'
import './Estilos.css'
import {Form, FormCheck} from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const PersonaNatural = () => {

    const [startDate, setStartDate] = useState(new Date());
    return (
       
    <main className="titulo">

        <div className='PN'>
            <h1>PERSONA NATURAL</h1>
        </div>
        <br/>

        <div className='row'>
        <Col> 
        <h4 className="espacio">Tipo de solicitud</h4>
        <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Vinculación"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Actualización"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />

    </div>
  ))}
</Form>
          </Col>
        <Col> 
        <h4 className="espacio">Tipo de solicitante</h4>
        <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Beneficiario/Ordenante de giros"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
    </div>
  ))}
</Form>
          </Col>

        <Col> 
        <h4 className="espacio">Fecha diligenciamiento</h4>

        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  
          </Col>
        </div>
        <div className='row'>
            <h4 className="espacio">Información personal</h4>
        <br/>
        <Col className='column'>
        <form action="">
            <label htmlFor="">Primer Nombre</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        <br/>
        <form action="">
            <label htmlFor="">Primer Apellido</label>
            <input type="text" placeholder="Usuario"/>
        </form>
         </Col>
        <br/>
        <Col className='column'>
        <form action="">
            <label htmlFor="">Segundo Nombre</label>
            <input type="text" placeholder="Usuario"/>
        </form> 
        <br/>
        <form action="">
            <label htmlFor="">Segundo Apellido</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
        <br/>
       <div className='row'>
       <div className='Col'>
       <label htmlFor="">Tipo de documento</label>
        <Form>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="C.C"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="T.I"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        label="R.civil"
        name="group1"
        type={type}
        id={`inline-${type}-3`}
      />    
      <Form.Check
        inline
        label="Cédula extranjería"
        name="group1"
        type={type}
        id={`inline-${type}-3`}
      />    
      <Form.Check
      inline
      label="Pasaporte"
      name="group1"
      type={type}
      id={`inline-${type}-3`}
    />
    <Form.Check
        inline
        label="Carné diplomatico"
        name="group1"
        type={type}
        id={`inline-${type}-3`}
      />
    </div>
  ))}
</Form>

</div>
        </div>
        </div>
        <div className='row'>
        <Col className='column'>
        <form action="">
            <label htmlFor="">Nº documento</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        <form action="">
            <label htmlFor="">Lugar de expedición</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
        <Col className='column'>
        <form action="">
            <label htmlFor="">Fecha de expedición</label>
        </form>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

        <form action="">
            <label htmlFor="">Fecha de nacimiento</label>
        </form>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </Col>
     </div>

     <div className='row'>
     <Col>
        <form action="">
            <label htmlFor="">Ciudad de nacimiento</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
        <Col>
        <form action="">
            <label htmlFor="">Genero</label>
        </form>
       
        <Form>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="">
      <Form.Check
        inline
        label="F"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="M"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      /> 
      </div>
       ))}
       </Form>
        </Col>
        <Col>
        <form action="">
            <label htmlFor="">Estado civil</label>
        </form>

        <Form>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Soltero"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Casado"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      /> 
       <Form.Check
        inline
        label="Unión libre"
        name="group1"
        type={type}
        id={`inline-${type}-3`}
      />
      </div>
       ))}
       </Form>
        </Col>
     </div>
       
       <div className='row'>
        <Col>
        <form action="">
            <label htmlFor="">Nacionalidad</label>
        </form>
        <Form>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Colombiano"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Estado unidense"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      /> 
       <Form.Check
        inline
        label="Otra, ¿Cuál?"
        name="group1"
        type={type}
        id={`inline-${type}-3`}
      />
      <input type="text" placeholder="Usuario"/>
      </div>
       ))}
       </Form>
        </Col>
        </div>

        <div className='row'>
            <h4 className="espacio">Información de contacto personal</h4>
        </div>
      
      <div className='row'>
        <Col>
        <form action="">
            <label htmlFor="">Dirección residencia</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
        <br/>
        <Col>
        <form action="">
            <label htmlFor="">Bloque/Torre</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
        <br/>
        <Col>
        <form action="">
            <label htmlFor="">Apto/Casa</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
      </div>

      <div className='row'>
        <Col>
        <form action="">
            <label htmlFor="">Barrio</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
        <br/>
        <Col>
        <form action="">
            <label htmlFor="">Ciudad/Municipio</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
        <br/>
        <Col>
        <form action="">
            <label htmlFor="">Departamento</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
      </div>

      <div className='row'>
        <Col>
        <form action="">
            <label htmlFor="">País</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
        <br/>
        <Col>
        <form action="">
            <label htmlFor="">Teléfono</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
        <br/>
        <Col>
        <form action="">
            <label htmlFor="">Celular</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
      </div>
      <br/>
      <Col>
        <form action="">
            <label htmlFor="">Correo electrónico laboral</label>
            <input type="text" placeholder="Usuario"/>
        </form> 
      </Col>
      <div className='row'>
            <h4 className="espacio">Detalle información financiera</h4>
        </div>
        <div className='row'>
        <Col>
        <form action="">
            <label htmlFor="">Ingresos mensuales</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        <br/>
        <form action="">
            <label htmlFor="">Otros ingresos mensuales</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        <br/>
        <form action="">
            <label htmlFor="">Detalle otros ingresos mensuales
            (diferentes a su actividad económica principal)</label>
            <input type="text" placeholder="Usuario"/>
        </form>
         </Col>
        <br/>
        <Col>
        <form action="">
            <label htmlFor="">Total activos</label>
            <input type="text" placeholder="Usuario"/>
        </form> 
        <br/>
        <form action="">
            <label htmlFor="">Total pasivos</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        <br/>
        <form action="">
            <label htmlFor="">Total egresos mensuales</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
        </div>
        <div className='row'>
        <Col>
          <h5 className='parrafo'>Si su ocupacion es agricultor, comerciante,independiente o ganadero
            porfavor diligencie la siguiente información.
          </h5>
        </Col>

        <Col> 
        <form action="">
            <label htmlFor="">Ventas anuales</label>
            <input type="text" placeholder="Usuario"/>
        </form>
        </Col>
        
        <Col>
        <label htmlFor="">Fecha de diligenciamiento</label>

<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
       </Col>
        </div>
        <div>
        <div>
            <h4 className="espacio">Información tributaria</h4>
        </div>
        <div className='row'>
        <Col>
        <form action="">
            <label htmlFor="">¿Es declarante de renta?</label>
        </form>
        <Form>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="">
      <Form.Check
        inline
        label="Si"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="No"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      /> 
      </div>
       ))}
       </Form>
        </Col>
        </div>

        <div>
        <Col>
        <form action="">
            <label htmlFor="">Agente retenedor</label>
        </form>
        <Form>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="">
      <Form.Check
        inline
        label="Si"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="No"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      /> 
      </div>
       ))}
       </Form>
        </Col>
        </div>

        <div>
        <Col>
        <form action="">
            <label htmlFor="">Régimen de IVA</label>
        </form>
        <Form>
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="">
      <Form.Check
        inline
        label="Común"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Simplificado"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      /> 
      <Form.Check
        inline
        label="Ninguno"
        name="group1"
        type={type}
        id={`inline-${type}-3`}
      /> 
      </div>
       ))}
       </Form>
        </Col>
        </div>
    </div>
    </main>
   
    )
}

export default PersonaNatural
