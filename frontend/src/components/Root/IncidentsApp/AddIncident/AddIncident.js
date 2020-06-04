import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Button, ButtonSecondary } from "#root/components/shared/Button";
import Input from "#root/components/shared/Input";
import InputGroup from "#root/components/shared/InputGroup";
import Row from "#root/components/shared/Row";

const Form = styled.form`
  text-align: center;
`;

const RenderDone = ({ register }) => (
  <InputGroup title="Realizado por">
    <Row>
      <Input
        name="categoryId"
        ref={register}
        title="Categoria"
        type="text"
        value=""
      />
      <Input
        disabled
        name="createdAt"
        ref={register}
        title="Realizado fecha *"
        type="date"
        value="2020-04-25"
      />
    </Row>
    <Row>
      <Input
        disabled
        name="authorId"
        ref={register}
        title="Realizado por *"
        type="text"
        value="Alguien"
      />
    </Row>
  </InputGroup>
);

const RenderInfo = ({ register }) => (
  <InputGroup title="Informacion">
    <Row>
      <Input
        disabled
        name="_id"
        ref={register}
        title="N Registro"
        type="text"
        value={34567}
      />
      <Input
        disabled
        name="createdAt"
        ref={register}
        title="Fecha creacion"
        type="date"
        value="2020-04-25"
      />
    </Row>
    <Row>
      <Input
        disabled
        name="authorId"
        ref={register}
        title="Creado por"
        type="text"
        value="Alguien"
      />
    </Row>
  </InputGroup>
);

const RenderInvestigation = ({ register }) => (
  <InputGroup title="Investigacion del suceso">
    <Row>
      <Input
        name="description"
        ref={register}
        title="Descripcion clara y detallada del suceso"
        type="textarea"
      />
    </Row>
    <Row>
      <Input
        name="causes"
        ref={register}
        title="Causas del suceso (aspectos que contribuyeron a su materializacion)"
        type="textarea"
      />
    </Row>
    <Row>
      <Input
        name="possibilityRepetitionId"
        options={[
          { value: 1, title: "Baja" },
          { value: 2, title: "Media" },
          { value: 3, title: "Alta" }
        ]}
        ref={register}
        title="Posibilidad de repeticion estimada"
        type="radio"
      />
    </Row>
    <Row>
      <Input
        name="correctiveMeassures"
        ref={register}
        title="Medidas correctoras que propone"
        type="textarea"
      />
    </Row>
  </InputGroup>
);

const RenderUser = ({ register }) => (
  <InputGroup title="A rellenar por Usuario">
    <Row>
      <InputGroup sub title="Categoria Notificacion">
        <Row>
          <Input
            name="notificationCategoryId"
            options={[
              { value: 1, title: "Accidente" },
              { value: 2, title: "Incidente" }
            ]}
            ref={register}
            type="checkbox"
          />
        </Row>
      </InputGroup>
      <InputGroup sub title="Clasificacion Notificacion">
        <Row>
          <Input
            name="notificationClassificationId"
            options={[
              { value: 1, title: "Agresion fisica" },
              { value: 2, title: "Agresion verbal" }
            ]}
            ref={register}
            type="checkbox"
          />
        </Row>
      </InputGroup>
    </Row>
    <Row>
      <InputGroup sub title="Datos del Usuario">
        <Row>
          <Input
            name="affectedWorkerId"
            ref={register}
            title="Trabajador afectado *"
            type="text"
          />
        </Row>
        <Row>
          <Input
            name="sexId"
            options={[
              { value: 1, title: "Femenino" },
              { value: 2, title: "Hombre" }
            ]}
            ref={register}
            title="Sexo *"
            type="select"
          />
        </Row>
        <Row>
          <Input
            name="birthdate"
            ref={register}
            title="Fecha nacimiento *"
            type="date"
          />
        </Row>
        <Row>
          <Input name="phone1" ref={register} title="Telefono *" type="text" />
        </Row>
        <Row>
          <Input
            name="professionalGroupId"
            options={[
              { value: 1, title: "Grupo 1" },
              { value: 2, title: "Grupo 2" },
              { value: 3, title: "Grupo 3" }
            ]}
            ref={register}
            title="Grupo profesional *"
            type="select"
          />
        </Row>
        <Row>
          <Input
            name="professionalCategoryId"
            options={[
              { value: 1, title: "Cat 1" },
              { value: 2, title: "Cat 2" },
              { value: 3, title: "Cat 3" }
            ]}
            ref={register}
            title="Categoria profesional *"
            type="select"
          />
        </Row>
        <Row>
          <Input
            name="contractId"
            options={[
              { value: 1, title: "Contrato 1" },
              { value: 2, title: "Contrato 2" },
              { value: 3, title: "Contrato 3" }
            ]}
            ref={register}
            title="Contrato *"
            type="select"
          />
        </Row>
        <Row>
          <Input
            name="headquarterId"
            options={[
              { value: 1, title: "Las Palmas" },
              { value: 2, title: "Tenerife" }
            ]}
            ref={register}
            title="Centro de trabajo *"
            type="select"
          />
        </Row>
        <Row>
          <Input
            name="serviceId"
            options={[
              { value: 1, title: "Fraccionamiento" },
              { value: 2, title: "Informatica" }
            ]}
            ref={register}
            title="Servicio/Lugar de trabajo *"
            type="select"
          />
        </Row>
        <Row>
          <Input
            name="startAt"
            ref={register}
            title="Antiguedad en el puesto *"
            type="date"
          />
        </Row>
        <Row>
          <Input
            name="workshiftId"
            options={[
              { value: 1, title: "Mañana" },
              { value: 2, title: "Tarde" },
              { value: 3, title: "Noche" }
            ]}
            ref={register}
            title="Turno *"
            type="select"
          />
        </Row>
        <Row>
          <Input
            name="dutyShift"
            options={[
              { value: 1, title: "Si" },
              { value: 0, title: "No" }
            ]}
            ref={register}
            title="Realiza Guardias? *"
            type="radio"
          />
        </Row>
      </InputGroup>
      <InputGroup sub title="Otros datos">
        <Row>
          <Input
            name="affectedWorkers"
            ref={register}
            title="Otros trabajadores afectados"
            type="textarea"
          />
        </Row>
        <Row>
          <Input
            name="witnesses"
            ref={register}
            title="Testigos del incidente"
            type="textarea"
          />
        </Row>
        <Row>
          <Input
            name="witnessPhone"
            ref={register}
            title="Telefono"
            type="text"
          />
        </Row>
        <Row>
          <Input
            name="ownFunctions"
            options={[
              { value: 1, title: "Si" },
              { value: 0, title: "No" }
            ]}
            ref={register}
            title="Realizaba tarea propia del puesto? *"
            type="radio"
          />
        </Row>
      </InputGroup>
    </Row>
    <Row>
      <InputGroup sub title="Datos del suceso">
        <Row>
          <Input
            name="placeId"
            options={[
              { value: 1, title: "Fraccionamiento" },
              { value: 2, title: "Informatica" }
            ]}
            ref={register}
            title="Lugar donde se produjo *"
            type="select"
          />
        </Row>
        <Row>
          <Input
            name="incidentDate"
            ref={register}
            title="Fecha *"
            type="date"
          />
          <Input name="incidentTime" ref={register} title="Hora" type="time" />
        </Row>
        <Row>
          <Input
            name="workingTimeId"
            options={[
              { value: 1, title: "Primera" },
              { value: 2, title: "Segunda" }
            ]}
            ref={register}
            title="Hora de la jornada *"
            type="select"
          />
        </Row>
        <Row>
          <Input
            name="accidentFormId"
            options={[
              { value: 1, title: "Forma 1" },
              { value: 2, title: "Forma 2" },
              { value: 3, title: "Forma 3" }
            ]}
            ref={register}
            title="Forma del Accidente *"
            type="select"
          />
        </Row>
        <Row>
          <Input
            name="causativeMaterial"
            ref={register}
            title="Agente Material Causante del suceso"
            type="textarea"
          />
        </Row>
        <Row>
          <Input
            name="affectedBodyPartId"
            options={[
              { value: 1, title: "Cabeza" },
              { value: 2, title: "Manos" }
            ]}
            ref={register}
            title="Parte del Cuerpo Afectada *"
            type="select"
          />
        </Row>
      </InputGroup>
    </Row>
  </InputGroup>
);

const AddIncident = () => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    reset
  } = useForm();
  const history = useHistory();

  const onSubmit = handleSubmit(props => {
    console.log(props);
  });

  const onHandleCancel = () => {
    reset();
    history.goBack();
  };

  return (
    <Form onSubmit={onSubmit}>
      <RenderInfo register={register} />
      <RenderUser register={register} />
      <RenderInvestigation register={register} />
      <RenderDone register={register} />
      <Button type="submit">Crear Parte</Button>
      <ButtonSecondary onClick={onHandleCancel}>Cancelar</ButtonSecondary>
    </Form>
  );
};

export default AddIncident;
